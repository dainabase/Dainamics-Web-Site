import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RadialROIChartProps {
  value: number;
  size?: 'small' | 'large';
  color?: string;
}

export function RadialROIChart({
  value,
  size = 'large',
  color = '#0AFF9D'
}: RadialROIChartProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200);
    return () => clearTimeout(timer);
  }, [value]);

  const dimensions = size === 'large' ? 256 : 128;
  const strokeWidth = size === 'large' ? 16 : 12;
  const radius = (dimensions - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const normalizedProgress = Math.min(progress / 5, 100);
  const offset = circumference - (normalizedProgress / 100) * circumference;

  return (
    <svg
      width={dimensions}
      height={dimensions}
      className="transform -rotate-90"
    >
      <circle
        cx={dimensions / 2}
        cy={dimensions / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-zinc-200 dark:text-zinc-800"
      />

      <motion.circle
        cx={dimensions / 2}
        cy={dimensions / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          filter: `drop-shadow(0 0 8px ${color})`
        }}
      />
    </svg>
  );
}
