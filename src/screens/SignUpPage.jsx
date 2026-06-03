import React from 'react';

const QRCode = () => {
  const filled = new Set([0, 1, 2, 3, 4, 6, 8, 10, 11, 13, 14, 17, 18, 20, 22, 24, 25, 27, 30, 32, 33, 35, 36, 39, 40, 42, 43, 45, 46, 48, 50, 52, 53, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 73, 75, 78, 80]);

  return (
    <div className="grid h-36 w-36 grid-cols-9 gap-1 rounded-2xl bg-white p-3 shadow-sm" aria-label="QR code placeholder">
      {Array.from({ length: 81 }, (_, i) => (
        <span key={i} className={`rounded-[2px] ${filled.has(i) ? 'bg-primary-container' : 'bg-surface-container'}`} />
      ))}
    </div>
  );
};

const SignUpPage = ({ mode = 'signup' }) => {
  const isPortal = mode === 'portal';

  return (
    <main className="bg-surface-container-low pb-20">
      <section className="relative flex min-h-[520px] items-center overflow-hidden pt-28" style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(1,2,48,0.94) 0%, rgba(3,5,104,0.78) 43%, rgba(3,5,104,0.42) 72%, rgba(3,5,104,0.2) 100%), url(https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1800&q=85)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,48,0.24)_0%,rgba(1,2,48,0.08)_46%,rgba(1,2,48,0.72)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 hero-readable">
          <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
            {isPortal ? 'Client Portal' : 'Sign Up'}
          </span>
          <h1 className="max-w-4xl font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
            {isPortal ? 'Access your Fibrehood account.' : 'Register for Fibrehood service.'}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white md:text-lg">
            {isPortal
              ? 'Sign in to manage your account, service requests and support communication.'
              : 'Send your details to confirm coverage, register interest or begin an activation request.'}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-8 py-20 lg:grid-cols-[1fr_0.72fr]">
        <form className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            {!isPortal && (
              <>
                <label className="block">
                  <span className="text-sm font-bold text-primary-container">Full name</span>
                  <input className="mt-2 w-full rounded-xl border-outline-variant" type="text" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-primary-container">Phone number</span>
                  <input className="mt-2 w-full rounded-xl border-outline-variant" type="tel" />
                </label>
              </>
            )}
            <label className="block">
              <span className="text-sm font-bold text-primary-container">Email address</span>
              <input className="mt-2 w-full rounded-xl border-outline-variant" type="email" />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-primary-container">{isPortal ? 'Password' : 'Suburb / building'}</span>
              <input className="mt-2 w-full rounded-xl border-outline-variant" type={isPortal ? 'password' : 'text'} />
            </label>
            {!isPortal && (
              <label className="block md:col-span-2">
                <span className="text-sm font-bold text-primary-container">Service interest</span>
                <select className="mt-2 w-full rounded-xl border-outline-variant">
                  <option>Residential fibre</option>
                  <option>SME service</option>
                  <option>Business service</option>
                  <option>Southview registration</option>
                </select>
              </label>
            )}
          </div>
          <button type="button" className="mt-8 rounded-full bg-secondary-container px-8 py-4 font-extrabold text-on-secondary-fixed transition hover:bg-yellow-300">
            {isPortal ? 'Sign In' : 'Submit Registration'}
          </button>
        </form>

        <aside className="rounded-3xl bg-primary-container p-8 text-white shadow-sm">
          <h2 className="font-headline text-3xl font-extrabold">Scan QR Code</h2>
          <p className="mt-3 leading-relaxed text-white/70">
            Scan to open the registration flow on your phone, or use the form on this page.
          </p>
          <div className="mt-8 inline-block rounded-3xl bg-white/10 p-4">
            <QRCode />
          </div>
          <p className="mt-8 font-headline text-2xl font-extrabold text-secondary-container">Potential Lives Everywhere</p>
        </aside>
      </section>
    </main>
  );
};

export default SignUpPage;
