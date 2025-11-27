import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Trophy, 
  Shield,
  Sparkles,
  Cpu,
  Network,
  Database,
  LineChart,
  Target,
  Rocket,
  Settings,
  FileText
} from 'lucide-react';

interface BlogHeroImageProps {
  title: string;
  categoryId: string;
  categoryColor?: string;
  className?: string;
  aspectRatio?: 'hero' | 'card' | 'square';
}

// Category to gradient and icon mappings
const categoryConfig: Record<string, {
  gradient: string[];
  pattern: 'neural' | 'circuit' | 'flow' | 'grid' | 'wave' | 'hexagon';
  icons: React.ComponentType<any>[];
  accent: string;
}> = {
  'strategie-ia': {
    gradient: ['#7B2FFF', '#9333EA', '#6366F1'],
    pattern: 'neural',
    icons: [Brain, Target, Rocket, Sparkles],
    accent: '#A855F7'
  },
  'automatisation': {
    gradient: ['#10E4FF', '#06B6D4', '#0EA5E9'],
    pattern: 'circuit',
    icons: [Zap, Settings, Cpu, Network],
    accent: '#22D3EE'
  },
  'cas-clients': {
    gradient: ['#0AFF9D', '#10B981', '#059669'],
    pattern: 'flow',
    icons: [Users, Trophy, TrendingUp, Target],
    accent: '#34D399'
  },
  'guides': {
    gradient: ['#FF5A00', '#F97316', '#EA580C'],
    pattern: 'grid',
    icons: [BookOpen, FileText, Sparkles, Target],
    accent: '#FB923C'
  },
  'tendances': {
    gradient: ['#6366F1', '#8B5CF6', '#7C3AED'],
    pattern: 'wave',
    icons: [TrendingUp, LineChart, Sparkles, Rocket],
    accent: '#A78BFA'
  },
  'competitivite': {
    gradient: ['#EC4899', '#F43F5E', '#DB2777'],
    pattern: 'hexagon',
    icons: [Trophy, Target, Rocket, TrendingUp],
    accent: '#F472B6'
  },
  'conformite': {
    gradient: ['#14B8A6', '#0D9488', '#0F766E'],
    pattern: 'grid',
    icons: [Shield, FileText, Database, Settings],
    accent: '#2DD4BF'
  }
};

// Default config for unknown categories
const defaultConfig = {
  gradient: ['#7B2FFF', '#10E4FF', '#0AFF9D'],
  pattern: 'neural' as const,
  icons: [Brain, Zap, Sparkles, Target],
  accent: '#7B2FFF'
};

// Generate a deterministic hash from string
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

// Generate deterministic positions based on title
const generatePositions = (title: string, count: number) => {
  const hash = hashString(title);
  const positions = [];
  for (let i = 0; i < count; i++) {
    const seed = hash + i * 1337;
    positions.push({
      x: (seed % 100),
      y: ((seed * 17) % 100),
      size: 20 + (seed % 40),
      rotation: seed % 360,
      delay: (i * 0.2) % 1
    });
  }
  return positions;
};

// Pattern generators
const NeuralPattern = ({ color, opacity = 0.15 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {/* Neural network connections */}
    {Array.from({ length: 8 }).map((_, i) => {
      const x1 = 100 + (i * 80);
      const y1 = 50 + ((i % 3) * 100);
      const x2 = 150 + ((i + 1) * 70);
      const y2 = 100 + (((i + 1) % 4) * 80);
      return (
        <g key={i}>
          <line
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color}
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx={x1} cy={y1} r="4" fill={color} />
          <circle cx={x2} cy={y2} r="4" fill={color} />
        </g>
      );
    })}
  </g>
);

const CircuitPattern = ({ color, opacity = 0.15 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {/* Circuit board pattern */}
    {Array.from({ length: 12 }).map((_, i) => {
      const x = 50 + (i % 4) * 150;
      const y = 30 + Math.floor(i / 4) * 100;
      return (
        <g key={i}>
          <rect x={x} y={y} width="8" height="8" fill={color} />
          <line x1={x + 8} y1={y + 4} x2={x + 40} y2={y + 4} stroke={color} strokeWidth="2" />
          <line x1={x + 4} y1={y + 8} x2={x + 4} y2={y + 30} stroke={color} strokeWidth="2" />
        </g>
      );
    })}
  </g>
);

const FlowPattern = ({ color, opacity = 0.12 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {/* Flowing curves */}
    <path
      d="M0,150 Q200,50 400,150 T800,150"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M0,200 Q200,100 400,200 T800,200"
      stroke={color}
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <path
      d="M0,250 Q200,150 400,250 T800,250"
      stroke={color}
      strokeWidth="1"
      fill="none"
      opacity="0.5"
    />
  </g>
);

const GridPattern = ({ color, opacity = 0.1 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {/* Grid pattern */}
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke={color} strokeWidth="1" />
    ))}
    {Array.from({ length: 16 }).map((_, i) => (
      <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke={color} strokeWidth="1" />
    ))}
  </g>
);

