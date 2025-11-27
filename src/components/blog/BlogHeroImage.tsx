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
  FileText,
  Code,
  Globe,
  Layers,
  GitBranch,
  Server,
  Activity,
  BarChart2
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
  pattern: 'neural' | 'circuit' | 'flow' | 'grid' | 'wave' | 'hexagon' | 'dots' | 'mesh';
  icons: React.ComponentType<any>[];
  accent: string;
  secondaryAccent: string;
}> = {
  'strategie-ia': {
    gradient: ['#7B2FFF', '#9333EA', '#6366F1', '#4F46E5'],
    pattern: 'neural',
    icons: [Brain, Target, Rocket, Sparkles, Network, Layers],
    accent: '#A855F7',
    secondaryAccent: '#C084FC'
  },
  'automatisation': {
    gradient: ['#10E4FF', '#06B6D4', '#0EA5E9', '#38BDF8'],
    pattern: 'circuit',
    icons: [Zap, Settings, Cpu, Network, Server, GitBranch],
    accent: '#22D3EE',
    secondaryAccent: '#67E8F9'
  },
  'cas-clients': {
    gradient: ['#0AFF9D', '#10B981', '#059669', '#34D399'],
    pattern: 'flow',
    icons: [Users, Trophy, TrendingUp, Target, BarChart2, Activity],
    accent: '#34D399',
    secondaryAccent: '#6EE7B7'
  },
  'guides': {
    gradient: ['#FF5A00', '#F97316', '#EA580C', '#FB923C'],
    pattern: 'grid',
    icons: [BookOpen, FileText, Sparkles, Target, Code, Layers],
    accent: '#FB923C',
    secondaryAccent: '#FDBA74'
  },
  'tendances': {
    gradient: ['#6366F1', '#8B5CF6', '#7C3AED', '#A78BFA'],
    pattern: 'wave',
    icons: [TrendingUp, LineChart, Sparkles, Rocket, Globe, Activity],
    accent: '#A78BFA',
    secondaryAccent: '#C4B5FD'
  },
  'competitivite': {
    gradient: ['#EC4899', '#F43F5E', '#DB2777', '#F472B6'],
    pattern: 'hexagon',
    icons: [Trophy, Target, Rocket, TrendingUp, Sparkles, Activity],
    accent: '#F472B6',
    secondaryAccent: '#F9A8D4'
  },
  'conformite': {
    gradient: ['#14B8A6', '#0D9488', '#0F766E', '#2DD4BF'],
    pattern: 'mesh',
    icons: [Shield, FileText, Database, Settings, Server, Layers],
    accent: '#2DD4BF',
    secondaryAccent: '#5EEAD4'
  }
};

// Default config for unknown categories
const defaultConfig = {
  gradient: ['#7B2FFF', '#10E4FF', '#0AFF9D', '#6366F1'],
  pattern: 'neural' as const,
  icons: [Brain, Zap, Sparkles, Target, Network, Code],
  accent: '#7B2FFF',
  secondaryAccent: '#A78BFA'
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
      delay: (i * 0.15) % 1,
      scale: 0.6 + ((seed % 40) / 100)
    });
  }
  return positions;
};

