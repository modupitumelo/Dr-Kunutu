import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services, serviceCategories, type Service } from '@/data/services';

type Props = {
  onEnquire: (service: Service) => void;
};

export function ServicesSection({ onEnquire }: Props) {
  const [active, setActive] = useState<'All' | (typeof serviceCategories)[number]>('All');
  const filtered = active === 'All' ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="What we offer"
            title="Comprehensive obstetric & gynaecological services"
            description="From pregnancy and maternity to everyday women's health, each service is delivered with specialist expertise and a patient-first focus."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-2">
          {(['All', ...serviceCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'border border-brand-200 bg-white text-ink-700 hover:border-brand-400 hover:text-brand-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service, i) => (
            <Reveal key={service.id} delay={i * 50}>
              <ServiceCard service={service} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
