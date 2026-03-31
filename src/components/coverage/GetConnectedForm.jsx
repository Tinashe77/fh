/**
 * GetConnectedForm
 * Frontend-only Phase 1 modal form for LIVE zones.
 *
 * Phase 2 upgrade path:
 *   - Replace fake onSubmit with `await axios.post('/api/connect', data)`
 *   - Add selectedPackage options from API (GET /api/packages)
 *   - Field structure remains unchanged
 */

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  address: z.string().min(3, 'Address is required'),
  suburb: z.string().min(2, 'Suburb is required'),
  city: z.string().min(2, 'City is required'),
  selectedPackage: z.string().min(1, 'Please select a package'),
  installationNotes: z.string().optional(),
});

const PACKAGES = [
  { value: '', label: 'Select a package' },
  { value: 'basic', label: 'Basic — 25 Mbps (symmetrical)' },
  { value: 'standard', label: 'Standard — 50 Mbps (symmetrical)' },
  { value: 'premium', label: 'Premium — 100 Mbps (symmetrical)' },
  { value: 'gigabit', label: 'Gigabit — 1 Gbps (symmetrical)' },
];

const Field = ({ label, error, children }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-1.5">
      {label}
    </label>
    {children}
    {error && (
      <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
    )}
  </div>
);

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-primary-container/12 bg-surface text-on-surface text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-container/30 transition-shadow placeholder:text-outline/50';

const GetConnectedForm = ({ onClose, prefillAddress = '', prefillSuburb = '', prefillCity = '' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      address: prefillAddress,
      suburb: prefillSuburb,
      city: prefillCity,
    },
  });

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Phase 1: fake submit
  const onSubmit = (data) => {
    console.log('[GetConnectedForm] Phase 1 submit — data not sent:', data);
    // Phase 2: await axios.post('/api/connect', data)
  };

  return (
    <div
      className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-glass-heavy overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-5 border-b border-primary-container/6 shrink-0">
          <div>
            <span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-1.5">
              Get Connected
            </span>
            <h3 className="font-headline text-xl font-extrabold text-primary">
              Request a fibre installation
            </h3>
            <p className="text-sm text-on-surface-variant mt-0.5">
              Fibre is available in your area. Let&rsquo;s get you connected.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-8 py-6">
          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-600 text-3xl">
                  wifi
                </span>
              </div>
              <h4 className="font-headline text-xl font-extrabold text-primary mb-2">
                Request received!
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
                Our team will review your request and be in touch within 2 business days to schedule your installation.
              </p>
              <button
                onClick={() => { reset(); onClose(); }}
                className="mt-6 px-8 py-3 bg-green-600 text-white font-bold rounded-full text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <Field label="Full name" error={errors.fullName?.message}>
                <input {...register('fullName')} placeholder="Jane Doe" className={inputClass} />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Email" error={errors.email?.message}>
                  <input {...register('email')} type="email" placeholder="jane@example.com" className={inputClass} />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input {...register('phone')} placeholder="+263 77 000 0000" className={inputClass} />
                </Field>
              </div>

              <Field label="Installation address" error={errors.address?.message}>
                <input {...register('address')} placeholder="123 Main Road" className={inputClass} />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Suburb" error={errors.suburb?.message}>
                  <input {...register('suburb')} placeholder="Borrowdale" className={inputClass} />
                </Field>
                <Field label="City" error={errors.city?.message}>
                  <input {...register('city')} placeholder="Harare" className={inputClass} />
                </Field>
              </div>

              <Field label="Service package" error={errors.selectedPackage?.message}>
                <select {...register('selectedPackage')} className={inputClass}>
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.value} value={pkg.value}>
                      {pkg.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Installation notes (optional)" error={errors.installationNotes?.message}>
                <textarea
                  {...register('installationNotes')}
                  rows={3}
                  placeholder="Any special access instructions, gate codes, or notes for our installation team…"
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-green-600 text-white font-extrabold text-sm rounded-full hover:bg-green-700 transition-colors disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting…' : 'Request Installation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetConnectedForm;
