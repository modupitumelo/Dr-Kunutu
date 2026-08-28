import { Reveal } from '@/components/Reveal';
import { practice } from '@/data/practice';
import { BadgeCheck, FileText, HeartHandshake, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: BadgeCheck, label: 'Specialist designation', value: practice.designation },
  { icon: FileText, label: 'Practice number', value: practice.practiceNumber },
  { icon: HeartHandshake, label: 'Patient-focused approach', value: 'Listening first, always' },
  { icon: ShieldCheck, label: 'Evidence-based care', value: 'Grounded in current standards' },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-brand-300 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent-400 blur-3xl" />
      </div>
      <div className="container-px">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100">
            Trust &amp; credibility
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Verified credentials you can rely on
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-50">
            Every detail shared here reflects confirmed, verifiable information about the practice —
            because trust begins with transparency.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.label} delay={i * 70}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition-colors hover:bg-white/15">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-100">{p.label}</p>
                  <p className="font-serif text-lg font-medium text-white">{p.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
