/**
 * RegisterInterestForm
 * Frontend-only Phase 1 modal form.
 *
 * Phase 2 upgrade path:
 *   - Replace the fake `onSubmit` with `await axios.post('/api/interest', data)`
 *   - The form schema and field structure remain unchanged
 *   - Add loading state to the submit button if needed
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
  interestType: z.string().min(1, 'Please select an interest type'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to be contacted' }),
  }),
});

const INTEREST_TYPES = [
  { value: '', label: 'Select interest type' },
  { value: 'residential', label: 'Home / Residential' },
  { value: 'business', label: 'Business / Commercial' },
  { value: 'estate', label: 'Estate / Complex' },
  { value: 'education', label: 'Educational Institution' },
  { value: 'other', label: 'Other' },
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

const RegisterInterestForm = ({ onClose, prefillAddress = '', prefillSuburb = '', prefillCity = '' }) => {
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

  // Trap focus inside modal & close on Escape
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Phase 1: fake submit — log data and show success state
  const onSubmit = (data) => {
    console.log('[RegisterInterestForm] Phase 1 submit — data not sent:', data);
    // Phase 2: await axios.post('/api/interest', data)
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
            <span className="inline-flex px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-[0.2em] mb-1.5">
              Register Interest
            </span>
            <h3 className="font-headline text-xl font-extrabold text-primary">
              Let us know you&rsquo;re interested
            </h3>
            <p className="text-sm text-on-surface-variant mt-0.5">
              We'll contact you as soon as fibre becomes available in your area.
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
                  check_circle
                </span>
              </div>
              <h4 className="font-headline text-xl font-extrabold text-primary mb-2">
                Interest registered!
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
                We've noted your interest. We'll reach out as soon as rollout begins in your area.
              </p>
              <button
                onClick={() => { reset(); onClose(); }}
                className="mt-6 px-8 py-3 bg-primary-container text-white font-bold rounded-full text-sm"
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

              <Field label="Street address" error={errors.address?.message}>
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

              <Field label="Interest type" error={errors.interestType?.message}>
                <select {...register('interestType')} className={inputClass}>
                  {INTEREST_TYPES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="" error={errors.consent?.message}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register('consent')}
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-primary-container/20 text-primary-container focus:ring-primary-container/30"
                  />
                  <span className="text-sm text-on-surface-variant leading-snug">
                    I agree to be contacted by Fibrehood regarding fibre rollout in my area.
                  </span>
                </label>
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-container text-white font-extrabold text-sm rounded-full hover:bg-black transition-colors disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting…' : 'Register My Interest'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterInterestForm;
