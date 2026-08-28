import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { practice } from '@/data/practice';
import { CalendarCheck, Phone, MessageCircle } from 'lucide-react';

export function CtaSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative bg-brand-50 py-20 lg:py-28">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-500 to-accent-400 px-7 py-14 text-white sm:px-12 lg:px-20 lg:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-25">
              <div className="absolute -top-16 right-[-5%] h-80 w-80 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute bottom-[-6rem] left-[-4%] h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Ready when you are
                </span>
                <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Book your appointment with Dr Kunutu
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-brand-50/90">
                  Whether you are planning a pregnancy, expecting a baby, or seeking trusted gynaecological
                  care, the practice is here to support you.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Button as="a" href="#contact" onClick={() => scrollTo('#contact')} variant="secondary" size="lg" className="w-full lg:w-auto">
                  <CalendarCheck className="h-5 w-5" />
                  Get in Touch
                </Button>
                <Button as="a" href={`tel:${practice.phoneE164}`} variant="outline" size="lg" className="w-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand-700 lg:w-auto">
                  <Phone className="h-5 w-5" />
                  Call {practice.phone}
                </Button>
                <Button as="a" href={`https://wa.me/${practice.whatsapp}`} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg" className="w-full lg:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp the Practice
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