// Pattern generators with more visual interest
const NeuralPattern = ({ color, opacity = 0.2 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {Array.from({ length: 12 }).map((_, i) => {
      const x1 = 80 + (i * 60) % 640;
      const y1 = 40 + ((i * 47) % 280);
      const x2 = 120 + ((i + 3) * 55) % 640;
      const y2 = 80 + (((i + 2) * 43) % 240);
      const x3 = 160 + ((i + 5) * 50) % 640;
      const y3 = 60 + (((i + 4) * 41) % 260);
      return (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1={x2} y1={y2} x2={x3} y2={y3} stroke={color} strokeWidth="1" opacity="0.4" />
          <circle cx={x1} cy={y1} r="5" fill={color} opacity="0.8" />
          <circle cx={x2} cy={y2} r="4" fill={color} opacity="0.6" />
          <circle cx={x3} cy={y3} r="3" fill={color} opacity="0.4" />
        </g>
      );
    })}
  </g>
);

const CircuitPattern = ({ color, opacity = 0.18 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {Array.from({ length: 16 }).map((_, i) => {
      const x = 40 + (i % 4) * 180;
      const y = 25 + Math.floor(i / 4) * 85;
      const horizontal = i % 2 === 0;
      return (
        <g key={i}>
          <rect x={x} y={y} width="10" height="10" fill={color} rx="2" />
          {horizontal ? (
            <line x1={x + 10} y1={y + 5} x2={x + 60} y2={y + 5} stroke={color} strokeWidth="2" />
          ) : (
            <line x1={x + 5} y1={y + 10} x2={x + 5} y2={y + 40} stroke={color} strokeWidth="2" />
          )}
          <circle cx={horizontal ? x + 60 : x + 5} cy={horizontal ? y + 5 : y + 40} r="4" fill={color} opacity="0.7" />
        </g>
      );
    })}
  </g>
);

const FlowPattern = ({ color, opacity = 0.15 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    <path d="M0,120 Q150,40 300,120 T600,120 T900,120" stroke={color} strokeWidth="3" fill="none" />
    <path d="M0,180 Q150,100 300,180 T600,180 T900,180" stroke={color} strokeWidth="2.5" fill="none" opacity="0.8" />
    <path d="M0,240 Q150,160 300,240 T600,240 T900,240" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M0,300 Q150,220 300,300 T600,300 T900,300" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
    {/* Animated dots along the flow */}
    {Array.from({ length: 8 }).map((_, i) => (
      <circle key={i} cx={80 + i * 100} cy={120 + Math.sin(i * 0.8) * 30} r="4" fill={color} opacity="0.5" />
    ))}
  </g>
);

const GridPattern = ({ color, opacity = 0.12 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {Array.from({ length: 9 }).map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 45} x2="800" y2={i * 45} stroke={color} strokeWidth="1" />
    ))}
    {Array.from({ length: 18 }).map((_, i) => (
      <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="400" stroke={color} strokeWidth="1" />
    ))}
    {/* Accent squares at intersections */}
    {Array.from({ length: 6 }).map((_, i) => (
      <rect key={`sq${i}`} x={90 + (i * 135)} y={90 + ((i % 2) * 90)} width="8" height="8" fill={color} opacity="0.5" rx="1" />
    ))}
  </g>
);

const WavePattern = ({ color, opacity = 0.15 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    <path d="M0,80 C80,30 160,130 240,80 S400,30 480,80 S640,130 720,80 S800,30 880,80" stroke={color} strokeWidth="3" fill="none" />
    <path d="M0,150 C80,100 160,200 240,150 S400,100 480,150 S640,200 720,150 S800,100 880,150" stroke={color} strokeWidth="2.5" fill="none" opacity="0.7" />
    <path d="M0,220 C80,170 160,270 240,220 S400,170 480,220 S640,270 720,220 S800,170 880,220" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
    {/* Gradient dots */}
    {Array.from({ length: 6 }).map((_, i) => (
      <circle key={i} cx={60 + i * 140} cy={150 - Math.cos(i) * 30} r={6 - i * 0.5} fill={color} opacity={0.6 - i * 0.08} />
    ))}
  </g>
);

const HexagonPattern = ({ color, opacity = 0.12 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {Array.from({ length: 8 }).map((_, i) => {
      const x = 70 + (i % 4) * 180;
      const y = 55 + Math.floor(i / 4) * 140 + ((i % 4) % 2) * 70;
      const size = 35 - (i % 3) * 5;
      return (
        <g key={i}>
          <polygon
            points={`${x},${y - size} ${x + size * 0.866},${y - size / 2} ${x + size * 0.866},${y + size / 2} ${x},${y + size} ${x - size * 0.866},${y + size / 2} ${x - size * 0.866},${y - size / 2}`}
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
          <circle cx={x} cy={y} r="4" fill={color} opacity="0.6" />
        </g>
      );
    })}
  </g>
);

const DotsPattern = ({ color, opacity = 0.15 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {Array.from({ length: 120 }).map((_, i) => {
      const x = (i % 12) * 70 + 35;
      const y = Math.floor(i / 12) * 40 + 20;
      const size = 2 + (i % 4);
      return (
        <circle key={i} cx={x} cy={y} r={size} fill={color} opacity={0.3 + (i % 5) * 0.1} />
      );
    })}
  </g>
);

const MeshPattern = ({ color, opacity = 0.12 }: { color: string; opacity?: number }) => (
  <g opacity={opacity}>
    {Array.from({ length: 8 }).map((_, row) => (
      Array.from({ length: 12 }).map((_, col) => {
        const x = col * 70 + 35;
        const y = row * 45 + 25;
        const nextX = (col + 1) * 70 + 35;
        const nextY = (row + 1) * 45 + 25;
        return (
          <g key={`${row}-${col}`}>
            {col < 11 && <line x1={x} y1={y} x2={nextX} y2={y} stroke={color} strokeWidth="1" opacity="0.5" />}
            {row < 7 && <line x1={x} y1={y} x2={x} y2={nextY} stroke={color} strokeWidth="1" opacity="0.5" />}
            {col < 11 && row < 7 && <line x1={x} y1={y} x2={nextX} y2={nextY} stroke={color} strokeWidth="0.5" opacity="0.3" />}
            <circle cx={x} cy={y} r="3" fill={color} opacity="0.6" />
          </g>
        );
      })
    ))}
  </g>
);

const patternComponents = {
  neural: NeuralPattern,
  circuit: CircuitPattern,
  flow: FlowPattern,
  grid: GridPattern,
  wave: WavePattern,
  hexagon: HexagonPattern,
  dots: DotsPattern,
  mesh: MeshPattern
};

export const BlogHeroImage = ({ 
  title, 
  categoryId, 
  categoryColor,
  className = '',
  aspectRatio = 'hero'
}: BlogHeroImageProps) => {
  const config = categoryConfig[categoryId] || defaultConfig;
  const positions = useMemo(() => generatePositions(title, 8), [title]);
  const hash = useMemo(() => hashString(title), [title]);
  
  // Select icons based on hash
  const PrimaryIcon = config.icons[hash % config.icons.length];
  const SecondaryIcon = config.icons[(hash + 2) % config.icons.length];
  const TertiaryIcon = config.icons[(hash + 4) % config.icons.length];
  const PatternComponent = patternComponents[config.pattern];
  
  // Dimensions based on aspect ratio
  const dimensions = {
    hero: { width: 800, height: 350, viewBox: '0 0 800 350' },
    card: { width: 400, height: 200, viewBox: '0 0 400 200' },
    square: { width: 400, height: 400, viewBox: '0 0 400 400' }
  };
  
  const { viewBox } = dimensions[aspectRatio];
  const mainColor = categoryColor || config.gradient[0];
  const gradientColors = config.gradient;
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Multi-stop gradient for more depth */}
          <linearGradient id={`heroGrad-${hash}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0.95" />
            <stop offset="33%" stopColor={gradientColors[1]} stopOpacity="0.7" />
            <stop offset="66%" stopColor={gradientColors[2]} stopOpacity="0.5" />
            <stop offset="100%" stopColor={gradientColors[3] || gradientColors[2]} stopOpacity="0.3" />
          </linearGradient>
          
          {/* Radial glow - larger and more prominent */}
          <radialGradient id={`glow-${hash}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={mainColor} stopOpacity="0.4" />
            <stop offset="50%" stopColor={mainColor} stopOpacity="0.15" />
            <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
          </radialGradient>
          
          {/* Secondary glow for depth */}
          <radialGradient id={`glow2-${hash}`} cx="30%" cy="70%" r="40%">
            <stop offset="0%" stopColor={config.secondaryAccent} stopOpacity="0.3" />
            <stop offset="100%" stopColor={config.secondaryAccent} stopOpacity="0" />
          </radialGradient>
          
          {/* Noise texture */}
          <filter id={`noise-${hash}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
        
        {/* Background */}
        <rect width="100%" height="100%" fill="#0A0A0F" />
        
        {/* Main gradient overlay */}
        <rect width="100%" height="100%" fill={`url(#heroGrad-${hash})`} opacity="0.35" />
        
        {/* Pattern layer */}
        <PatternComponent color={mainColor} opacity={0.18} />
        
        {/* Floating shapes with animations */}
        {positions.map((pos, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.15, 0.35, 0.15],
              scale: [0.85, 1, 0.85],
              y: [0, -8, 0],
              rotate: [0, i % 2 === 0 ? 5 : -5, 0]
            }}
            transition={{
              duration: 4 + (i * 0.4),
              repeat: Infinity,
              delay: pos.delay,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 ? (
              <circle
                cx={`${pos.x}%`}
                cy={`${pos.y}%`}
                r={pos.size / 2.5}
                fill={config.accent}
                opacity="0.35"
              />
            ) : i % 4 === 1 ? (
              <rect
                x={`${pos.x}%`}
                y={`${pos.y}%`}
                width={pos.size / 1.8}
                height={pos.size / 1.8}
                fill={gradientColors[i % gradientColors.length]}
                opacity="0.25"
                rx="4"
                transform={`rotate(${pos.rotation}, ${pos.x * 8}, ${pos.y * 3.5})`}
              />
            ) : i % 4 === 2 ? (
              <polygon
                points={`
                  ${pos.x * 8},${pos.y * 3.5 - pos.size / 2.5}
                  ${pos.x * 8 + pos.size / 2.5},${pos.y * 3.5 + pos.size / 2.5}
                  ${pos.x * 8 - pos.size / 2.5},${pos.y * 3.5 + pos.size / 2.5}
                `}
                fill={gradientColors[(i + 1) % gradientColors.length]}
                opacity="0.28"
              />
            ) : (
              <polygon
                points={`
                  ${pos.x * 8},${pos.y * 3.5 - pos.size / 3}
                  ${pos.x * 8 + pos.size / 3},${pos.y * 3.5}
                  ${pos.x * 8},${pos.y * 3.5 + pos.size / 3}
                  ${pos.x * 8 - pos.size / 3},${pos.y * 3.5}
                `}
                fill={config.secondaryAccent}
                opacity="0.22"
              />
            )}
          </motion.g>
        ))}
        
        {/* Primary central glow */}
        <ellipse cx="50%" cy="50%" rx="320" ry="180" fill={`url(#glow-${hash})`} />
        
        {/* Secondary glow for depth */}
        <ellipse cx="30%" cy="70%" rx="200" ry="120" fill={`url(#glow2-${hash})`} />
        
        {/* Subtle grid overlay */}
        <g opacity="0.04">
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`grid-h-${i}`} x1="0" y1={i * 20} x2="800" y2={i * 20} stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <line key={`grid-v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="350" stroke="white" strokeWidth="0.5" />
          ))}
        </g>
        
        {/* Noise overlay for texture */}
        <rect width="100%" height="100%" fill="white" opacity="0.015" filter={`url(#noise-${hash})`} />
      </svg>
      
      {/* Floating icon overlays */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div 
          className="p-5 md:p-7 rounded-2xl backdrop-blur-xl"
          style={{
            background: `linear-gradient(135deg, ${mainColor}25, ${mainColor}08)`,
            border: `1px solid ${mainColor}35`,
            boxShadow: `0 0 80px ${mainColor}25, inset 0 0 40px ${mainColor}10`
          }}
        >
          <PrimaryIcon 
            className="w-10 h-10 md:w-14 md:h-14"
            style={{ color: mainColor }}
          />
        </div>
      </motion.div>
      
      {/* Secondary floating icon (top-right) */}
      {aspectRatio === 'hero' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-8 right-12 hidden md:block"
        >
          <div 
            className="p-3 rounded-xl backdrop-blur-sm"
            style={{
              background: `${config.secondaryAccent}15`,
              border: `1px solid ${config.secondaryAccent}25`
            }}
          >
            <SecondaryIcon 
              className="w-6 h-6"
              style={{ color: config.secondaryAccent }}
            />
          </div>
        </motion.div>
      )}
      
      {/* Tertiary floating icon (bottom-left) */}
      {aspectRatio === 'hero' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-16 left-10 hidden md:block"
        >
          <div 
            className="p-2.5 rounded-lg backdrop-blur-sm"
            style={{
              background: `${gradientColors[2]}15`,
              border: `1px solid ${gradientColors[2]}25`
            }}
          >
            <TertiaryIcon 
              className="w-5 h-5"
              style={{ color: gradientColors[2] }}
            />
          </div>
        </motion.div>
      )}
      
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32"
        style={{
          background: 'linear-gradient(to top, #0A0A0F, transparent)'
        }}
      />
      
      {/* Top subtle vignette */}
      <div 
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(10, 10, 15, 0.4), transparent)'
        }}
      />
    </div>
  );
};

export default BlogHeroImage;
