import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ClipboardList, Package } from 'lucide-react';

const expectations = [
  'A calm, confidential consultation with Dr Kunutu.',
  'Time to discuss your concerns, history and questions.',
  'A clear explanation of any assessment or next steps.',
  'A shared plan for your ongoing care.',
];

const bringItems = [
  'Your South African ID or passport.',
  'Your medical aid card (if applicable).',
  'A list of current medications.',
  'Any relevant previous test results or referral letters.',
];

export function PatientInfoSection() {
  return (
    <section id="patient-info" className="relative bg-brand-50 py-20 lg:py-28">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Patient information"
            title="What to expect at your visit"
            description="A little preparation helps your consultation run smoothly. Here is a helpful guide to getting the most from your appointment."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-brand-100 bg-white p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <ClipboardList className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="text-xl font-semibold text-ink-950">During your consultation</h3>
              <ul className="flex flex-col gap-3">
                {expectations.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-ink-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-brand-100 bg-white p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                <Package className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="text-xl font-semibold text-ink-950">What to bring</h3>
              <ul className="flex flex-col gap-3">
                {bringItems.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-ink-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8">
          <p className="rounded-2xl border border-brand-100 bg-white p-5 text-xs italic text-ink-400">
            Specific practice policies — such as cancellation, billing and referral requirements — can be added here once confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
