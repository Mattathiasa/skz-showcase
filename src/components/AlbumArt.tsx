import { Music } from 'lucide-react';
import { useAlbumArt } from '../hooks/useAlbumArt';

interface Props {
  album: string;
  artist: string;
  size: number;
  accentColor?: string;
  className?: string;
}

export default function AlbumArt({ album, artist, size, accentColor = '#d4a853', className = '' }: Props) {
  const { artUrl, loading } = useAlbumArt(album, artist);
  const radius = size > 80 ? 16 : 10;

  const baseStyle: React.CSSProperties = {
    width: size, height: size,
    borderRadius: radius,
    overflow: 'hidden',
    flexShrink: 0,
  };

  if (loading) {
    return (
      <div style={{
        ...baseStyle,
        background: 'linear-gradient(135deg,#131318,#1a1810)',
        animation: 'pulse 1.5s ease-in-out infinite',
        border: '1px solid #d4a85318',
      }} className={className} />
    );
  }

  if (!artUrl) {
    return (
      <div style={{
        ...baseStyle,
        background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}08)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${accentColor}25`,
        boxShadow: `inset 0 1px 0 ${accentColor}15`,
      }} className={className}>
        <Music size={size * 0.33} style={{ color: accentColor, opacity: 0.5 }} />
      </div>
    );
  }

  return (
    <div style={{ ...baseStyle, position: 'relative', flexShrink: 0 }} className={className}>
      <img src={artUrl} alt={album}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      {/* Gold sheen overlay */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: radius, pointerEvents: 'none',
        background: `linear-gradient(135deg, ${accentColor}12 0%, transparent 50%)`,
      }} />
    </div>
  );
}
