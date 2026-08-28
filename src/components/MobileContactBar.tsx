import { Phone, CalendarCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { practice } from '@/data/practice';

/**
 * Fixed bottom contact bar shown on mobile/tablet only.
 * Keeps Call | WhatsApp | Appointment always within thumb reach.
 */
export function MobileContactBar() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="border-t border-ink-100 bg-white/95 backdrop-blur-xl shadow-[0_-8px_24px_-12px_rgba(15,17,20,0.18)]">
        <div className="grid grid-cols-3">
          <a
            href={`tel:${practice.phoneE164}`}
            className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-ink-800 transition-colors active:bg-ink-100"
          >
            <Phone className="h-5 w-5 text-brand-600" />
            Call
          </a>
          <a
            href={`https://wa.me/${practice.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-ink-100 py-3 text-xs font-semibold text-ink-800 transition-colors active:bg-ink-100"
          >
            <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-white bg-brand-700 transition-colors active:bg-brand-800"
          >
            <CalendarCheck className="h-5 w-5" />
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
