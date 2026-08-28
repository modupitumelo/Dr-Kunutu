import { useState, type FormEvent } from 'react';
import { practice } from '@/data/practice';
import { CheckCircle2, Send, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredDate: string;
  preferredContact: 'Email' | 'Phone' | 'WhatsApp';
};

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  preferredDate: '',
  preferredContact: 'Email',
};

export function ContactForm({ presetService }: { presetService?: string }) {
  const [form, setForm] = useState<FormState>({ ...initial, message: presetService ? `I would like to enquire about: ${presetService}` : '' });
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const lines = [
      `*Appointment Enquiry — ${form.name}*`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Preferred date: ${form.preferredDate || 'Not specified'}`,
      `Preferred contact: ${form.preferredContact}`,
      '',
      'Message:',
      form.message,
    ];
    const text = lines.join('\n');
    const url = `https://wa.me/${practice.whatsapp}?text=${encodeURIComponent(text)}`;

    window.setTimeout(() => {
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }, 500);
  };

  const reset = () => {
    setForm({ ...initial, message: presetService ? `I would like to enquire about: ${presetService}` : '' });
    setStatus('idle');
  };

  const inputCls =
    'w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-200 focus:ring-offset-0';
  const labelCls = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-600';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Full name</label>
          <input
            id="cf-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputCls}
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>Phone</label>
          <input
            id="cf-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputCls}
            placeholder="e.g. 068 695 5366"
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className={labelCls}>Email</label>
        <input
          id="cf-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className={inputCls}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-date" className={labelCls}>Preferred appointment date</label>
          <input
            id="cf-date"
            type="date"
            value={form.preferredDate}
            onChange={(e) => update('preferredDate', e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="cf-contact" className={labelCls}>Preferred contact method</label>
          <select
            id="cf-contact"
            value={form.preferredContact}
            onChange={(e) => update('preferredContact', e.target.value)}
            className={inputCls}
          >
            <option>Email</option>
            <option>Phone</option>
            <option>WhatsApp</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelCls}>Message</label>
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputCls} resize-none`}
          placeholder="Tell us how we can help you"
        />
      </div>

      <p className="flex items-start gap-2 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
        Submitting this form does not guarantee an appointment. For urgent medical concerns,
        please contact your nearest emergency medical services immediately.
      </p>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_-10px_rgba(236,31,111,0.6)] transition-all duration-300 hover:bg-brand-700 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
        )}
        Send Enquiry
      </button>

      {status === 'success' && (
        <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <div>
            <p className="font-semibold">Opening WhatsApp…</p>
            <p className="mt-0.5 text-green-700">
              A WhatsApp chat with the practice should have opened with your details pre-filled.
              Please press send to complete your enquiry.
            </p>
            <button type="button" onClick={reset} className="mt-2 text-xs font-semibold text-green-800 underline">
              Send another enquiry
            </button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <p className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Something went wrong opening WhatsApp. Please call {practice.phone} or WhatsApp{' '}
          {practice.phone} directly.
        </p>
      )}
    </form>
  );
}
