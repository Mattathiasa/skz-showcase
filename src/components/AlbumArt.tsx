import { Music } from 'lucide-react';
import { useAlbumArt } from '../hooks/useAlbumArt';

interface Props {
  album: string;
  artist: string;
  size: number;
  accentColor?: string;
  className?: string;
}

export default function AlbumArt({ album, artist, size, accentColor = '#7c3aed', className = '' }: Props) {
  const { artUrl, loading } = useAlbumArt(album, artist);

  const baseStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: size > 80 ? 16 : 10,
    overflow: 'hidden',
    flexShrink: 0,
  };

  if (loading) {
    return (
      <div style={{ ...baseStyle, background: 'linear-gradient(135deg,#1c1c2e,#2a1a4e)', animation: 'pulse 1.5s ease-in-out infinite' }} className={className} />
    );
  }

  if (!artUrl) {
    return (
      <div style={{ ...baseStyle, background: `linear-gradient(135deg,${accentColor}33,${accentColor}11)`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${accentColor}30` }} className={className}>
        <Music size={size * 0.35} style={{ color: accentColor, opacity: 0.7 }} />
      </div>
    );
  }

  return (
    <img
      src={artUrl}
      alt={album}
      style={{ ...baseStyle, objectFit: 'cover', display: 'block' }}
      className={className}
    />
  );
}
