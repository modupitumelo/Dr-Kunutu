import { FaWhatsapp } from 'react-icons/fa';
import { practice } from '@/data/practice';

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${practice.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the practice on WhatsApp"
      className="group fixed bottom-20 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5a] lg:bottom-6 lg:inline-flex"
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
      <FaWhatsapp className="relative h-7 w-7" />
    </a>
  );
}
