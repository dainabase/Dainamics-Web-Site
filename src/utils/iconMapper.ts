// src/utils/iconMapper.ts

/**
 * Icon Mapper - Portfolio Projects
 * 
 * Convertit les noms d'icônes (strings) stockés dans portfolio.ts
 * en components Lucide React utilisables dans les pages.
 * 
 * IMPORTANT: Toutes les icônes sont vérifiées sur https://lucide.dev
 * pour garantir leur existence dans Lucide React v0.263.1
 */

import {
  Brain,
  Building,
  TrendingUp,
  Award,
  Code,
  Zap,
  Users,
  FileText,
  BarChart,
  Target,
  Clock,
  DollarSign,
  CircleCheck,
  Star,
  Sparkles,
  Link,
  Database,
  Eye,
  Cpu,
  Cloud,
  Send,
  Timer,
  Bot,
  MessageSquare,
  Workflow,
  GitBranch,
  Network,
  Server,
  Package,
  Paintbrush,
  Globe,
  Smartphone,
  Layout,
  Rocket,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Terminal,
  Layers,
  ChevronLeft,
  Activity,
  Gauge,
  ArrowUpRight,
  type LucideIcon
} from 'lucide-react';

/**
 * Mapping string → Lucide React Component
 * Utilisé pour afficher dynamiquement les icônes dans les cards portfolio
 * 
 * @example
 * import { iconMapper } from '@/utils/iconMapper';
 * const Icon = iconMapper['Brain'];
 * return <Icon size={24} color="#6366F1" />;
 */
export const iconMapper: Record<string, LucideIcon> = {
  // IA & Tech
  Brain,
  Code,
  Sparkles,
  Eye,
  Cpu,
  Bot,
  Terminal,

  // Development
  Server,
  Package,
  Paintbrush,
  Globe,
  Smartphone,
  Layout,
  Layers,

  // Business & Finance
  Building,
  DollarSign,
  Award,
  Star,

  // Analytics & Metrics
  TrendingUp,
  BarChart,
  Target,
  Activity,
  Gauge,

  // Time & Status
  Clock,
  CircleCheck,
  CheckCircle,
  Zap,
  Timer,

  // Communication
  MessageSquare,
  Send,

  // People & Content
  Users,
  FileText,

  // Infrastructure & Integration
  Link,
  Database,
  Cloud,
  Workflow,
  GitBranch,
  Network,

  // Navigation & Actions
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Rocket
};

/**
 * Helper: Vérifier si une icône existe dans le mapper
 */
export const hasIcon = (iconName: string): boolean => {
  return iconName in iconMapper;
};

/**
 * Helper: Obtenir une icône avec fallback
 * Retourne l'icône demandée ou une icône par défaut si inexistante
 */
export const getIcon = (iconName: string, fallback: LucideIcon = Code): LucideIcon => {
  return iconMapper[iconName] || fallback;
};

/**
 * Helper: Liste de toutes les icônes disponibles
 */
export const getAvailableIcons = (): string[] => {
  return Object.keys(iconMapper).sort();
};

/**
 * Type export pour TypeScript
 */
export type IconName = keyof typeof iconMapper;

/**
 * Validation: Vérifier qu'une string est un nom d'icône valide
 */
export const isValidIconName = (name: string): name is IconName => {
  return name in iconMapper;
};