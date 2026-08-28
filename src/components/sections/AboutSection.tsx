import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { practice } from '@/data/practice';
import { GraduationCap, Stethoscope, Heart, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const approach = [
  {
    icon: Heart,
    title: 'A patient-first philosophy',
    text: 'Every consultation begins by listening. Your concerns, history and preferences shape the care you receive.',
  },
  {
    icon: ShieldCheck,
    title: 'Evidence-based practice',
    text: 'Decisions are grounded in current specialist standards, explained clearly so you can take part with confidence.',
  },
  {
    icon: Sparkles,
    title: 'Calm, unhurried consultations',
    text: 'Time is set aside to answer your questions fully — no rushed appointments, no unanswered worries.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-[0_24px_60px_-30px_rgba(236,31,111,0.25)]">
              <img
                src="/kunutu3.jpeg"
                alt="Dr Kunutu conducting a consultation in a modern clinic."
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={1200}
                height={1500}
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-brand-100 bg-white px-6 py-5 shadow-lg">
              <p className="font-serif text-xl font-semibold text-ink-950">{practice.doctorName}</p>
              <p className="mt-0.5 text-sm font-medium text-brand-600">{practice.designation}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Dr Kunutu"
              title="Dedicated to women's health, at every stage"
              description="Dr Kunutu is a Specialist Obstetrician & Gynaecologist practising in Mokopane, providing professional and compassionate care across pregnancy, childbirth and the full spectrum of women's health."
            />

            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                <GraduationCap className="h-4 w-4" /> Qualifications
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {practice.qualifications.map((q) => (
                  <li key={q} className="flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-4 py-3">
                    <Stethoscope className="h-4 w-4 text-brand-500" />
                    <span className="font-serif text-base font-semibold text-ink-900">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-5">
              {approach.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.title} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink-950">{a.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{a.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border-l-2 border-accent-400 bg-accent-50/60 p-5">
              <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
              <p className="text-sm leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-900">Commitment to women's health:</span>{' '}
                Dr Kunutu is committed to supporting the health and dignity of every patient —
                through informed choices, respectful care and clinical excellence.
              </p>
            </div>

            <p className="mt-6 text-xs italic text-ink-400">
              {/* Editable placeholder — additional professional experience and biography details can be added here once supplied. */}
              Additional professional experience and biography details can be added here once supplied.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
