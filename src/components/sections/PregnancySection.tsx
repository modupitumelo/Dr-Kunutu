import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { Baby, Activity, ShieldCheck, CalendarHeart, ClipboardList, HeartPulse } from 'lucide-react';

const stages = [
  {
    icon: CalendarHeart,
    title: 'Antenatal care',
    text: 'Regular, reassuring check-ups from early pregnancy, tracking your baby’s growth and your wellbeing.',
  },
  {
    icon: Baby,
    title: 'Pregnancy consultations',
    text: 'Dedicated time to discuss your journey, ask questions and feel confident about what lies ahead.',
  },
  {
    icon: Activity,
    title: 'Monitoring',
    text: 'Attentive, ultrasound-guided monitoring to follow your baby’s development at every milestone.',
  },
  {
    icon: ShieldCheck,
    title: 'High-risk pregnancy support',
    text: 'Specialist management for pregnancies needing closer observation, with expert guidance throughout.',
  },
  {
    icon: ClipboardList,
    title: 'Delivery planning',
    text: 'Thoughtful birth planning that respects your preferences and prepares you for a safe delivery.',
  },
  {
    icon: HeartPulse,
    title: 'Postnatal care',
    text: 'Continued support after birth — monitoring recovery and the wellbeing of mother and newborn.',
  },
];

export function PregnancySection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pregnancy" className="relative overflow-hidden bg-gradient-to-b from-brand-100/50 via-brand-50 to-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <div className="absolute right-[-8%] top-10 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl" />
      </div>
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Pregnancy & maternity"
              title="Reassuring, supportive care for your pregnancy"
              description="Pregnancy is a profound journey. Dr Kunutu provides attentive specialist care at every stage — from the first antenatal visit to postnatal recovery — so you feel informed, supported and cared for throughout."
            />
            <div className="mt-8 overflow-hidden rounded-3xl border border-brand-100 shadow-[0_24px_60px_-30px_rgba(236,31,111,0.25)]">
              <img
                src="/kunutu4.jpeg"
                alt="A pregnant woman receiving specialist pregnancy care."
                className="aspect-[16/11] w-full object-cover"
                loading="lazy"
                width={1200}
                height={825}
              />
            </div>
            <div className="mt-8">
              <Button as="a" href="#contact" onClick={() => scrollTo('#contact')} size="lg">
                <CalendarHeart className="h-5 w-5" />
                Book a Pregnancy Consultation
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 60} className="h-full">
                  <div className="group flex h-full flex-col gap-4 rounded-2xl border border-brand-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_18px_40px_-20px_rgba(236,31,111,0.25)]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-base font-semibold text-ink-950">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-600">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
