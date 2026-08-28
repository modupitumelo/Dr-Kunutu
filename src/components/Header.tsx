import { useEffect, useState } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
// Header stays solid white at all scroll positions.
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import { practice } from '@/data/practice';

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pregnancy', href: '#pregnancy' },
  { label: 'Patient Info', href: '#patient-info' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-brand-100 bg-white shadow-[0_2px_20px_-12px_rgba(236,31,111,0.12)]"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="container-px">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }} aria-label={`${practice.name} — home`}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${practice.phoneE164}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-brand-700"
            >
              <Phone className="h-4 w-4 text-brand-500" />
              {practice.phone}
            </a>
            <Button as="a" href="#contact" size="sm">
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white/80 text-ink-800 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-x-0 top-20 origin-top border-b border-brand-100 bg-white transition-all duration-300 ${
            open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <nav className="container-px flex flex-col gap-1 py-6" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-brand-100 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 px-1">
              <Button as="a" href="#contact" className="w-full">
                <CalendarCheck className="h-4 w-4" />
                Book an Appointment
              </Button>
              <Button as="a" href={`tel:${practice.phoneE164}`} variant="outline" className="w-full">
                <Phone className="h-4 w-4" />
                Call {practice.phone}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
