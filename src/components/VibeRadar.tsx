import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { EMOTION_COLORS, EMOTION_LABELS } from '../data/songs';

interface Stats {
  happy: number; sad: number; hype: number;
  calm: number; alone: number; inLove: number; outOfLove: number;
}

interface Props { stats: Stats; size?: number; }

export default function VibeRadar({ stats, size = 260 }: Props) {
  const data = Object.entries(stats).map(([key, value]) => ({
    subject: EMOTION_LABELS[key] || key,
    value,
    key,
  }));

  const dominantKey = Object.entries(stats).reduce((a, b) => b[1] > a[1] ? b : a)[0];
  const dominantColor = EMOTION_COLORS[dominantKey] || '#a78bfa';

  return (
    <ResponsiveContainer width="100%" height={size}>
      <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
        <PolarGrid stroke="#ffffff10" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 500 }}
        />
        <Radar
          name="Vibe"
          dataKey="value"
          stroke={dominantColor}
          fill={dominantColor}
          fillOpacity={0.2}
          strokeWidth={2}
          dot={{ fill: dominantColor, strokeWidth: 0, r: 3 }}
        />
        <Tooltip
          contentStyle={{ background: '#1a1a2e', border: '1px solid #333', borderRadius: 8, fontSize: 12 }}
          formatter={(v, _, entry) => {
            const k = (entry?.payload as { key?: string })?.key;
            return [
              <span style={{ color: k ? EMOTION_COLORS[k] : '#fff' }}>{String(v)}/10</span>,
              EMOTION_LABELS[k || ''] || k,
            ];
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
