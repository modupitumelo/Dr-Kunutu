import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { practice } from '@/data/practice';
import { GraduationCap, Stethoscope } from 'lucide-react';

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
              <p className="font-serif text-xl font-semibold text-ink-950">
                {practice.doctorName}
              </p>
              <p className="mt-0.5 text-sm font-medium text-brand-600">
                {practice.designation}
              </p>
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
                <GraduationCap className="h-4 w-4" />
                Qualifications
              </p>

              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {practice.qualifications.map((q) => (
                  <li
                    key={q}
                    className="flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-4 py-3"
                  >
                    <Stethoscope className="h-4 w-4 text-brand-500" />
                    <span className="font-serif text-base font-semibold text-ink-900">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}