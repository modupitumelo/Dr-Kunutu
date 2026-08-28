import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
};

export function Reveal({ children, className = '', as = 'div' }: RevealProps) {
  const Tag = as as 'div';
  return <Tag className={className}>{children}</Tag>;
}
