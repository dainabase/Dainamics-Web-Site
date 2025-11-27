/**
 * BlogHeroImage - Générateur d'images hero SVG pour le blog DAINAMICS
 * 
 * Crée des illustrations abstraites uniques par catégorie utilisant
 * le design system DAINAMICS. Les patterns sont déterministes basés
 * sur le slug de l'article pour être reproductibles.
 */

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface BlogHeroImageProps {
  categoryId: string;
  slug: string;
  className?: string;
}

// Couleurs DAINAMICS par catégorie
const categoryColors: Record<string, { primary: string; secondary: string; accent: string }> = {
  'strategie-ia': {
    primary: '#7B2FFF',    // Violet
    secondary: '#10E4FF',  // Cyan
    accent: '#0AFF9D'      // Vert
  },
  'automatisation': {
    primary: '#10E4FF',    // Cyan
    secondary: '#7B2FFF',  // Violet
    accent: '#FF5A00'      // Orange
  },
  'cas-clients': {
    primary: '#0AFF9D',    // Vert
    secondary: '#7B2FFF',  // Violet
    accent: '#10E4FF'      // Cyan
  },
  'guides': {
    primary: '#F59E0B',    // Jaune/Orange
    secondary: '#7B2FFF',  // Violet
    accent: '#10E4FF'      // Cyan
  },
  'tendances': {
    primary: '#FF5A00',    // Orange
    secondary: '#10E4FF',  // Cyan
    accent: '#7B2FFF'      // Violet
  },
  'competitivite': {
    primary: '#EF4444',    // Rouge
    secondary: '#FF5A00',  // Orange
    accent: '#F59E0B'      // Jaune
  },
  'conformite': {
    primary: '#8B5CF6',    // Violet clair
    secondary: '#7B2FFF',  // Violet
    accent: '#10E4FF'      // Cyan
  }
};

// Générateur de nombre pseudo-aléatoire basé sur une seed (slug)
const seededRandom = (seed: string, index: number = 0): number => {
  let hash = 0;
  const str = seed + index.toString();
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs((Math.sin(hash) * 10000) % 1);
};

// Génère un tableau de positions pour les éléments
const generatePositions = (slug: string, count: number, width: number, height: number) => {
  return Array.from({ length: count }, (_, i) => ({
    x: seededRandom(slug, i * 3) * width,
    y: seededRandom(slug, i * 3 + 1) * height,
    size: 20 + seededRandom(slug, i * 3 + 2) * 80,
    delay: seededRandom(slug, i * 4) * 2,
    duration: 3 + seededRandom(slug, i * 5) * 4
  }));
};

// Pattern: Réseau Neuronal (pour strategie-ia)
const NeuralNetworkPattern = ({ colors, slug }: { colors: typeof categoryColors['strategie-ia']; slug: string }) => {
  const nodes = generatePositions(slug, 12, 800, 400);
  const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];
  
  // Créer des connexions entre nœuds proches
  nodes.forEach((node, i) => {
    nodes.slice(i + 1).forEach((other, j) => {
      const dist = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2));
      if (dist < 200 && seededRandom(slug, i * 100 + j) > 0.4) {
        connections.push({ x1: node.x, y1: node.y, x2: other.x, y2: other.y });
      }
    });
  });

  return (
    <g>
      {/* Connexions */}
      {connections.map((conn, i) => (
        <motion.line
          key={`conn-${i}`}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke={colors.secondary}
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: i * 0.05 }}
        />
      ))}
      
      {/* Nœuds */}
      {nodes.map((node, i) => (
        <motion.g key={`node-${i}`}>
          {/* Halo */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size / 2}
            fill={colors.primary}
            fillOpacity="0.1"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ 
              duration: node.duration, 
              delay: node.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          {/* Nœud central */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size / 6}
            fill={i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: node.delay }}
          />
        </motion.g>
      ))}
      
      {/* Particules flottantes */}
      {Array.from({ length: 20 }, (_, i) => {
        const x = seededRandom(slug, i * 10) * 800;
        const y = seededRandom(slug, i * 10 + 1) * 400;
        return (
          <motion.circle
            key={`particle-${i}`}
            cx={x}
            cy={y}
            r="2"
            fill={colors.accent}
            fillOpacity="0.6"
            animate={{
              y: [y, y - 20, y],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2 + seededRandom(slug, i * 11) * 2,
              delay: seededRandom(slug, i * 12) * 2,
              repeat: Infinity
            }}
          />
        );
      })}
    </g>
  );
};