const WavePattern = ({ color, opacity = 0.12 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    <path
      d="M0,100 C100,50 200,150 300,100 S500,50 600,100 S700,150 800,100"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M0,180 C100,130 200,230 300,180 S500,130 600,180 S700,230 800,180"
      stroke={color}
      strokeWidth="2"
      fill="none"
      opacity="0.6"
    />
  </g>
);

const HexagonPattern = ({ color, opacity = 0.1 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {Array.from({ length: 6 }).map((_, i) => {
      const x = 80 + (i % 3) * 200;
      const y = 60 + Math.floor(i / 3) * 150;
      return (
        <polygon
          key={i}
          points={`${x},${y - 40} ${x + 35},${y - 20} ${x + 35},${y + 20} ${x},${y + 40} ${x - 35},${y + 20} ${x - 35},${y - 20}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      );
    })}
  </g>
);

const patternComponents = {
  neural: NeuralPattern,
  circuit: CircuitPattern,
  flow: FlowPattern,
  grid: GridPattern,
  wave: WavePattern,
  hexagon: HexagonPattern
};

export const BlogHeroImage = ({ 
  title, 
  categoryId, 
  categoryColor,
  className = '',
  aspectRatio = 'hero'
}: BlogHeroImageProps) => {
  const config = categoryConfig[categoryId] || defaultConfig;
  const positions = useMemo(() => generatePositions(title, 6), [title]);
  const hash = useMemo(() => hashString(title), [title]);
  
  // Select icon based on hash
  const IconComponent = config.icons[hash % config.icons.length];
  const PatternComponent = patternComponents[config.pattern];
  
  // Dimensions based on aspect ratio
  const dimensions = {
    hero: { width: 800, height: 350, viewBox: '0 0 800 350' },
    card: { width: 400, height: 200, viewBox: '0 0 400 200' },
    square: { width: 400, height: 400, viewBox: '0 0 400 400' }
  };
  
  const { viewBox } = dimensions[aspectRatio];
  const mainColor = categoryColor || config.gradient[0];
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Main gradient */}
          <linearGradient id={`heroGrad-${hash}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={config.gradient[0]} stopOpacity="0.9" />
            <stop offset="50%" stopColor={config.gradient[1]} stopOpacity="0.7" />
            <stop offset="100%" stopColor={config.gradient[2]} stopOpacity="0.5" />
          </linearGradient>
          
          {/* Radial glow */}
          <radialGradient id={`glow-${hash}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={mainColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
          </radialGradient>
          
          {/* Noise texture */}
          <filter id={`noise-${hash}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
          
          {/* Blur for glow effects */}
          <filter id={`blur-${hash}`}>
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="100%" height="100%" fill="#0A0A0F" />
        
        {/* Main gradient overlay */}
        <rect 
          width="100%" 
          height="100%" 
          fill={`url(#heroGrad-${hash})`}
          opacity="0.3"
        />
        
        {/* Pattern layer */}
        <PatternComponent color={mainColor} opacity={0.15} />
        
        {/* Floating shapes */}
        {positions.map((pos, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1, 0.8],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: pos.delay
            }}
          >
            {i % 3 === 0 ? (
              <circle
                cx={`${pos.x}%`}
                cy={`${pos.y}%`}
                r={pos.size / 3}
                fill={config.accent}
                opacity="0.3"
              />
            ) : i % 3 === 1 ? (
              <rect
                x={`${pos.x}%`}
                y={`${pos.y}%`}
                width={pos.size / 2}
                height={pos.size / 2}
                fill={config.gradient[i % 3]}
                opacity="0.2"
                transform={`rotate(${pos.rotation}, ${pos.x * 8}, ${pos.y * 3.5})`}
              />
            ) : (
              <polygon
                points={`
                  ${pos.x * 8},${pos.y * 3.5 - pos.size / 3}
                  ${pos.x * 8 + pos.size / 3},${pos.y * 3.5 + pos.size / 3}
                  ${pos.x * 8 - pos.size / 3},${pos.y * 3.5 + pos.size / 3}
                `}
                fill={config.gradient[(i + 1) % 3]}
                opacity="0.25"
              />
            )}
          </motion.g>
        ))}
        
        {/* Central glow */}
        <ellipse
          cx="50%"
          cy="50%"
          rx="300"
          ry="200"
          fill={`url(#glow-${hash})`}
        />
        
        {/* Grid overlay */}
        <g opacity="0.05">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`grid-h-${i}`}
              x1="0"
              y1={i * 20}
              x2="800"
              y2={i * 20}
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <line
              key={`grid-v-${i}`}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2="350"
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
        </g>
        
        {/* Noise overlay */}
        <rect
          width="100%"
          height="100%"
          fill="white"
          opacity="0.02"
          filter={`url(#noise-${hash})`}
        />
      </svg>
      
      {/* Floating icon overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div 
          className="p-6 md:p-8 rounded-2xl backdrop-blur-xl"
          style={{
            background: `linear-gradient(135deg, ${mainColor}20, ${mainColor}05)`,
            border: `1px solid ${mainColor}30`,
            boxShadow: `0 0 60px ${mainColor}20`
          }}
        >
          <IconComponent 
            className="w-12 h-12 md:w-16 md:h-16"
            style={{ color: mainColor }}
          />
        </div>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #0A0A0F, transparent)'
        }}
      />
    </div>
  );
};

export default BlogHeroImage;