import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Music, SlidersHorizontal, X, Sparkles, Lightbulb } from 'lucide-react';
import { songs, type Song, EMOTION_COLORS, EMOTION_LABELS, EMOTIONAL_AXES, SUBCATEGORY_LABELS, SUBCATEGORY_COLORS } from './data/songs';
import SongCard from './components/SongCard';
import SuggestSongModal from './components/SuggestSongModal';
import { useFirebaseSongs } from './hooks/useFirebaseSongs';
import { useFavorites } from './hooks/useFavorites';

const GOLD = '#d4a853';
const GOLD_DIM = '#d4a85330';
const GOLD_BORDER = '#d4a85345';

const SORT_OPTIONS = [
  { value: 'title', label: 'A–Z' },
  { value: 'year', label: 'Year' },
  { value: 'energetic', label: 'Energetic' },
  { value: 'sad', label: 'Sad' },
  { value: 'happy', label: 'Happy' },
  { value: 'calm', label: 'Calm' },
];

const SITUATIONS = [
  { key: 'heartbreak', label: '💔 Heartbreak', pred: (s: Song) => s.stats.sad >= 65 && s.stats.romantic <= 45 },
  { key: 'in-love', label: '🫶 In Love', pred: (s: Song) => s.stats.romantic >= 70 },
  { key: 'new-crush', label: '😊 New Crush', pred: (s: Song) => s.stats.romantic >= 50 && s.stats.happy >= 50 },
  { key: 'situationship', label: '😶‍🌫️ Situationship', pred: (s: Song) => s.stats.romantic >= 35 && s.stats.lonely >= 40 },
  { key: 'gym', label: '💪 Gym Mode', pred: (s: Song) => s.stats.energetic >= 75 },
  { key: 'sad-hours', label: '🌧 Sad Hours', pred: (s: Song) => s.stats.sad >= 65 },
  { key: 'good-vibes', label: '☀️ Good Vibes', pred: (s: Song) => s.stats.happy >= 70 },
  { key: 'late-night', label: '🌙 Late Night', pred: (s: Song) => s.stats.calm >= 55 && s.stats.dark >= 35 },
  { key: 'alone-time', label: '🧘 Alone Time', pred: (s: Song) => s.stats.lonely >= 60 },
  { key: 'work-mode', label: '💻 Work Mode', pred: (s: Song) => s.stats.calm >= 60 && s.stats.energetic >= 30 },
] as const;

const ALL_TAGS = Array.from(new Set(songs.flatMap(s => s.tags))).sort();
const MAIN_ARTISTS = ['Stray Kids', 'BTS', 'AJR', 'Lauv', 'Jon Bellion', 'Alec Benjamin'];

