import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ShieldCheck, HeartHandshake, Baby, Stethoscope, MessagesSquare, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Specialist expertise',
    text: 'A fully qualified Specialist Obstetrician & Gynaecologist with recognised postgraduate credentials.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate, personal care',
    text: 'Unhurried consultations where your concerns are heard and your decisions are respected.',
  },
  {
    icon: Baby,
    title: 'Pregnancy through to postnatal',
    text: 'Continuous, attentive support across every stage of pregnancy, birth and recovery.',
  },
  {
    icon: Stethoscope,
    title: 'Lifelong women’s health',
    text: 'From adolescence to maturity — preventative, menstrual and gynaecological care for every chapter.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear, honest communication',
    text: 'Conditions and options explained in plain language so you can make confident, informed choices.',
  },
  {
    icon: MapPin,
    title: 'Convenient Mokopane location',
    text: 'Based at Mogalakwena Private Hospital, offering accessible specialist care close to home.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Why Dr Kunutu"
            title="Care built on trust, expertise and warmth"
            description="Choosing a specialist is a deeply personal decision. Here is what patients can expect from the practice."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 60}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-brand-100 bg-brand-50/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(236,31,111,0.25)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink-950">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-600">{r.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
