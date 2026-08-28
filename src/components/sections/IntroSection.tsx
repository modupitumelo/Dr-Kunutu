import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { practice } from '@/data/practice';
import { Quote } from 'lucide-react';

export function IntroSection() {
  return (
    <section className="relative bg-brand-50 py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-[0_24px_60px_-30px_rgba(236,31,111,0.25)]">
              <img
                src="/kunutu2.jpeg"
                alt="Dr Kunutu providing specialist care in a clinic setting."
                className="aspect-[5/6] w-full object-cover"
                loading="lazy"
                width={1200}
                height={1440}
              />
            </div>
            <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-lg sm:block">
              <p className="font-serif text-lg font-semibold text-ink-950">{practice.doctorName}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Meet your specialist"
              title="A calm, considered approach to women's healthcare"
              description="Dr Kunutu provides specialist obstetric and gynaecological care grounded in clinical excellence and genuine compassion. Every consultation is shaped around the individual — listening first, explaining clearly, and walking alongside each patient with respect."
            />
            <figure className="mt-8 rounded-2xl border-l-2 border-brand-300 bg-white/70 p-6">
              <Quote className="h-6 w-6 text-brand-400" />
              <blockquote className="mt-3 font-serif text-lg italic leading-relaxed text-ink-800">
                “Care should feel personal. My commitment is to every woman who walks through these
                doors — to be heard, to be informed, and to be cared for with expertise and warmth.”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink-700">
                — {practice.doctorName}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
