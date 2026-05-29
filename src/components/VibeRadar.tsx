import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { EMOTION_COLORS, EMOTION_LABELS, EMOTIONAL_AXES } from '../data/songs';

type EmotionalStats = Record<string, number>;
interface Props { stats: EmotionalStats; size?: number; }

export default function VibeRadar({ stats, size = 260 }: Props) {
  const data = EMOTIONAL_AXES.map(key => ({
    subject: EMOTION_LABELS[key],
    value: stats[key] ?? 0,
    key,
  }));

  const dominantKey = EMOTIONAL_AXES.reduce((a, b) => (stats[b] ?? 0) > (stats[a] ?? 0) ? b : a);
  const dominantColor = EMOTION_COLORS[dominantKey] || '#d4a853';

  return (
    <ResponsiveContainer width="100%" height={size}>
      <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
        <PolarGrid stroke="#d4a85318" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: '#6b5f4a', fontSize: 11, fontWeight: 600 }}
        />
        <Radar
          name="Vibe"
          dataKey="value"
          stroke={dominantColor}
          fill={dominantColor}
          fillOpacity={0.15}
          strokeWidth={2}
          dot={{ fill: dominantColor, strokeWidth: 0, r: 3 }}
        />
        <Tooltip
          contentStyle={{
            background: '#0e0e18',
            border: '1px solid #d4a85328',
            borderRadius: 10,
            fontSize: 12,
            boxShadow: '0 8px 24px #00000060',
          }}
          formatter={(v, _, entry) => {
            const k = (entry?.payload as { key?: string })?.key;
            return [
              <span style={{ color: k ? EMOTION_COLORS[k] : '#d4a853', fontWeight: 700 }}>{v}%</span>,
              <span style={{ color: '#6b5f4a' }}>{EMOTION_LABELS[k || ''] || k}</span>,
            ];
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
