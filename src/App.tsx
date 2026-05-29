import { useState, useMemo } from 'react';
import { Search, Music, Shuffle, SlidersHorizontal, X } from 'lucide-react';
import { songs, type Song, EMOTION_COLORS, EMOTION_LABELS, EMOTIONAL_AXES, SUBCATEGORY_LABELS, SUBCATEGORY_COLORS } from './data/songs';
import SongCard from './components/SongCard';
import SongDetail from './components/SongDetail';

const SORT_OPTIONS = [
  { value: 'title', label: 'A–Z' },
  { value: 'year', label: 'Year' },
  { value: 'energetic', label: 'Energetic' },
  { value: 'sad', label: 'Sad' },
  { value: 'happy', label: 'Happy' },
  { value: 'calm', label: 'Calm' },
];

const ALL_TAGS = Array.from(new Set(songs.flatMap(s => s.tags))).sort();
const ALL_ARTISTS = Array.from(new Set(songs.map(s => s.artist))).sort();

export default function App() {
  const [selected, setSelected] = useState<Song | null>(null);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [filterTag, setFilterTag] = useState('');
  const [filterArtist, setFilterArtist] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [vibeFilter, setVibeFilter] = useState<string>('');
  const [filterSubcat, setFilterSubcat] = useState<string>('');

  const filtered = useMemo(() => {
    let list = [...songs];

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

    if (vibeFilter) {
      list = list.filter(s => s.stats[vibeFilter as keyof typeof s.stats] >= 70);
    }

    list.sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'year') return b.year - a.year;
      const key = sortBy as keyof typeof a.stats;
      return b.stats[key] - a.stats[key];
    });

    return list;
  }, [query, sortBy, filterTag, filterArtist, vibeFilter]);

  const shuffle = () => {
    const r = songs[Math.floor(Math.random() * songs.length)];
    setSelected(r);
  };

  if (selected) return <SongDetail song={selected} onBack={() => setSelected(null)} />;

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>
      {/* Nav */}
      <header className="sticky top-0 z-20 px-6 py-4 backdrop-blur-xl flex items-center gap-4"
        style={{ background: 'rgba(10,10,15,0.9)', borderBottom: '1px solid #ffffff0d' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}>
            <Music size={18} className="text-white" />
          </div>
          <div>
            <h1 className="font-black text-white text-lg leading-none">Vibe Showcase</h1>
            <p className="text-xs" style={{ color: '#4b5563' }}>{songs.length} songs · 6 artists</p>
          </div>
        </div>
        <div className="flex-1" />
        <span className="text-sm font-medium px-3 py-1 rounded-full"
          style={{ background: '#ffffff08', color: '#6b7280' }}>
          {filtered.length} songs
        </span>
        <button onClick={shuffle}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all"
          style={{ background: '#ffffff0d', color: '#9ca3af' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#ffffff15'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#ffffff0d'; e.currentTarget.style.color = '#9ca3af'; }}>
          <Shuffle size={14} /> Surprise me
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black text-white mb-2">
            Find your vibe
          </h2>
          <p className="text-base" style={{ color: '#6b7280' }}>
            {songs.length} songs across 6 artists — each scored on 11 emotional &amp; production axes, with vibe radar and lyrics.
          </p>
        </div>

        {/* Search & Filter bar */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search songs, artists, albums, tags..."
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{ background: '#141420', border: '1px solid #ffffff0d', color: '#f1f1f5' }}
              onFocus={e => (e.target.style.borderColor = '#7c3aed50')}
              onBlur={e => (e.target.style.borderColor = '#ffffff0d')}
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }}>
                <X size={14} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 rounded-xl text-sm flex items-center gap-2 transition-all"
            style={{
              background: showFilters ? '#7c3aed30' : '#141420',
              border: `1px solid ${showFilters ? '#7c3aed60' : '#ffffff0d'}`,
              color: showFilters ? '#a78bfa' : '#6b7280',
            }}>
            <SlidersHorizontal size={14} />
            Filters
          </button>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="rounded-2xl p-5 mb-6" style={{ background: '#141420', border: '1px solid #ffffff0d' }}>
            <div className="mb-4">
              <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: '#6b7280' }}>Artist</label>
              <div className="flex flex-wrap gap-2">
                {ALL_ARTISTS.map(artist => (
                  <button key={artist} onClick={() => setFilterArtist(filterArtist === artist ? '' : artist)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{
                      background: filterArtist === artist ? '#7c3aed30' : '#ffffff08',
                      border: `1px solid ${filterArtist === artist ? '#7c3aed60' : 'transparent'}`,
                      color: filterArtist === artist ? '#a78bfa' : '#6b7280',
                    }}>
                    {artist}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mb-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: '#6b7280' }}>Sort by</label>
                <div className="flex flex-wrap gap-2">
                  {SORT_OPTIONS.map(opt => (
                    <button key={opt.value} onClick={() => setSortBy(opt.value)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                      style={{
                        background: sortBy === opt.value ? '#7c3aed30' : '#ffffff08',
                        border: `1px solid ${sortBy === opt.value ? '#7c3aed60' : 'transparent'}`,
                        color: sortBy === opt.value ? '#a78bfa' : '#6b7280',
                      }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: '#6b7280' }}>Show songs with high...</label>
                <div className="flex flex-wrap gap-2">
                  {EMOTIONAL_AXES.map(key => (
                    <button key={key} onClick={() => setVibeFilter(vibeFilter === key ? '' : key)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                      style={{
                        background: vibeFilter === key ? EMOTION_COLORS[key] + '30' : '#ffffff08',
                        border: `1px solid ${vibeFilter === key ? EMOTION_COLORS[key] + '60' : 'transparent'}`,
                        color: vibeFilter === key ? EMOTION_COLORS[key] : '#6b7280',
                      }}>
                      {EMOTION_LABELS[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: '#6b7280' }}>Mood & Theme</label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(SUBCATEGORY_LABELS).map(([key, label]) => (
                  <button key={key} onClick={() => setFilterSubcat(filterSubcat === key ? '' : key)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{
                      background: filterSubcat === key ? SUBCATEGORY_COLORS[key] + '30' : '#ffffff08',
                      border: `1px solid ${filterSubcat === key ? SUBCATEGORY_COLORS[key] + '60' : 'transparent'}`,
                      color: filterSubcat === key ? SUBCATEGORY_COLORS[key] : '#6b7280',
                    }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: '#6b7280' }}>Tags</label>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {ALL_TAGS.map(tag => (
                  <button key={tag} onClick={() => setFilterTag(filterTag === tag ? '' : tag)}
                    className="px-2.5 py-1 rounded-full text-xs transition-all"
                    style={{
                      background: filterTag === tag ? '#ffffff18' : '#ffffff08',
                      color: filterTag === tag ? '#e5e7eb' : '#6b7280',
                    }}>
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Songs grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24" style={{ color: '#4b5563' }}>
            <Music size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No songs found</p>
            <p className="text-sm mt-1">Try a different search or clear filters</p>
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map(song => (
              <SongCard key={song.id} song={song} onClick={() => setSelected(song)} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
