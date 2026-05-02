import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gestores' | 'professores' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  showArrow = false,
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-[var(--color-atesteme)] text-white hover:bg-[var(--color-atesteme-dark)] shadow-[var(--shadow-atesteme)] hover:shadow-xl',
    secondary: 'bg-[var(--color-purple-bluest)] text-white hover:bg-[var(--color-purple-bluest-dark)] shadow-[var(--shadow-purple)] hover:shadow-xl',
    gestores: 'bg-[var(--color-gestores-primary)] text-white hover:bg-[var(--color-gestores-dark)] shadow-lg hover:shadow-xl',
    professores: 'bg-[var(--color-professores-primary)] text-white hover:bg-[var(--color-atesteme-dark)] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[var(--border-color-purple)] text-[var(--color-obsidian)] hover:border-[var(--color-atesteme)] hover:text-[var(--color-atesteme)]'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${classes} group`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${classes} group`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
