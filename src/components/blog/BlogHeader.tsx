import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  Brain, 
  Zap, 
  Rocket, 
  Network, 
  Cpu, 
  TrendingUp,
  BookOpen,
  Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Animated neural network pattern for background
const NeuralBackground = () => {
  const nodes = useMemo(() => {
    const result = [];
    for (let i = 0; i < 20; i++) {
      result.push({
        id: i,
        x: 50 + (i * 73) % 700,
        y: 30 + ((i * 47) % 300),
        size: 3 + (i % 4),
        delay: i * 0.1
      });
    }
    return result;
  }, []);

  const connections = useMemo(() => {
    const result = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      if (i % 2 === 0) {
        result.push({
          id: i,
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[(i + 3) % nodes.length].x,
          y2: nodes[(i + 3) % nodes.length].y
        });
      }
    }
    return result;
  }, [nodes]);

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B2FFF" stopOpacity="0.8" />
          <stop offset="33%" stopColor="#6366F1" stopOpacity="0.5" />
          <stop offset="66%" stopColor="#10E4FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0AFF9D" stopOpacity="0.2" />
        </linearGradient>
        
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7B2FFF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#7B2FFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7B2FFF" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="secondaryGlow" cx="70%" cy="30%" r="35%">
          <stop offset="0%" stopColor="#10E4FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10E4FF" stopOpacity="0" />
        </radialGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background fill */}
      <rect width="100%" height="100%" fill="#050510" />
      
      {/* Gradient overlay */}
      <rect width="100%" height="100%" fill="url(#headerGrad)" opacity="0.25" />
      
      {/* Neural connections */}
      <g opacity="0.15">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#7B2FFF"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
            transition={{
              pathLength: { duration: 2, delay: conn.id * 0.1 },
              opacity: { duration: 3, repeat: Infinity, delay: conn.id * 0.2 }
            }}
          />
        ))}
      </g>

      {/* Neural nodes */}
      <g filter="url(#glow)">
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="#7B2FFF"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 2 + (node.id % 3),
              repeat: Infinity,
              delay: node.delay
            }}
          />
        ))}
      </g>

      {/* Center glow */}
      <ellipse cx="400" cy="200" rx="350" ry="180" fill="url(#centerGlow)" />
      
      {/* Secondary glow */}
      <ellipse cx="550" cy="120" rx="200" ry="100" fill="url(#secondaryGlow)" />

      {/* Floating geometric shapes */}
      <motion.rect
        x="120" y="80" width="30" height="30" rx="6"
        fill="#10E4FF"
        opacity="0.15"
        animate={{ rotate: 360, y: [80, 70, 80] }}
        transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
      />
      <motion.polygon
        points="650,100 670,140 630,140"
        fill="#0AFF9D"
        opacity="0.12"
        animate={{ rotate: -360, y: [0, -10, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity }, y: { duration: 5, repeat: Infinity } }}
      />
      <motion.circle
        cx="180" cy="280" r="20"
        fill="#FF5A00"
        opacity="0.1"
        animate={{ scale: [1, 1.2, 1], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.polygon
        points="700,280 720,260 720,300 680,300 680,260"
        fill="#7B2FFF"
        opacity="0.12"
        animate={{ rotate: 180 }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Subtle grid */}
      <g opacity="0.03">
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 20} x2="800" y2={i * 20} stroke="white" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 40 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="400" stroke="white" strokeWidth="0.5" />
        ))}
      </g>
    </svg>
  );
};

