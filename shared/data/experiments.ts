import {
  Wind,
  CloudRain,
  Sparkles,
  Volume2,
  BookOpen,
  Star,
  Keyboard,
  Brain,
  Leaf,
  Ghost,
  CircleDot,
  Zap,
  Flame,
  Palette,
  Waves,
  TreePine,
  Telescope,
  Search,
  LucideIcon
} from 'lucide-react';

export type Experiment = {
  name: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  charIcon?: string;
  color: string;
};

export const experiments: Experiment[] = [
  // New Experiments (2026)
  {
    name: 'Kana Pop',
    description: 'Juicy bubble popping fun',
    href: '/experiments/pop',
    icon: CircleDot,
    color: 'text-blue-300'
  },
  {
    name: 'Flash Rush',
    description: 'High-speed kana identification',
    href: '/experiments/rush',
    icon: Zap,
    color: 'text-yellow-400'
  },
  {
    name: 'Hanabi',
    description: 'Traditional kana fireworks',
    href: '/experiments/hanabi',
    icon: Flame,
    color: 'text-orange-500'
  },
  {
    name: 'Kana Trace',
    description: 'Practice stroke order',
    href: '/experiments/trace',
    icon: Palette,
    color: 'text-rose-400'
  },
  {
    name: 'Kana Wave',
    description: 'Rhythm timing challenge',
    href: '/experiments/wave',
    icon: Waves,
    color: 'text-indigo-400'
  },
  {
    name: 'Zen Bonsai',
    description: 'Mindful growth clicker',
    href: '/experiments/bonsai',
    icon: TreePine,
    color: 'text-emerald-500'
  },
  {
    name: 'Kana Nebula',
    description: 'Deep space exploration',
    href: '/experiments/nebula',
    icon: Telescope,
    color: 'text-purple-300'
  },
  {
    name: 'Kana Search',
    description: 'Find character in grid',
    href: '/experiments/search',
    icon: Search,
    color: 'text-amber-500'
  },
  // Classic Experiments
  {
    name: 'Zen Mode',
    description: 'Relax with animated decorations',
    href: '/zen',
    icon: Leaf,
    color: 'text-green-400'
  },
  {
    name: 'Breathing',
    description: 'Guided breathing with kana',
    href: '/experiments/breathing',
    icon: Wind,
    color: 'text-blue-400'
  },
  {
    name: 'Ambient',
    description: 'Floating kana atmosphere',
    href: '/experiments/ambient',
    icon: Sparkles,
    color: 'text-purple-400'
  },
  {
    name: 'Kana Rain',
    description: 'Matrix-style falling characters',
    href: '/experiments/rain',
    icon: CloudRain,
    color: 'text-cyan-400'
  },
  {
    name: 'Sound Garden',
    description: 'Interactive kana sounds',
    href: '/experiments/sound',
    icon: Volume2,
    color: 'text-yellow-400'
  },
  {
    name: 'Haiku Garden',
    description: 'Classic Japanese poetry',
    href: '/experiments/haiku',
    icon: BookOpen,
    color: 'text-pink-400'
  },
  {
    name: 'Constellation',
    description: 'Connect kana stars',
    href: '/experiments/constellation',
    icon: Star,
    color: 'text-amber-400'
  },
  {
    name: 'Speed Typing',
    description: 'Test your romanji speed',
    href: '/experiments/typing',
    icon: Keyboard,
    color: 'text-red-400'
  },
  {
    name: 'Memory Palace',
    description: 'Spatial memory game',
    href: '/experiments/memory',
    icon: Brain,
    color: 'text-indigo-400'
  },
  {
    name: 'Yokai Run',
    description: 'Avoid the obstacles and run as far as you can!',
    href: '/experiments/runner',
    icon: Ghost,
    color: 'text-slate-200'
  }
];
