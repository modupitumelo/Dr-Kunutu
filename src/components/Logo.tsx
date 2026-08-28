type LogoProps = {
  className?: string;
  tone?: 'dark' | 'light';
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Dr Kunutu OBGYN logo"
      className="h-12 w-auto shrink-0 object-contain"
      loading="eager"
    />
  );
}
