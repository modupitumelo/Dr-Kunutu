import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  as?: 'button';
  children: ReactNode;
};

type AnchorButtonProps = {
  variant?: Variant;
  size?: Size;
  as: 'a';
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  onClick?: () => void;
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-[0_8px_24px_-10px_rgba(236,31,111,0.6)] hover:bg-brand-700 hover:shadow-[0_14px_30px_-12px_rgba(236,31,111,0.7)] hover:-translate-y-0.5',
  secondary:
    'bg-accent-500 text-white shadow-[0_8px_24px_-10px_rgba(249,106,72,0.6)] hover:bg-accent-600 hover:-translate-y-0.5',
  outline:
    'border border-brand-200 bg-white/70 text-ink-900 backdrop-blur hover:border-brand-400 hover:text-brand-700 hover:bg-white',
  ghost: 'text-ink-700 hover:bg-brand-100 hover:text-brand-800',
  whatsapp:
    'bg-[#25D366] text-white shadow-[0_8px_24px_-10px_rgba(37,211,102,0.7)] hover:bg-[#1ebe5a] hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function Button(props: ButtonProps | AnchorButtonProps) {
  const { variant = 'primary', size = 'md', className = '' } = props as ButtonProps & AnchorButtonProps;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ((props as AnchorButtonProps).as === 'a') {
    const a = props as AnchorButtonProps;
    return (
      <a href={a.href} target={a.target} rel={a.rel} aria-label={a['aria-label']} onClick={a.onClick} className={classes}>
        {a.children}
      </a>
    );
  }
  const b = props as ButtonProps;
  return (
    <button className={classes} {...b}>
      {b.children}
    </button>
  );
}
