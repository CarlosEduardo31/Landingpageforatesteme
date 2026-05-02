interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gestores' | 'professores' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export default function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const variantClasses = {
    primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border border-[var(--color-primary-300)]',
    secondary: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] border border-[var(--color-secondary-300)]',
    gestores: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)] border border-[var(--color-neutral-300)]',
    professores: 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border border-[var(--color-primary-300)]',
    success: 'bg-green-100 text-green-700 border border-green-300'
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-semibold ${sizeClasses[size]} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
