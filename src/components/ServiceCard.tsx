import type { Service } from '@/data/services';
import { ArrowUpRight } from 'lucide-react';

type ServiceCardProps = {
  service: Service;
  onEnquire?: (service: Service) => void;
};

export function ServiceCard({ service, onEnquire }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col gap-5 rounded-2xl border border-brand-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_18px_40px_-20px_rgba(236,31,111,0.25)]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-semibold text-ink-950">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink-600">{service.description}</p>
      </div>
      <button
        type="button"
        onClick={() => onEnquire?.(service)}
        className="link-underline mt-1 self-start text-sm"
      >
        Enquire About This Service
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </article>
  );
}
