import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { practice } from '@/data/practice';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/Button';

export function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(practice.mapsQuery)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(practice.mapsQuery)}&output=embed`;

  return (
    <section id="location" className="relative bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Practice location"
              title="Find us in Mokopane"
              description="The practice is located within Mogalakwena Private Hospital, offering accessible specialist care for the community."
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Address</p>
                  <address className="mt-1 not-italic text-ink-800">
                    {practice.address.hospital}
                    <br />
                    {practice.address.street}
                    <br />
                    {practice.address.town}, {practice.address.postalCode}
                  </address>
                </div>
              </div>

              <Button as="a" href={mapsUrl} target="_blank" rel="noopener noreferrer" variant="outline">
                <Navigation className="h-4 w-4" />
                Get directions
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-[0_24px_60px_-30px_rgba(236,31,111,0.25)]">
              <iframe
                title={`Map showing ${practice.address.hospital}`}
                src={embedUrl}
                className="h-full min-h-[26rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
