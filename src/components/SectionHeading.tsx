import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  const descCls = tone === 'light' ? 'text-brand-100' : 'text-ink-600';
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className={`text-base leading-relaxed sm:text-lg ${descCls}`}>{description}</p>}
    </div>
  );
}
