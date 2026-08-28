import { CalendarCheck, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/Button';
import { practice } from '@/data/practice';

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/kunutu1.jpeg"
          alt="Dr Kunutu, Specialist Obstetrician & Gynaecologist."
          className="h-full w-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>
      {/* Dark overlay for readability while keeping the photo clear */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

      <div className="container-px relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20 lg:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            {practice.designation}
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]">
            Expert Care for Every Stage of Your Journey
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-50/90">
            Compassionate, specialised obstetric and gynaecological care in Mokopane —
            supporting women through pregnancy, motherhood, and every chapter of lifelong health.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#contact" size="lg" onClick={() => scrollTo('#contact')}>
              <CalendarCheck className="h-5 w-5" />
              Book an Appointment
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="outline"
              size="lg"
              onClick={() => scrollTo('#contact')}
              className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-brand-700"
            >
              <Phone className="h-5 w-5" />
              Contact the Practice
            </Button>
          </div>
        </div>
      </div>

      {/* Soft fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-50 to-transparent" />
    </section>
  );
}
