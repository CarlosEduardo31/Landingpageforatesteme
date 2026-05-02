import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: 'white' | 'gray' | 'purple' | 'gradient' | 'dark' | 'home' | 'hero' | 'gestores' | 'professores';
  className?: string;
}

export default function Section({ children, id, background = 'white', className = '' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-[var(--color-neutral-50)]',
    purple: 'bg-[var(--color-bg-purple-light)]',
    gradient: 'text-white',
    dark: 'bg-[var(--color-obsidian)] text-white',
    home: 'text-white',
    hero: 'text-white',
    gestores: 'text-white',
    professores: 'text-white'
  };

  const bgStyles = {
    white: {},
    gray: {},
    purple: {},
    gradient: { background: 'var(--gradient-main)' },
    dark: {},
    home: { background: 'var(--gradient-home)' },
    hero: { background: 'var(--gradient-hero)' },
    gestores: { background: 'var(--gradient-gestores)' },
    professores: { background: 'var(--gradient-professores)' }
  };

  return (
    <section
      id={id}
      className={`py-20 ${bgClasses[background]} ${className}`}
      style={bgStyles[background]}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string | ReactNode;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <div className={`inline-block bg-[rgba(178,156,251,0.2)] text-[var(--color-purple-bluest)] px-4 py-2 rounded-full mb-4 text-sm font-semibold ${centered ? '' : 'mb-4'}`}>
          {badge}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-obsidian)' }}>
        {title}
      </h2>
      {description && (
        <p className={`text-xl text-gray-600 leading-relaxed ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