// Floating icon component
const FloatingIcon = ({ 
  Icon, 
  position, 
  color, 
  size = 'md',
  delay = 0 
}: { 
  Icon: React.ComponentType<any>;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  color: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 p-2',
    md: 'w-12 h-12 p-3',
    lg: 'w-16 h-16 p-4'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <motion.div
      className={`absolute hidden md:flex items-center justify-center rounded-xl backdrop-blur-md ${sizeClasses[size]}`}
      style={{
        ...position,
        background: `linear-gradient(135deg, ${color}20, ${color}08)`,
        border: `1px solid ${color}30`,
        boxShadow: `0 0 30px ${color}20`
      }}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ 
        opacity: [0.6, 0.9, 0.6],
        scale: [0.95, 1.05, 0.95],
        y: [0, -8, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <Icon className={iconSizes[size]} style={{ color }} />
    </motion.div>
  );
};

const BlogHeader: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog/tous-les-articles?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }, [searchQuery, navigate]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  }, [handleSearch]);

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[550px] overflow-hidden">
      {/* Animated neural background */}
      <NeuralBackground />

      {/* Floating decorative icons */}
      <FloatingIcon 
        Icon={Brain} 
        position={{ top: '15%', left: '8%' }} 
        color="#7B2FFF" 
        size="lg"
        delay={0}
      />
      <FloatingIcon 
        Icon={Sparkles} 
        position={{ top: '25%', right: '10%' }} 
        color="#10E4FF" 
        size="md"
        delay={0.5}
      />
      <FloatingIcon 
        Icon={Zap} 
        position={{ bottom: '30%', left: '12%' }} 
        color="#0AFF9D" 
        size="sm"
        delay={1}
      />
      <FloatingIcon 
        Icon={Rocket} 
        position={{ bottom: '25%', right: '8%' }} 
        color="#FF5A00" 
        size="md"
        delay={1.5}
      />
      <FloatingIcon 
        Icon={Network} 
        position={{ top: '45%', left: '5%' }} 
        color="#6366F1" 
        size="sm"
        delay={0.8}
      />
      <FloatingIcon 
        Icon={Cpu} 
        position={{ top: '20%', right: '20%' }} 
        color="#A855F7" 
        size="sm"
        delay={1.2}
      />
      <FloatingIcon 
        Icon={TrendingUp} 
        position={{ bottom: '40%', right: '15%' }} 
        color="#22D3EE" 
        size="sm"
        delay={0.3}
      />
      <FloatingIcon 
        Icon={Target} 
        position={{ top: '55%', right: '5%' }} 
        color="#34D399" 
        size="sm"
        delay={1.8}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(123, 47, 255, 0.15), rgba(16, 228, 255, 0.08))',
              border: '1px solid rgba(123, 47, 255, 0.3)',
              boxShadow: '0 0 30px rgba(123, 47, 255, 0.15)'
            }}
          >
            <BookOpen className="w-4 h-4 text-[#7B2FFF]" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#7B2FFF] to-[#10E4FF] bg-clip-text text-transparent">
              Ressources IA &amp; Automatisation
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Hub Intelligence</span>
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #7B2FFF 0%, #10E4FF 50%, #0AFF9D 100%)'
              }}
            >
              Artificielle
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Stratégies, cas pratiques et guides pour transformer votre entreprise
            avec l'IA et l'automatisation.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-xl mx-auto"
          >
            <form onSubmit={handleSearch} className="relative group">
              {/* Glow effect */}
              <div 
                className="absolute -inset-1 rounded-full opacity-40 group-hover:opacity-60 blur-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7B2FFF, #10E4FF)'
                }}
              />
              
              {/* Input container */}
              <div className="relative flex items-center">
                <Search className="absolute left-5 w-5 h-5 text-gray-400 group-focus-within:text-[#7B2FFF] transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Rechercher un article..."
                  className="w-full py-4 pl-14 pr-6 rounded-full text-white bg-[#0A0A1A]/90 backdrop-blur-sm border border-white/10 focus:outline-none focus:border-[#7B2FFF]/50 transition-all placeholder:text-gray-500"
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)'
                  }}
                />
                
                {/* Search button (visible on hover/focus) */}
                <motion.button
                  type="submit"
                  className="absolute right-3 px-4 py-2 rounded-full text-sm font-medium text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(135deg, #7B2FFF, #6366F1)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rechercher
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Quick category links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              { label: 'Stratégie IA', color: '#7B2FFF', slug: 'strategie-ia' },
              { label: 'Automatisation', color: '#10E4FF', slug: 'automatisation' },
              { label: 'Cas Clients', color: '#0AFF9D', slug: 'cas-clients' },
              { label: 'Guides', color: '#FF5A00', slug: 'guides' }
            ].map((cat) => (
              <motion.button
                key={cat.slug}
                onClick={() => navigate(`/blog/categorie/${cat.slug}`)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}30`,
                  color: cat.color
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: `${cat.color}25`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #050510, transparent)'
        }}
      />
    </section>
  );
};

export default BlogHeader;
