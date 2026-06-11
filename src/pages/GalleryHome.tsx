import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
import { songs, type Song } from '../data/songs';
import { useFirebaseSongs } from '../hooks/useFirebaseSongs';

const GOLD = '#d4a853';
const BG = '#07070b';
const RADIUS = 30;
const TEX_SIZE = 256;
const MAX_CONCURRENT_LOADS = 12;

/* ---------------- album art texture pipeline ---------------- */

const artUrlCache = new Map<string, Promise<string | null>>();

function fetchArtUrl(s: Song): Promise<string | null> {
  const key = `${s.artist}||${s.album}||${s.title}`;
  if (!artUrlCache.has(key)) {
    const params = new URLSearchParams({ title: s.title, artist: s.artist, album: s.album });
    artUrlCache.set(key, fetch(`/api/album-art?${params}`)
      .then(r => (r.ok ? r.json() : null))
      .then(d => d?.url ?? null)
      .catch(() => null));
  }
  return artUrlCache.get(key)!;
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

function createCardTexture(img: HTMLImageElement | null, song: Song, mode: 'art' | 'song' | 'album' | 'artist'): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = TEX_SIZE; c.height = TEX_SIZE;
  const ctx = c.getContext('2d')!;

  if (img) {
    const s = Math.min(img.width, img.height);
    ctx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, TEX_SIZE, TEX_SIZE);
  } else {
    const g = ctx.createLinearGradient(0, 0, TEX_SIZE, TEX_SIZE);
    g.addColorStop(0, '#15131c');
    g.addColorStop(1, '#0b0a10');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, TEX_SIZE, TEX_SIZE);
  }

  if (mode === 'art') {
    if (!img) {
      ctx.strokeStyle = 'rgba(212,168,83,0.18)';
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, TEX_SIZE - 4, TEX_SIZE - 4);
      ctx.fillStyle = 'rgba(212,168,83,0.30)';
      ctx.font = '700 90px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('♪', TEX_SIZE / 2, TEX_SIZE / 2 + 6);
    } else {
      ctx.strokeStyle = 'rgba(212,168,83,0.2)';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, TEX_SIZE - 2, TEX_SIZE - 2);
    }
  } else {
    ctx.fillStyle = 'rgba(7, 7, 11, 0.75)';
    ctx.fillRect(0, 0, TEX_SIZE, TEX_SIZE);

    ctx.strokeStyle = 'rgba(212,168,83,0.4)';
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, TEX_SIZE - 4, TEX_SIZE - 4);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let primaryText = '';
    let secondaryText = '';

    if (mode === 'song') {
      primaryText = song.title;
      secondaryText = song.artist;
    } else if (mode === 'album') {
      primaryText = song.album || 'Unknown Album';
      secondaryText = song.artist;
    } else if (mode === 'artist') {
      primaryText = song.artist;
      secondaryText = song.album || '';
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 20px Inter, sans-serif';
    const words = primaryText.split(' ');
    const lines = [];
    let line = '';
    const maxWidth = TEX_SIZE - 32;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    let startY = TEX_SIZE / 2 - (lines.length - 1) * 12;
    if (secondaryText) startY -= 15;

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i].trim(), TEX_SIZE / 2, startY + i * 24);
    }

    if (secondaryText) {
      ctx.fillStyle = '#d4a853';
      ctx.font = '500 14px Inter, sans-serif';
      let displaySec = secondaryText;
      if (ctx.measureText(displaySec).width > maxWidth) {
        displaySec = displaySec.substring(0, 18) + '...';
      }
      ctx.fillText(displaySec, TEX_SIZE / 2, startY + lines.length * 24 + 10);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/* ---------------- card data ---------------- */

interface GalleryItem {
  id: string;
  type: 'song' | 'artist' | 'album';
  title: string;
  subtitle: string;
  song: Song;
  navUrl: string;
}

interface CardEntry {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  item: GalleryItem;
  lon: number;
  lat: number;
  unit: THREE.Vector3;       // unit position in group-local space
  artState: 'none' | 'loading' | 'done';
  baseScale: number;
}

export default function GalleryHome() {
  const navigate = useNavigate();
  const mountRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const navigateRef = useRef(navigate);
  useEffect(() => { navigateRef.current = navigate; }, [navigate]);

  const { firebaseSongs } = useFirebaseSongs();
  const allSongs = useMemo(() => [...firebaseSongs, ...songs], [firebaseSongs]);
  const songCount = allSongs.length;
  const songsRef = useRef(allSongs);
  useEffect(() => {
    songsRef.current = allSongs;
  }, [allSongs]);

  const [viewMode, setViewMode] = useState<'art' | 'song' | 'album' | 'artist'>('art');
  const viewModeRef = useRef(viewMode);
  useEffect(() => {
    viewModeRef.current = viewMode;
  }, [viewMode]);

  const galleryItems = useMemo<GalleryItem[]>(() => {
    if (allSongs.length === 0) return [];

    if (viewMode === 'artist') {
      const artistMap = new Map<string, Song>();
      allSongs.forEach(s => {
        if (!artistMap.has(s.artist)) {
          artistMap.set(s.artist, s);
        }
      });
      return Array.from(artistMap.entries()).map(([name, s]) => ({
        id: name,
        type: 'artist',
        title: name,
        subtitle: 'Artist',
        song: s,
        navUrl: `/artist/${encodeURIComponent(name)}`
      }));
    }

    if (viewMode === 'album') {
      const albumMap = new Map<string, Song>();
      allSongs.forEach(s => {
        const key = `${s.artist}||${s.album}`;
        if (s.album && !albumMap.has(key)) {
          albumMap.set(key, s);
        }
      });
      return Array.from(albumMap.entries()).map(([, s]) => ({
        id: s.album,
        type: 'album',
        title: s.album,
        subtitle: s.artist,
        song: s,
        navUrl: `/browse?q=${encodeURIComponent(s.album)}`
      }));
    }

    // Default: 'art' / 'song' mode
    return allSongs.map(s => ({
      id: s.id,
      type: 'song',
      title: s.title,
      subtitle: s.artist,
      song: s,
      navUrl: `/song/${s.id}`
    }));
  }, [allSongs, viewMode]);

  const loadedImagesRef = useRef<Map<string, HTMLImageElement>>(new Map());
  const cardsListRef = useRef<CardEntry[]>([]);

  const playedIntro = useRef(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const list = galleryItems;
    if (list.length === 0) return;

    /* ---------- renderer / scene ---------- */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(BG);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, RADIUS * 0.9, RADIUS * 1.6);
    const camera = new THREE.PerspectiveCamera(46, mount.clientWidth / mount.clientHeight, 0.1, 200);
    camera.position.set(0, 0, 0);

    const group = new THREE.Group();
    scene.add(group);

    /* ---------- windowed layout — fixed pool, unlimited scroll ---------- */
    const n = list.length;
    const rows = Math.min(5, Math.max(2, Math.round(Math.sqrt(n / 6))));
    const CARD_LONN = THREE.MathUtils.degToRad(8.5); // fixed angular slot (~5 cols visible at FOV 46°)
    const WINDOW_COLS = 16;                           // columns kept in GPU at once (8 each side)
    const cardSize = RADIUS * CARD_LONN * 0.84;
    const latStep = Math.min(CARD_LONN * 1.18, THREE.MathUtils.degToRad(10.5));
    const latSpan = latStep * (rows - 1);

    const geo = new THREE.PlaneGeometry(1, 1);
    const pool: CardEntry[] = [];

    for (let i = 0; i < WINDOW_COLS * rows; i++) {
      const tex = createCardTexture(null, list[0].song, viewModeRef.current);
      const mat = new THREE.MeshBasicMaterial({ map: tex, fog: true });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.setScalar(cardSize);
      mesh.userData.index = i;
      mesh.userData.itemIdx = -1;
      group.add(mesh);
      pool.push({ mesh, item: list[0], lon: 0, lat: 0, unit: new THREE.Vector3(0, 0, -1), artState: 'none', baseScale: cardSize });
    }

    cardsListRef.current = pool;

    if (import.meta.env.DEV) {
      (window as unknown as Record<string, unknown>).__g = { pool, camera, group, renderer, THREE };
    }

    /* -- slot assignment helpers -- */
    let windowCenterCol = NaN;

    function placeSlot(poolIdx: number, col: number, row: number) {
      const entry = pool[poolIdx];
      const rawIdx = ((col * rows + row) % n + n) % n;
      if (entry.mesh.userData.itemIdx === rawIdx) return;

      const item = list[rawIdx];
      const lat = -latSpan / 2 + row * latStep;
      const lon = col * CARD_LONN;
      const unit = new THREE.Vector3(
        Math.cos(lat) * Math.sin(lon),
        Math.sin(lat),
        -Math.cos(lat) * Math.cos(lon),
      );
      entry.mesh.position.copy(unit).multiplyScalar(RADIUS);
      entry.mesh.lookAt(0, 0, 0);
      entry.lat = lat; entry.lon = lon; entry.unit = unit.clone();
      entry.item = item;
      entry.mesh.userData.itemIdx = rawIdx;
      entry.artState = 'none';

      // use cached image immediately, otherwise show placeholder
      const key = `${item.song.artist}||${item.song.album}||${item.song.title}`;
      const cached = loadedImagesRef.current.get(key);
      const tex = createCardTexture(cached ?? null, item.song, viewModeRef.current);
      const old = entry.mesh.material.map;
      entry.mesh.material.map = tex;
      entry.mesh.material.needsUpdate = true;
      if (old) old.dispose();
      if (cached) entry.artState = 'done';
    }

    function updateWindow(centerCol: number) {
      if (centerCol === windowCenterCol) return;
      windowCenterCol = centerCol;
      const start = centerCol - Math.floor(WINDOW_COLS / 2);
      for (let c = 0; c < WINDOW_COLS; c++)
        for (let r = 0; r < rows; r++)
          placeSlot(c * rows + r, start + c, r);
    }

    updateWindow(0);

    /* ---------- lazy texture loading for visible pool slots ---------- */
    let activeLoads = 0;
    let disposed = false;

    function pumpLoads() {
      if (disposed || activeLoads >= MAX_CONCURRENT_LOADS) return;
      const candidates = pool.filter(c => c.artState === 'none');
      for (const c of candidates) {
        if (activeLoads >= MAX_CONCURRENT_LOADS) break;
        c.artState = 'loading';
        activeLoads++;
        fetchArtUrl(c.item.song)
          .then(url => (url ? loadImage(url) : Promise.reject()))
          .then(img => {
            if (disposed) return;
            const key = `${c.item.song.artist}||${c.item.song.album}||${c.item.song.title}`;
            loadedImagesRef.current.set(key, img);
            const tex = createCardTexture(img, c.item.song, viewModeRef.current);
            const oldTex = c.mesh.material.map;
            c.mesh.material.map = tex;
            c.mesh.material.needsUpdate = true;
            if (oldTex) oldTex.dispose();
            gsap.fromTo(c.mesh.material, { opacity: 0.25 }, { opacity: 1, duration: 0.6, ease: 'power2.out',
              onStart: () => { c.mesh.material.transparent = true; },
              onComplete: () => { c.mesh.material.transparent = false; } });
            c.artState = 'done';
          })
          .catch(() => {
            if (!disposed) {
              const tex = createCardTexture(null, c.item.song, viewModeRef.current);
              const oldTex = c.mesh.material.map;
              c.mesh.material.map = tex;
              c.mesh.material.needsUpdate = true;
              if (oldTex) oldTex.dispose();
              c.artState = 'done';
            }
          })
          .finally(() => { activeLoads--; });
      }
    }
    const loadTimer = window.setInterval(pumpLoads, 250);

    /* ---------- interaction state ---------- */
    let rotY = 0, rotX = 0;
    let targetRotY = 0, targetRotX = 0;
    const maxPitch = latSpan / 2 + latStep;
    let dragging = false;
    let transitioning = false;
    let moved = 0;
    let lastX = 0, lastY = 0;
    let velX = 0, velY = 0;

    /* ---------- pinch-to-zoom state ---------- */
    const FOV_DEFAULT = 46;
    const FOV_MIN = 18;
    const FOV_MAX = 72;
    let targetFov = FOV_DEFAULT;
    const activePointers = new Map<number, { x: number; y: number }>();
    let pinching = false;
    let pinchDist = 0;

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(99, 99);
    let hovered: CardEntry | null = null;

    const label = labelRef.current;

    function setHover(c: CardEntry | null, ev?: PointerEvent) {
      if (c === hovered) {
        if (c && ev && label) { label.style.left = `${ev.clientX + 16}px`; label.style.top = `${ev.clientY + 12}px`; }
        return;
      }
      if (hovered) gsap.to(hovered.mesh.scale, { x: hovered.baseScale, y: hovered.baseScale, z: hovered.baseScale, duration: 0.45, ease: 'power3.out' });
      hovered = c;
      if (c) {
        gsap.to(c.mesh.scale, { x: c.baseScale * 1.14, y: c.baseScale * 1.14, z: c.baseScale * 1.14, duration: 0.45, ease: 'power3.out' });
        if (label && ev) {
          if (c.item.type === 'artist') {
            label.innerHTML = `<span style="color:#f0ead8;font-weight:800">${c.item.title}</span><span style="color:${GOLD};margin-left:8px;font-weight:500">Artist</span>`;
          } else {
            label.innerHTML = `<span style="color:#f0ead8;font-weight:800">${c.item.title}</span><span style="color:${GOLD};margin-left:8px;font-weight:500">${c.item.subtitle}</span>`;
          }
          label.style.opacity = '1';
          label.style.left = `${ev.clientX + 16}px`;
          label.style.top = `${ev.clientY + 12}px`;
        }
        renderer.domElement.style.cursor = 'pointer';
      } else {
        if (label) label.style.opacity = '0';
        renderer.domElement.style.cursor = dragging ? 'grabbing' : 'grab';
      }
    }

    function pick(ev: PointerEvent): CardEntry | null {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(group.children, false);
      if (!hits.length) return null;
      return pool[hits[0].object.userData.index as number] ?? null;
    }

    const el = renderer.domElement;
    el.style.cursor = 'grab';
    el.style.touchAction = 'none';

    const onPointerDown = (ev: PointerEvent) => {
      if (transitioning) return;
      activePointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
      el.setPointerCapture(ev.pointerId);

      if (activePointers.size === 2) {
        // second finger down — switch to pinch mode
        pinching = true;
        dragging = false;
        const pts = Array.from(activePointers.values());
        pinchDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
        setHover(null);
        return;
      }

      dragging = true;
      moved = 0;
      lastX = ev.clientX; lastY = ev.clientY;
      velX = 0; velY = 0;
      el.style.cursor = 'grabbing';
    };

    const onPointerMove = (ev: PointerEvent) => {
      if (transitioning) return;
      activePointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });

      if (pinching && activePointers.size >= 2) {
        const pts = Array.from(activePointers.values());
        const newDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
        const delta = pinchDist - newDist; // positive = pinch in = zoom in (smaller FOV)
        targetFov = THREE.MathUtils.clamp(targetFov + delta * 0.07, FOV_MIN, FOV_MAX);
        pinchDist = newDist;
        return;
      }

      if (dragging) {
        const dx = ev.clientX - lastX;
        const dy = ev.clientY - lastY;
        lastX = ev.clientX; lastY = ev.clientY;
        moved += Math.abs(dx) + Math.abs(dy);
        const k = 0.0042;
        targetRotY -= dx * k;
        targetRotX -= dy * k;
        targetRotX = THREE.MathUtils.clamp(targetRotX, -maxPitch, maxPitch);
        velX = dx; velY = dy;
        setHover(null);
      } else {
        setHover(pick(ev), ev);
      }
    };

    const onPointerUp = (ev: PointerEvent) => {
      activePointers.delete(ev.pointerId);

      if (pinching) {
        if (activePointers.size < 2) pinching = false;
        dragging = false;
        return;
      }

      if (!dragging) return;
      dragging = false;
      el.style.cursor = 'grab';
      targetRotY -= velX * 0.055;
      targetRotX = THREE.MathUtils.clamp(targetRotX - velY * 0.055, -maxPitch, maxPitch);
      if (moved < 6 && !transitioning) {
        const c = pick(ev);
        if (c) openCard(c);
      }
    };

    const onWheel = (ev: WheelEvent) => {
      if (transitioning) return;
      ev.preventDefault();
      if (ev.ctrlKey) {
        // trackpad pinch-to-zoom (browser sets ctrlKey for pinch gestures)
        targetFov = THREE.MathUtils.clamp(targetFov + ev.deltaY * 0.4, FOV_MIN, FOV_MAX);
      } else {
        targetRotY += ev.deltaY * 0.00055 + ev.deltaX * 0.00055;
      }
    };

    /* ---------- click → transition → song page ---------- */
    function openCard(c: CardEntry) {
      transitioning = true;
      setHover(null);
      // shortest-path yaw to bring card to front
      const desiredY = c.lon;
      const twoPi = Math.PI * 2;
      let dYaw = (desiredY - targetRotY) % twoPi;
      if (dYaw > Math.PI) dYaw -= twoPi;
      if (dYaw < -Math.PI) dYaw += twoPi;

      const state = { y: targetRotY, x: targetRotX, z: 0, fov: camera.fov };
      gsap.to(state, {
        y: targetRotY + dYaw,
        x: -c.lat,
        z: RADIUS * 0.62,
        fov: 32,
        duration: 0.95,
        ease: 'power3.inOut',
        onUpdate: () => {
          targetRotY = rotY = state.y;
          targetRotX = rotX = state.x;
          camera.position.set(0, 0, 0).addScaledVector(new THREE.Vector3(0, 0, -1), state.z);
          camera.fov = state.fov;
          targetFov = state.fov; // keep lerp in sync
          camera.updateProjectionMatrix();
        },
      });
      gsap.to(c.mesh.scale, { x: c.baseScale * 1.25, y: c.baseScale * 1.25, z: c.baseScale * 1.25, duration: 0.6, ease: 'power2.inOut' });
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 1, duration: 0.5, delay: 0.55, ease: 'power2.in',
          onComplete: () => navigateRef.current(c.item.navUrl),
        });
        overlayRef.current.style.pointerEvents = 'auto';
      }
    }

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('wheel', onWheel, { passive: false });

    /* ---------- intro ---------- */
    if (!playedIntro.current) {
      playedIntro.current = true;
      camera.fov = 72;
      targetFov = 72;
      camera.updateProjectionMatrix();
      gsap.to(camera, {
        fov: FOV_DEFAULT, duration: 1.6, ease: 'power3.out', delay: 0.15,
        onUpdate: () => { targetFov = camera.fov; camera.updateProjectionMatrix(); },
        onComplete: () => { targetFov = FOV_DEFAULT; },
      });
      pool.forEach(c => c.mesh.scale.setScalar(0.0001));
      pool.forEach(c => {
        const delay = 0.1 + Math.random() * 0.7;
        gsap.to(c.mesh.scale, { x: c.baseScale, y: c.baseScale, z: c.baseScale, duration: 0.9, delay, ease: 'back.out(1.4)' });
      });
      targetRotY = 0.35;
    }

    /* ---------- loop ---------- */
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!transitioning) {
        rotY += (targetRotY - rotY) * 0.065;
        rotX += (targetRotX - rotX) * 0.065;
        // smooth pinch zoom
        const fovDelta = targetFov - camera.fov;
        if (Math.abs(fovDelta) > 0.01) {
          camera.fov += fovDelta * 0.12;
          camera.updateProjectionMatrix();
        }
        // slide the pool window as user scrolls
        updateWindow(Math.round(rotY / CARD_LONN));
      }
      group.rotation.set(rotX, rotY, 0);
      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      window.clearInterval(loadTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('wheel', onWheel);
      gsap.globalTimeline.clear();
      pool.forEach(c => {
        if (c.mesh.material.map) c.mesh.material.map.dispose();
        c.mesh.material.dispose();
      });
      geo.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      cardsListRef.current = [];
    };
  }, [galleryItems]);

  const shuffle = () => {
    const list = songsRef.current;
    const r = list[Math.floor(Math.random() * list.length)];
    navigate(`/song/${r.id}`);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: BG, overflow: 'hidden' }}>
      <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

      {/* edge vignette */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 55%, rgba(7,7,11,0.85) 100%)' }} />

      {/* hover label */}
      <div ref={labelRef} style={{
        position: 'fixed', zIndex: 30, pointerEvents: 'none', opacity: 0,
        transition: 'opacity 0.2s', padding: '8px 14px', borderRadius: 10,
        background: 'rgba(10,10,16,0.88)', border: '1px solid #d4a85335',
        backdropFilter: 'blur(8px)', fontSize: 13, whiteSpace: 'nowrap',
        boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
      }} />

      {/* header */}
      <header style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
        display: 'flex', alignItems: 'center', gap: 16, padding: '20px 28px',
        pointerEvents: 'none',
      }}>
        <div style={{ pointerEvents: 'auto' }}>
          <h1 className="gold-shimmer" style={{ fontWeight: 900, fontSize: 20, margin: 0, letterSpacing: '-0.02em' }}>VIBE SHOWCASE</h1>
          <p style={{ color: '#5a4f3a', fontSize: 11, margin: '2px 0 0', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {viewMode === 'artist' ? `${galleryItems.length} artists` : viewMode === 'album' ? `${galleryItems.length} albums` : `${songCount} songs`} · spherical gallery
          </p>
        </div>
        <div style={{ flex: 1 }} />
        <nav style={{ display: 'flex', gap: 8, pointerEvents: 'auto' }}>
          {[
            { label: 'Browse', to: '/browse' },
            { label: 'Match', to: '/vibe-match' },
            { label: 'Stats', to: '/stats' },
          ].map(l => (
            <button key={l.to} onClick={() => navigate(l.to)}
              style={{
                background: 'rgba(255,255,255,0.04)', color: '#9a8f78', border: '1px solid rgba(255,255,255,0.08)',
                padding: '8px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                backdropFilter: 'blur(10px)', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = '#d4a85340'; e.currentTarget.style.background = '#d4a85312'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9a8f78'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
              {l.label}
            </button>
          ))}
          <button onClick={shuffle}
            style={{
              background: '#d4a85318', color: GOLD, border: '1px solid #d4a85335',
              padding: '8px 16px', borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: 'pointer',
              backdropFilter: 'blur(10px)', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px #d4a85330'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>
            ✦ Surprise me
          </button>
        </nav>
      </header>

      {/* bottom hint & view mode controls */}
      <div style={{
        position: 'absolute', bottom: 26, left: 28, right: 28, zIndex: 20,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12, pointerEvents: 'none',
      }}>
        <span style={{
          fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#5a4f3a',
          padding: '8px 18px', borderRadius: 999, background: 'rgba(10,10,16,0.5)',
          border: '1px solid rgba(212,168,83,0.12)', backdropFilter: 'blur(8px)',
        }}>
          drag to explore · click a card to open
        </span>

        <div style={{
          display: 'flex', gap: 6, pointerEvents: 'auto',
          background: 'rgba(10,10,16,0.65)', padding: 4, borderRadius: 14,
          border: '1px solid rgba(212,168,83,0.15)', backdropFilter: 'blur(10px)',
        }}>
          {[
            { key: 'art', label: '🎨 Art' },
            { key: 'song', label: '🎵 Song' },
            { key: 'album', label: '💿 Album' },
            { key: 'artist', label: '👤 Artist' },
          ].map(opt => (
            <button key={opt.key} onClick={() => setViewMode(opt.key as any)}
              style={{
                background: viewMode === opt.key ? '#d4a85320' : 'transparent',
                color: viewMode === opt.key ? GOLD : '#8a7f68',
                border: `1px solid ${viewMode === opt.key ? '#d4a85340' : 'transparent'}`,
                padding: '6px 12px', borderRadius: 10, fontSize: 12, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (viewMode !== opt.key) e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { if (viewMode !== opt.key) e.currentTarget.style.color = '#8a7f68'; }}>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* page-transition overlay */}
      <div ref={overlayRef} style={{ position: 'absolute', inset: 0, background: BG, opacity: 0, zIndex: 40, pointerEvents: 'none' }} />
    </div>
  );
}
