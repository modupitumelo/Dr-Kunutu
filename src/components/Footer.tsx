import { Logo } from '@/components/Logo';
import { practice } from '@/data/practice';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Patient Information', href: '#patient-info' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Medical Disclaimer', href: '#disclaimer' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: practice.social.facebook },
  { icon: Instagram, label: 'Instagram', href: practice.social.instagram },
  { icon: Linkedin, label: 'LinkedIn', href: practice.social.linkedin },
].filter((s) => s.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
      </div>

      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ink-400">
              Professional and compassionate healthcare for women through every stage of life.
            </p>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-ink-300">
              <ShieldCheck className="h-4 w-4 text-brand-400" />
              Practice Number: <span className="font-semibold text-white">{practice.practiceNumber}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-4" aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Quick links</p>
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-400 transition-colors hover:text-brand-300">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Contact</p>
            <a href={`tel:${practice.phoneE164}`} className="flex items-start gap-2.5 text-sm text-ink-400 transition-colors hover:text-brand-300">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {practice.phone}
            </a>
            <a href={`mailto:${practice.email}`} className="flex items-start gap-2.5 break-all text-sm text-ink-400 transition-colors hover:text-brand-300">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              {practice.email}
            </a>
            <address className="flex items-start gap-2.5 not-italic text-sm text-ink-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span>
                {practice.address.hospital}
                <br />
                {practice.address.town}, {practice.address.postalCode}
              </span>
            </address>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Legal</p>
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-400 transition-colors hover:text-brand-300">
                {l.label}
              </a>
            ))}
            {socials.length > 0 && (
              <div className="mt-2 flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-colors hover:border-brand-400 hover:text-brand-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs leading-relaxed text-ink-400">
            <span className="font-semibold text-ink-200">Medical Disclaimer:</span>{' '}
            The information provided on this website is for general informational purposes and does
            not replace professional medical advice, diagnosis or treatment. For medical concerns,
            please consult a qualified healthcare professional. In an emergency, seek immediate
            emergency medical assistance.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">© {year} {practice.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