// Pattern: Flux de Données (pour automatisation)
const DataFlowPattern = ({ colors, slug }: { colors: typeof categoryColors['automatisation']; slug: string }) => {
  const streams = Array.from({ length: 8 }, (_, i) => ({
    y: 50 + (i * 45),
    speed: 2 + seededRandom(slug, i) * 3,
    delay: seededRandom(slug, i + 10) * 2,
    width: 100 + seededRandom(slug, i + 20) * 200
  }));

  return (
    <g>
      {/* Lignes de flux horizontales */}
      {streams.map((stream, i) => (
        <g key={`stream-${i}`}>
          {/* Ligne de base */}
          <line
            x1="0"
            y1={stream.y}
            x2="800"
            y2={stream.y}
            stroke={colors.primary}
            strokeWidth="1"
            strokeOpacity="0.1"
          />
          
          {/* Flux animé */}
          <motion.rect
            x="-100"
            y={stream.y - 2}
            width={stream.width}
            height="4"
            fill={`url(#flowGradient-${i})`}
            rx="2"
            initial={{ x: -stream.width }}
            animate={{ x: 900 }}
            transition={{
              duration: stream.speed,
              delay: stream.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id={`flowGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0" />
              <stop offset="50%" stopColor={i % 2 === 0 ? colors.primary : colors.secondary} stopOpacity="0.8" />
              <stop offset="100%" stopColor={colors.accent} stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      ))}
      
      {/* Nœuds de connexion */}
      {Array.from({ length: 5 }, (_, i) => {
        const x = 150 + i * 130;
        const y = 200;
        return (
          <motion.g key={`connector-${i}`}>
            <motion.circle
              cx={x}
              cy={y}
              r="30"
              fill={colors.primary}
              fillOpacity="0.1"
              stroke={colors.primary}
              strokeWidth="2"
              strokeOpacity="0.3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
            <motion.circle
              cx={x}
              cy={y}
              r="8"
              fill={i % 2 === 0 ? colors.secondary : colors.accent}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            />
          </motion.g>
        );
      })}
      
      {/* Flèches directionnelles */}
      {[200, 400, 600].map((x, i) => (
        <motion.path
          key={`arrow-${i}`}
          d={`M${x},180 L${x + 20},200 L${x},220`}
          stroke={colors.accent}
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.5"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </g>
  );
};

// Pattern: Graphiques & Métriques (pour cas-clients, competitivite)
const MetricsPattern = ({ colors, slug }: { colors: typeof categoryColors['cas-clients']; slug: string }) => {
  const bars = Array.from({ length: 8 }, (_, i) => ({
    x: 80 + i * 85,
    height: 50 + seededRandom(slug, i) * 250,
    delay: i * 0.1
  }));

  return (
    <g>
      {/* Grille de fond */}
      {Array.from({ length: 6 }, (_, i) => (
        <line
          key={`hgrid-${i}`}
          x1="50"
          y1={50 + i * 60}
          x2="750"
          y2={50 + i * 60}
          stroke={colors.primary}
          strokeWidth="1"
          strokeOpacity="0.1"
        />
      ))}
      
      {/* Barres */}
      {bars.map((bar, i) => (
        <motion.g key={`bar-${i}`}>
          <motion.rect
            x={bar.x}
            y={350 - bar.height}
            width="50"
            height={bar.height}
            fill={`url(#barGradient-${i})`}
            rx="4"
            initial={{ height: 0, y: 350 }}
            animate={{ height: bar.height, y: 350 - bar.height }}
            transition={{ duration: 1, delay: bar.delay, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id={`barGradient-${i}`} x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
              <stop offset="100%" stopColor={i % 2 === 0 ? colors.secondary : colors.accent} stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </motion.g>
      ))}
      
      {/* Ligne de tendance */}
      <motion.path
        d="M80,280 Q200,200 320,240 T480,180 T640,120 T750,100"
        stroke={colors.accent}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />
      
      {/* Points sur la ligne */}
      {[80, 200, 320, 480, 640, 750].map((x, i) => {
        const y = [280, 200, 240, 180, 120, 100][i];
        return (
          <motion.circle
            key={`point-${i}`}
            cx={x}
            cy={y}
            r="6"
            fill={colors.accent}
            stroke="#0A0A0F"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1 + i * 0.15 }}
          />
        );
      })}
      
      {/* Indicateur de croissance */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <rect x="620" y="40" width="100" height="40" rx="8" fill={colors.primary} fillOpacity="0.2" />
        <text x="670" y="65" textAnchor="middle" fill={colors.accent} fontSize="16" fontWeight="bold">+280%</text>
      </motion.g>
    </g>
  );
};

// Pattern: Livre/Guide (pour guides)
const GuidePattern = ({ colors, slug }: { colors: typeof categoryColors['guides']; slug: string }) => {
  const steps = Array.from({ length: 5 }, (_, i) => ({
    x: 100 + i * 150,
    y: 200,
    number: i + 1,
    delay: i * 0.2
  }));

  return (
    <g>
      {/* Ligne de connexion */}
      <motion.path
        d="M100,200 H700"
        stroke={colors.primary}
        strokeWidth="2"
        strokeOpacity="0.3"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Étapes */}
      {steps.map((step, i) => (
        <motion.g
          key={`step-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: step.delay }}
        >
          {/* Cercle externe */}
          <circle
            cx={step.x}
            cy={step.y}
            r="45"
            fill={colors.primary}
            fillOpacity="0.1"
            stroke={colors.primary}
            strokeWidth="2"
            strokeOpacity="0.3"
          />
          
          {/* Cercle interne */}
          <circle
            cx={step.x}
            cy={step.y}
            r="30"
            fill={i === steps.length - 1 ? colors.accent : colors.secondary}
            fillOpacity="0.8"
          />
          
          {/* Numéro */}
          <text
            x={step.x}
            y={step.y + 6}
            textAnchor="middle"
            fill="#0A0A0F"
            fontSize="20"
            fontWeight="bold"
          >
            {step.number}
          </text>
          
          {/* Icône check pour la dernière étape */}
          {i === steps.length - 1 && (
            <motion.path
              d={`M${step.x - 8},${step.y} L${step.x - 2},${step.y + 6} L${step.x + 10},${step.y - 8}`}
              stroke="#0A0A0F"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          )}
        </motion.g>
      ))}
      
      {/* Flèches entre étapes */}
      {steps.slice(0, -1).map((step, i) => (
        <motion.path
          key={`arrow-${i}`}
          d={`M${step.x + 50},${step.y} L${step.x + 90},${step.y}`}
          stroke={colors.accent}
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
        />
      ))}
      
      {/* Arrow marker */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill={colors.accent} />
        </marker>
      </defs>
      
      {/* Éléments décoratifs */}
      {Array.from({ length: 15 }, (_, i) => {
        const x = seededRandom(slug, i * 7) * 800;
        const y = seededRandom(slug, i * 7 + 1) * 400;
        const size = 4 + seededRandom(slug, i * 7 + 2) * 8;
        return (
          <motion.rect
            key={`deco-${i}`}
            x={x}
            y={y}
            width={size}
            height={size}
            fill={colors.primary}
            fillOpacity="0.2"
            rx="2"
            animate={{ rotate: [0, 90, 0] }}
            transition={{
              duration: 4 + seededRandom(slug, i * 8) * 4,
              delay: seededRandom(slug, i * 9),
              repeat: Infinity
            }}
            style={{ transformOrigin: `${x + size/2}px ${y + size/2}px` }}
          />
        );
      })}
    </g>
  );
};

// Pattern: Radar/Tendances (pour tendances)
const TrendsPattern = ({ colors, slug }: { colors: typeof categoryColors['tendances']; slug: string }) => {
  const center = { x: 400, y: 200 };
  const rings = [60, 120, 180];
  const dataPoints = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    const distance = 80 + seededRandom(slug, i) * 100;
    return {
      x: center.x + Math.cos(angle) * distance,
      y: center.y + Math.sin(angle) * distance,
      angle: i * 60
    };
  });

  return (
    <g>
      {/* Cercles concentriques */}
      {rings.map((r, i) => (
        <motion.circle
          key={`ring-${i}`}
          cx={center.x}
          cy={center.y}
          r={r}
          fill="none"
          stroke={colors.primary}
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
      
      {/* Lignes radiales */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        return (
          <line
            key={`radial-${i}`}
            x1={center.x}
            y1={center.y}
            x2={center.x + Math.cos(angle) * 180}
            y2={center.y + Math.sin(angle) * 180}
            stroke={colors.primary}
            strokeWidth="1"
            strokeOpacity="0.15"
          />
        );
      })}
      
      {/* Zone de données */}
      <motion.path
        d={`M${dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')} Z`}
        fill={colors.secondary}
        fillOpacity="0.2"
        stroke={colors.secondary}
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ transformOrigin: `${center.x}px ${center.y}px` }}
      />
      
      {/* Points de données */}
      {dataPoints.map((point, i) => (
        <motion.circle
          key={`datapoint-${i}`}
          cx={point.x}
          cy={point.y}
          r="8"
          fill={colors.accent}
          stroke="#0A0A0F"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
        />
      ))}
      
      {/* Point central pulsant */}
      <motion.circle
        cx={center.x}
        cy={center.y}
        r="12"
        fill={colors.primary}
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Indicateurs de tendance */}
      {[
        { x: 600, y: 80, label: '+45%', color: colors.accent },
        { x: 650, y: 150, label: 'Stable', color: colors.secondary },
        { x: 620, y: 220, label: '+120%', color: colors.accent }
      ].map((indicator, i) => (
        <motion.g
          key={`indicator-${i}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
        >
          <rect
            x={indicator.x}
            y={indicator.y - 12}
            width="80"
            height="24"
            rx="12"
            fill={indicator.color}
            fillOpacity="0.2"
          />
          <text
            x={indicator.x + 40}
            y={indicator.y + 4}
            textAnchor="middle"
            fill={indicator.color}
            fontSize="12"
            fontWeight="bold"
          >
            {indicator.label}
          </text>
        </motion.g>
      ))}
    </g>
  );
};

// Pattern: Bouclier/Conformité (pour conformite)
const CompliancePattern = ({ colors, slug }: { colors: typeof categoryColors['conformite']; slug: string }) => {
  const center = { x: 400, y: 200 };
  
  return (
    <g>
      {/* Bouclier principal */}
      <motion.path
        d="M400,50 L550,100 L550,250 Q550,350 400,380 Q250,350 250,250 L250,100 Z"
        fill={colors.primary}
        fillOpacity="0.1"
        stroke={colors.primary}
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: '400px 215px' }}
      />
      
      {/* Bouclier interne */}
      <motion.path
        d="M400,90 L510,130 L510,240 Q510,310 400,340 Q290,310 290,240 L290,130 Z"
        fill={colors.secondary}
        fillOpacity="0.15"
        stroke={colors.secondary}
        strokeWidth="1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: '400px 215px' }}
      />
      
      {/* Checkmark */}
      <motion.path
        d="M350,200 L385,240 L460,160"
        stroke={colors.accent}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      
      {/* Éléments orbitaux */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45) * (Math.PI / 180);
        const radius = 220;
        const x = center.x + Math.cos(angle) * radius;
        const y = center.y + Math.sin(angle) * radius;
        return (
          <motion.g key={`orbital-${i}`}>
            <motion.circle
              cx={x}
              cy={y}
              r="15"
              fill={i % 2 === 0 ? colors.primary : colors.secondary}
              fillOpacity="0.3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
            <circle
              cx={x}
              cy={y}
              r="5"
              fill={colors.accent}
              fillOpacity="0.8"
            />
          </motion.g>
        );
      })}
      
      {/* Lignes de connexion au bouclier */}
      {[45, 135, 225, 315].map((angle, i) => {
        const rad = angle * (Math.PI / 180);
        const innerRadius = 120;
        const outerRadius = 200;
        return (
          <motion.line
            key={`conn-${i}`}
            x1={center.x + Math.cos(rad) * innerRadius}
            y1={center.y + Math.sin(rad) * innerRadius}
            x2={center.x + Math.cos(rad) * outerRadius}
            y2={center.y + Math.sin(rad) * outerRadius}
            stroke={colors.secondary}
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          />
        );
      })}
      
      {/* Labels */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <text x="400" y="385" textAnchor="middle" fill={colors.primary} fontSize="14" fontWeight="bold" fillOpacity="0.8">
          RGPD / LPD / EU AI Act
        </text>
      </motion.g>
    </g>
  );
};

// Composant principal
const BlogHeroImage = ({ categoryId, slug, className = '' }: BlogHeroImageProps) => {
  const colors = useMemo(() => 
    categoryColors[categoryId] || categoryColors['strategie-ia'],
    [categoryId]
  );

  const PatternComponent = useMemo(() => {
    switch (categoryId) {
      case 'strategie-ia':
        return NeuralNetworkPattern;
      case 'automatisation':
        return DataFlowPattern;
      case 'cas-clients':
      case 'competitivite':
        return MetricsPattern;
      case 'guides':
        return GuidePattern;
      case 'tendances':
        return TrendsPattern;
      case 'conformite':
        return CompliancePattern;
      default:
        return NeuralNetworkPattern;
    }
  }, [categoryId]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Gradient de fond */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${colors.primary}15 0%, transparent 70%)`
        }}
      />
      
      {/* SVG Pattern */}
      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        style={{ minHeight: '100%' }}
      >
        {/* Définitions globales */}
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.1" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Fond avec glow */}
        <rect width="800" height="400" fill="url(#bgGlow)" />
        
        {/* Pattern spécifique à la catégorie */}
        <PatternComponent colors={colors} slug={slug} />
      </svg>
      
      {/* Overlay gradient pour meilleure lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-dainamics-background via-transparent to-transparent" />
    </div>
  );
};

export default BlogHeroImage;