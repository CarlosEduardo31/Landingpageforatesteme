import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'gestores' | 'professores' | 'gradient';
  hover?: boolean;
  className?: string;
}

export default function Card({ children, variant = 'default', hover = true, className = '' }: CardProps) {
  const baseClasses = 'rounded-2xl p-8 transition-all';

  const variantClasses = {
    default: 'bg-white border-2 border-[var(--border-color-light)] shadow-md',
    gestores: 'bg-white border-2 border-[var(--color-neutral-200)] hover:border-[var(--color-gestores-primary)] shadow-md hover:shadow-[var(--shadow-purple)]',
    professores: 'bg-white border-2 border-[var(--color-purple-blue-gray)] hover:border-[var(--color-professores-primary)] shadow-md hover:shadow-[var(--shadow-atesteme)]',
    gradient: 'bg-[var(--gradient-professores)] text-white shadow-xl hover:shadow-[var(--shadow-coral)]'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}
