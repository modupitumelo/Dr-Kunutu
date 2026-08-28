import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { practice } from '@/data/practice';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export function ContactSection({ presetService }: { presetService?: string }) {
  return (
    <section id="contact" className="relative bg-brand-50 py-20 lg:py-28">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Contact & appointments"
            title="Get in touch with the practice"
            description="Send an enquiry below, or reach the practice directly by phone, WhatsApp or email. We look forward to supporting you."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-brand-100 bg-white p-7">
                <h3 className="font-serif text-xl font-semibold text-ink-950">{practice.name}</h3>

                <div className="mt-6 space-y-4">
                  <a href={`tel:${practice.phoneE164}`} className="group flex items-start gap-3 text-ink-800 transition-colors hover:text-brand-700">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">Phone</span>
                      <span className="font-medium">{practice.phone}</span>
                    </span>
                  </a>
                  <a href={`https://wa.me/${practice.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-ink-800 transition-colors hover:text-brand-700">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">WhatsApp</span>
                      <span className="font-medium">{practice.phone}</span>
                    </span>
                  </a>
                  <a href={`mailto:${practice.email}`} className="group flex items-start gap-3 text-ink-800 transition-colors hover:text-brand-700">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">Email</span>
                      <span className="break-all font-medium">{practice.email}</span>
                    </span>
                  </a>
                  <div className="flex items-start gap-3 text-ink-800">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">Address</span>
                      <address className="not-italic font-medium leading-relaxed">
                        {practice.address.hospital}
                        <br />
                        {practice.address.street}
                        <br />
                        {practice.address.town}, {practice.address.postalCode}
                      </address>
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-brand-100 bg-white p-7">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                  <Clock className="h-4 w-4" /> Practice hours
                </p>
                <ul className="mt-4 space-y-2.5">
                  {practice.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-ink-600">{h.day}</span>
                      <span className="font-medium text-ink-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs italic text-ink-400">
                  Hours shown are a placeholder. Please confirm with the practice before visiting.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_24px_60px_-30px_rgba(236,31,111,0.2)] sm:p-9">
              <h3 className="font-serif text-2xl font-semibold text-ink-950">Request an appointment</h3>
              <p className="mt-2 text-sm text-ink-600">
                Fill in the form below and your details will be sent to the practice via WhatsApp.
              </p>
              <div className="mt-6">
                <ContactForm presetService={presetService} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
