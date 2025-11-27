import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  Rocket,
  TrendingUp,
  Shield,
  Users,
  Code,
  Database,
  LineChart,
  Settings,
  Cpu,
  Network,
  FileText,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  BarChart2
} from 'lucide-react';

interface ArticleInlineImageProps {
  type: 'process' | 'comparison' | 'workflow' | 'stats' | 'features' | 'warning' | 'tip' | 'quote';
  title?: string;
  items?: string[];
  data?: Record<string, string | number>;
  color?: string;
  className?: string;
}

const typeConfig: Record<string, {
  gradient: string[];
  icon: React.ComponentType<any>;
  secondaryIcon: React.ComponentType<any>;
}> = {
  process: {
    gradient: ['#7B2FFF', '#9333EA'],
    icon: Settings,
    secondaryIcon: Zap
  },
  comparison: {
    gradient: ['#10E4FF', '#06B6D4'],
    icon: BarChart2,
    secondaryIcon: LineChart
  },
  workflow: {
    gradient: ['#0AFF9D', '#10B981'],
    icon: Network,
    secondaryIcon: Cpu
  },
  stats: {
    gradient: ['#FF5A00', '#F97316'],
    icon: TrendingUp,
    secondaryIcon: Target
  },
  features: {
    gradient: ['#6366F1', '#8B5CF6'],
    icon: Rocket,
    secondaryIcon: Brain
  },
  warning: {
    gradient: ['#F59E0B', '#EAB308'],
    icon: AlertTriangle,
    secondaryIcon: Shield
  },
  tip: {
    gradient: ['#10B981', '#059669'],
    icon: Lightbulb,
    secondaryIcon: CheckCircle
  },
  quote: {
    gradient: ['#EC4899', '#F43F5E'],
    icon: BookOpen,
    secondaryIcon: Users
  }
};

// Generate hash from string for deterministic randomness
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export const ArticleInlineImage = ({
  type,
  title,
  items = [],
  data = {},
  color,
  className = ''
}: ArticleInlineImageProps) => {
  const config = typeConfig[type] || typeConfig.features;
  const hash = useMemo(() => hashString(title || type), [title, type]);
  const mainColor = color || config.gradient[0];
  const Icon = config.icon;
  const SecondaryIcon = config.secondaryIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`my-8 rounded-2xl overflow-hidden ${className}`}
    >
      <div className="relative">
        {/* SVG Background */}
        <svg
          viewBox="0 0 600 200"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id={`inlineGrad-${hash}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={config.gradient[0]} stopOpacity="0.25" />
              <stop offset="100%" stopColor={config.gradient[1]} stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id={`inlineGlow-${hash}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={mainColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Background */}
          <rect width="100%" height="100%" fill="#0A0A0F" />
          <rect width="100%" height="100%" fill={`url(#inlineGrad-${hash})`} />
          
          {/* Pattern based on type */}
          {type === 'process' && (
            <g opacity="0.2">
              {[0, 1, 2, 3].map(i => (
                <g key={i}>
                  <circle cx={100 + i * 130} cy="100" r="25" stroke={mainColor} strokeWidth="2" fill="none" />
                  {i < 3 && (
                    <line x1={125 + i * 130} y1="100" x2={175 + i * 130} y2="100" stroke={mainColor} strokeWidth="2" strokeDasharray="5,5" />
                  )}
                </g>
              ))}
            </g>
          )}
          
          {type === 'comparison' && (
            <g opacity="0.2">
              <rect x="100" y="60" width="80" height="80" rx="10" stroke={mainColor} strokeWidth="2" fill={`${mainColor}10`} />
              <rect x="420" y="60" width="80" height="80" rx="10" stroke={config.gradient[1]} strokeWidth="2" fill={`${config.gradient[1]}10`} />
              <path d="M200,100 C260,70 340,130 400,100" stroke={mainColor} strokeWidth="2" fill="none" strokeDasharray="8,4" />
            </g>
          )}
          
          {type === 'workflow' && (
            <g opacity="0.2">
              <path d="M50,100 L150,60 L300,100 L450,60 L550,100" stroke={mainColor} strokeWidth="2" fill="none" />
              {[50, 150, 300, 450, 550].map((x, i) => (
                <circle key={i} cx={x} cy={i % 2 === 0 ? 100 : 60} r="8" fill={mainColor} />
              ))}
            </g>
          )}
          
          {type === 'stats' && (
            <g opacity="0.2">
              {[0, 1, 2, 3, 4].map(i => (
                <rect key={i} x={80 + i * 100} y={180 - (40 + (hash + i * 17) % 100)} width="40" height={40 + (hash + i * 17) % 100} fill={mainColor} rx="4" />
              ))}
            </g>
          )}
          
          {type === 'features' && (
            <g opacity="0.15">
              {[0, 1, 2].map(row => (
                [0, 1, 2].map(col => (
                  <rect key={`${row}-${col}`} x={80 + col * 170} y={40 + row * 55} width="120" height="40" rx="8" stroke={mainColor} strokeWidth="1.5" fill="none" />
                ))
              ))}
            </g>
          )}
          
          {(type === 'warning' || type === 'tip') && (
            <g opacity="0.2">
              <polygon points="300,30 380,150 220,150" stroke={mainColor} strokeWidth="3" fill="none" />
              <line x1="300" y1="70" x2="300" y2="110" stroke={mainColor} strokeWidth="3" />
              <circle cx="300" cy="130" r="5" fill={mainColor} />
            </g>
          )}
          
          {type === 'quote' && (
            <g opacity="0.15">
              <text x="80" y="100" fontSize="100" fill={mainColor} fontFamily="Georgia, serif">"</text>
              <text x="480" y="150" fontSize="100" fill={mainColor} fontFamily="Georgia, serif">"</text>
            </g>
          )}
          
          {/* Central glow */}
          <ellipse cx="300" cy="100" rx="200" ry="80" fill={`url(#inlineGlow-${hash})`} />
          
          {/* Grid overlay */}
          <g opacity="0.03">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 20} x2="600" y2={i * 20} stroke="white" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="200" stroke="white" strokeWidth="0.5" />
            ))}
          </g>
        </svg>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="flex items-center gap-6">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${mainColor}25, ${mainColor}10)`,
                border: `1px solid ${mainColor}30`
              }}
            >
              <Icon className="w-8 h-8" style={{ color: mainColor }} />
            </motion.div>
            
            {/* Title if provided */}
            {title && (
              <div className="text-white">
                <p className="text-xl font-bold">{title}</p>
                {items.length > 0 && (
                  <div className="flex gap-4 mt-2">
                    {items.slice(0, 3).map((item, i) => (
                      <span key={i} className="text-sm text-gray-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" style={{ color: mainColor }} />
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Secondary icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.3 }}
              className="p-3 rounded-lg absolute top-4 right-4"
              style={{
                background: `${config.gradient[1]}15`,
                border: `1px solid ${config.gradient[1]}25`
              }}
            >
              <SecondaryIcon className="w-5 h-5" style={{ color: config.gradient[1] }} />
            </motion.div>
          </div>
        </div>
        
        {/* Border */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: `1px solid ${mainColor}20` }}
        />
      </div>
    </motion.div>
  );
};

export default ArticleInlineImage;