export default function App() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [filterTag, setFilterTag] = useState('');
  const [filterArtist, setFilterArtist] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [vibeFilter, setVibeFilter] = useState('');
  const [filterSubcat, setFilterSubcat] = useState('');
  const [situation, setSituation] = useState('');
  const [showSuggest, setShowSuggest] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const { firebaseSongs } = useFirebaseSongs();
  const { isFavorite, toggle: toggleFavorite, favorites } = useFavorites();

  const allSongs = useMemo(() => [...firebaseSongs, ...songs], [firebaseSongs]);

  const filtered = useMemo(() => {
    let list = [...allSongs];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q) ||
        s.album.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (filterArtist) list = list.filter(s => s.artist === filterArtist);
    if (filterTag) list = list.filter(s => s.tags.includes(filterTag));
    if (filterSubcat) list = list.filter(s => s.subcategories?.includes(filterSubcat));
    if (vibeFilter) list = list.filter(s => s.stats[vibeFilter as keyof typeof s.stats] >= 70);
    if (situation) {
      const sit = SITUATIONS.find(s => s.key === situation);
      if (sit) list = list.filter(sit.pred);
    }
    if (showFavoritesOnly) list = list.filter(s => favorites.has(s.id));
    list.sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'year') return b.year - a.year;
      const key = sortBy as keyof typeof a.stats;
      return b.stats[key] - a.stats[key];
    });
    return list;
  }, [query, sortBy, filterTag, filterArtist, vibeFilter, filterSubcat, situation, allSongs, showFavoritesOnly, favorites]);

  const shuffle = () => {
    const r = allSongs[Math.floor(Math.random() * allSongs.length)];
    navigate(`/song/${r.id}`);
  };

  const hasActiveFilter = !!(query || filterArtist || filterTag || filterSubcat || vibeFilter || situation || showFavoritesOnly);
  const clearAll = () => { setQuery(''); setFilterArtist(''); setFilterTag(''); setFilterSubcat(''); setVibeFilter(''); setSituation(''); setShowFavoritesOnly(false); };

  return (
    <div className="min-h-screen" style={{ background: '#07070b' }}>

      <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse, #d4a85312 0%, transparent 70%)' }} />

      {/* Nav */}
      <header className="sticky top-0 z-20 px-6 py-4 flex items-center gap-4"
        style={{ background: 'rgba(7,7,11,0.92)', borderBottom: '1px solid #d4a85320', backdropFilter: 'blur(20px)', boxShadow: '0 1px 0 #d4a85310' }}>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1a1408, #2e2010)', border: '1px solid #d4a85340', boxShadow: '0 0 16px #d4a85320' }}>
            <Music size={18} style={{ color: GOLD }} />
          </div>
          <div>
            <h1 className="font-black text-lg leading-none gold-shimmer">Vibe Showcase</h1>
            <p className="text-xs mt-0.5" style={{ color: '#5a4f3a' }}>{allSongs.length} songs</p>
          </div>
        </div>

        <div className="flex-1" />

        <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: '#d4a85312', color: '#d4a853', border: '1px solid #d4a85328' }}>
          {filtered.length} songs
        </span>

        {/* Suggest button — always visible */}
        <button onClick={() => setShowSuggest(true)}
          className="hidden sm:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all"
          style={{ background: '#ffffff08', color: '#6b5f4a', border: '1px solid #ffffff10' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4a85315'; e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = '#d4a85330'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#ffffff08'; e.currentTarget.style.color = '#6b5f4a'; e.currentTarget.style.borderColor = '#ffffff10'; }}>
          <Lightbulb size={14} /> Suggest a Song
        </button>

        <button onClick={shuffle}
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all"
          style={{ background: '#d4a85315', color: '#d4a853', border: '1px solid #d4a85330' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4a85325'; e.currentTarget.style.boxShadow = '0 0 20px #d4a85330'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#d4a85315'; e.currentTarget.style.boxShadow = 'none'; }}>
          <Sparkles size={14} /> Surprise me
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 relative z-10">

        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest"
            style={{ background: '#d4a85312', color: '#d4a853', border: '1px solid #d4a85328' }}>
            <Sparkles size={11} /> Premium Music Discovery
          </div>
          <h2 className="text-5xl font-black mb-4 leading-tight">
            <span className="text-white">Find your </span>
            <span className="gold-text">perfect vibe</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#5a4f3a' }}>
            {songs.length} songs across 6 artists — scored on 11 emotional &amp; production axes,<br />
            with vibe radar, lyrics, and 30-second previews.
          </p>

          {/* Artist pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {MAIN_ARTISTS.map(a => (
              <button key={a}
                onClick={() => setFilterArtist(filterArtist === a ? '' : a)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  background: filterArtist === a ? '#d4a85320' : '#ffffff06',
                  border: `1px solid ${filterArtist === a ? GOLD_BORDER : '#ffffff10'}`,
                  color: filterArtist === a ? GOLD : '#6b5f4a',
                  boxShadow: filterArtist === a ? '0 0 12px #d4a85320' : 'none',
                }}
                onMouseEnter={e => { if (filterArtist !== a) e.currentTarget.style.color = '#d4a85390'; }}
                onMouseLeave={e => { if (filterArtist !== a) e.currentTarget.style.color = '#6b5f4a'; }}>
                {a}
              </button>
            ))}
          </div>

          {/* Favorites pill */}
          <div className="mt-4 flex justify-center">
            <button onClick={() => setShowFavoritesOnly(v => !v)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all"
              style={{
                background: showFavoritesOnly ? '#e05a7a22' : '#ffffff07',
                border: `1px solid ${showFavoritesOnly ? '#e05a7a45' : '#ffffff12'}`,
                color: showFavoritesOnly ? '#e05a7a' : '#5a4f3a',
                boxShadow: showFavoritesOnly ? '0 0 16px #e05a7a20' : 'none',
              }}>
              ❤️ My Favorites {favorites.size > 0 && `(${favorites.size})`}
            </button>
          </div>

          {/* Situation filter */}
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3a3020' }}>
              What's your mood right now?
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 justify-start sm:justify-center sm:flex-wrap"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {SITUATIONS.map(sit => {
                const active = situation === sit.key;
                return (
                  <button key={sit.key}
                    onClick={() => setSituation(active ? '' : sit.key)}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0"
                    style={{
                      background: active ? '#d4a85322' : '#ffffff07',
                      border: `1px solid ${active ? '#d4a85348' : '#ffffff12'}`,
                      color: active ? GOLD : '#5a4f3a',
                      boxShadow: active ? '0 0 16px #d4a85220' : 'none',
                    }}
                    onMouseEnter={e => { if (!active) { e.currentTarget.style.background = '#ffffff0e'; e.currentTarget.style.color = '#9a8f78'; } }}
                    onMouseLeave={e => { if (!active) { e.currentTarget.style.background = '#ffffff07'; e.currentTarget.style.color = '#5a4f3a'; } }}>
                    {sit.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#5a4f3a' }} />
            <input value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search songs, artists, albums, tags..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none"
              style={{ background: '#0e0e16', border: '1px solid #d4a85320', color: '#f0ead8' }}
              onFocus={e => { e.target.style.borderColor = GOLD_BORDER; e.target.style.boxShadow = '0 0 0 3px #d4a85312'; }}
              onBlur={e => { e.target.style.borderColor = '#d4a85320'; e.target.style.boxShadow = 'none'; }} />
            {query && <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#5a4f3a' }}><X size={14} /></button>}
          </div>
          <button onClick={() => setShowFilters(!showFilters)}
            className="px-5 py-3 rounded-xl text-sm flex items-center gap-2 font-semibold transition-all"
            style={{ background: showFilters ? '#d4a85320' : '#0e0e16', border: `1px solid ${showFilters ? GOLD_BORDER : '#d4a85320'}`, color: showFilters ? GOLD : '#5a4f3a', boxShadow: showFilters ? '0 0 16px #d4a85220' : 'none' }}>
            <SlidersHorizontal size={14} /> Filters
            {hasActiveFilter && <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />}
          </button>
          {hasActiveFilter && (
            <button onClick={clearAll} className="px-4 py-3 rounded-xl text-sm font-medium transition-all"
              style={{ background: '#ffffff08', color: '#5a4f3a', border: '1px solid #ffffff0a' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f0ead8'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#5a4f3a'; }}>
              Clear all
            </button>
          )}
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="rounded-2xl p-6 mb-6"
            style={{ background: 'linear-gradient(135deg, #0e0e16, #0c0c13)', border: '1px solid #d4a85322', boxShadow: '0 8px 40px #00000060, inset 0 1px 0 #d4a85315' }}>

            <div className="mb-5">
              <label className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: GOLD }}>Artist</label>
              <div className="flex flex-wrap gap-2">
                {MAIN_ARTISTS.map(artist => (
                  <button key={artist} onClick={() => setFilterArtist(filterArtist === artist ? '' : artist)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={{ background: filterArtist === artist ? GOLD_DIM : '#ffffff08', border: `1px solid ${filterArtist === artist ? GOLD_BORDER : '#ffffff0a'}`, color: filterArtist === artist ? GOLD : '#5a4f3a' }}>
                    {artist}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px mb-5" style={{ background: '#d4a85315' }} />

            <div className="flex flex-wrap gap-8 mb-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: GOLD }}>Sort by</label>
                <div className="flex flex-wrap gap-2">
                  {SORT_OPTIONS.map(opt => (
                    <button key={opt.value} onClick={() => setSortBy(opt.value)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                      style={{ background: sortBy === opt.value ? GOLD_DIM : '#ffffff08', border: `1px solid ${sortBy === opt.value ? GOLD_BORDER : '#ffffff0a'}`, color: sortBy === opt.value ? GOLD : '#5a4f3a' }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: GOLD }}>High emotion score</label>
                <div className="flex flex-wrap gap-2">
                  {EMOTIONAL_AXES.map(key => (
                    <button key={key} onClick={() => setVibeFilter(vibeFilter === key ? '' : key)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                      style={{ background: vibeFilter === key ? EMOTION_COLORS[key] + '25' : '#ffffff08', border: `1px solid ${vibeFilter === key ? EMOTION_COLORS[key] + '55' : '#ffffff0a'}`, color: vibeFilter === key ? EMOTION_COLORS[key] : '#5a4f3a' }}>
                      {EMOTION_LABELS[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px mb-5" style={{ background: '#d4a85315' }} />

            <div className="mb-5">
              <label className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: GOLD }}>Mood & Theme</label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(SUBCATEGORY_LABELS).map(([key, label]) => (
                  <button key={key} onClick={() => setFilterSubcat(filterSubcat === key ? '' : key)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={{ background: filterSubcat === key ? SUBCATEGORY_COLORS[key] + '25' : '#ffffff08', border: `1px solid ${filterSubcat === key ? SUBCATEGORY_COLORS[key] + '55' : '#ffffff0a'}`, color: filterSubcat === key ? SUBCATEGORY_COLORS[key] : '#5a4f3a' }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px mb-5" style={{ background: '#d4a85315' }} />

            <div>
              <label className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: GOLD }}>Tags</label>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {ALL_TAGS.map(tag => (
                  <button key={tag} onClick={() => setFilterTag(filterTag === tag ? '' : tag)}
                    className="px-2.5 py-1 rounded-full text-xs transition-all"
                    style={{ background: filterTag === tag ? '#d4a85320' : '#ffffff07', color: filterTag === tag ? GOLD : '#5a4f3a', border: `1px solid ${filterTag === tag ? GOLD_BORDER : 'transparent'}` }}>
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active filter chips */}
        {hasActiveFilter && !showFilters && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-xs" style={{ color: '#5a4f3a' }}>Filtered:</span>
            {filterArtist && <Chip label={filterArtist} onRemove={() => setFilterArtist('')} />}
            {situation && <Chip label={SITUATIONS.find(s => s.key === situation)?.label ?? situation} onRemove={() => setSituation('')} />}
            {filterSubcat && <Chip label={SUBCATEGORY_LABELS[filterSubcat] ?? filterSubcat} onRemove={() => setFilterSubcat('')} />}
            {vibeFilter && <Chip label={`High ${EMOTION_LABELS[vibeFilter]}`} onRemove={() => setVibeFilter('')} />}
            {filterTag && <Chip label={`#${filterTag}`} onRemove={() => setFilterTag('')} />}
            {query && <Chip label={`"${query}"`} onRemove={() => setQuery('')} />}
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-28">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: '#d4a85310', border: '1px solid #d4a85520' }}>
              <Music size={28} style={{ color: GOLD, opacity: 0.5 }} />
            </div>
            <p className="text-base font-semibold" style={{ color: '#5a4f3a' }}>No songs found</p>
            <p className="text-sm mt-1" style={{ color: '#3a3020' }}>Try a different search or clear filters</p>
            <button onClick={clearAll} className="mt-4 px-5 py-2 rounded-xl text-sm font-semibold transition-all" style={{ background: GOLD_DIM, color: GOLD, border: `1px solid ${GOLD_BORDER}` }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map(song => (
              <SongCard key={song.id} song={song} onClick={() => navigate(`/song/${song.id}`)}
                isFavorite={isFavorite(song.id)} onFavorite={toggleFavorite} />
            ))}
          </div>
        )}

        <div className="mt-20 pb-8 text-center">
          <div className="h-px mb-8 mx-auto max-w-xs" style={{ background: 'linear-gradient(90deg, transparent, #d4a85330, transparent)' }} />
          <p className="text-xs" style={{ color: '#3a3020' }}>{songs.length} songs · 6 artists · 11-axis emotion scoring</p>
        </div>
      </main>

      {showSuggest && <SuggestSongModal onClose={() => setShowSuggest(false)} />}
    </div>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: '#d4a85315', color: GOLD, border: '1px solid #d4a85330' }}>
      {label}
      <button onClick={onRemove} style={{ color: '#d4a85380' }}><X size={10} /></button>
    </span>
  );
}
