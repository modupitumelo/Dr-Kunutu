import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { Service } from '@/data/services';
import { ContactForm } from '@/components/ContactForm';

type EnquireModalProps = {
  service: Service | null;
  onClose: () => void;
};

export function EnquireModal({ service, onClose }: EnquireModalProps) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (service) {
      setRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [service]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!render && !service) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-end justify-center p-0 transition-all duration-300 sm:items-center sm:p-6 ${
        service ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!service}
    >
      <div
        className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Enquire about ${service?.title ?? ''}`}
        className={`relative w-full max-w-lg overflow-hidden rounded-t-[2rem] border border-brand-100 bg-white shadow-2xl transition-all duration-300 sm:rounded-[2rem] ${
          service ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-brand-100 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Service enquiry</p>
            <h3 className="mt-1 font-serif text-xl font-semibold text-ink-950">{service?.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-200 text-ink-600 transition-colors hover:bg-brand-100"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-6">
          <p className="mb-5 text-sm text-ink-600">{service?.description}</p>
          <ContactForm presetService={service?.title} />
        </div>
      </div>
    </div>
  );
}
