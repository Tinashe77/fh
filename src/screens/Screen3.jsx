import React from 'react';

const residentialPlans = [
  {
    name: 'Essential Home',
    speed: '25 Mbps',
    price: 'US$40',
    description: 'Reliable fibre for everyday browsing, streaming, school work and messaging.',
  },
  {
    name: 'Family Home',
    speed: '50 Mbps',
    price: 'US$60',
    description: 'Built for busy households with multiple devices, HD streaming and remote work.',
    featured: true,
  },
  {
    name: 'Power Home',
    speed: '100 Mbps+',
    price: 'Custom',
    description: 'High-capacity fibre for gaming, 4K entertainment and smart home devices.',
  },
];

const smePlans = [
  'Symmetric speeds for cloud tools and video meetings',
  'Priority support for business-critical connectivity',
  'Static IP options available on request',
  'Scalable packages for teams and small offices',
];

const Screen3 = () => {
  return (
    <main className="bg-white pb-20">
      <section
        className="relative flex min-h-[620px] items-center overflow-hidden pt-28"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(1,15,61,0.92), rgba(3,5,104,0.7), rgba(3,5,104,0.28)), url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=85)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
              Service Plans
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Fibre packages for homes and businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/82">
              Choose residential, SME or tailored business connectivity with clear speed tiers, local support and installation guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary">Residential</span>
            <h2 className="mt-3 font-headline text-4xl font-extrabold text-primary-container">
              Home service plans
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
              These starter tiers follow the package direction in the website notes. Final package names and flyer pricing can be swapped in when the service flyers are ready.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {residentialPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-2xl border p-8 shadow-sm ${
                  plan.featured
                    ? 'border-secondary-container bg-primary-container text-white'
                    : 'border-outline-variant/30 bg-white text-on-surface'
                }`}
              >
                {plan.featured && (
                  <span className="mb-6 inline-flex rounded-full bg-secondary-container px-3 py-1 text-xs font-black uppercase tracking-widest text-on-secondary-fixed">
                    Popular
                  </span>
                )}
                <h3 className="font-headline text-2xl font-extrabold">{plan.name}</h3>
                <p className={`mt-3 ${plan.featured ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {plan.description}
                </p>
                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest ${plan.featured ? 'text-white/55' : 'text-outline'}`}>
                      Speed
                    </p>
                    <p className="font-headline text-3xl font-extrabold">{plan.speed}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-bold uppercase tracking-widest ${plan.featured ? 'text-white/55' : 'text-outline'}`}>
                      From
                    </p>
                    <p className="font-headline text-3xl font-extrabold">{plan.price}</p>
                  </div>
                </div>
                <button
                  className={`mt-8 w-full rounded-full px-6 py-4 font-extrabold transition ${
                    plan.featured
                      ? 'bg-secondary-container text-on-secondary-fixed hover:bg-yellow-300'
                      : 'bg-primary-container text-white hover:bg-black'
                  }`}
                >
                  Sign Up
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary">SME & Business</span>
            <h2 className="mt-3 font-headline text-4xl font-extrabold text-primary-container">
              Business-ready connectivity
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
              SME plans are packaged for growing teams. Larger business connections are tailored after a site and usage assessment.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {smePlans.map((item) => (
              <div key={item} className="rounded-2xl border border-outline-variant/30 bg-white p-6 shadow-sm">
                <span className="material-symbols-outlined mb-4 text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <p className="font-semibold leading-relaxed text-primary-container">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8">
        <div className="flex flex-col gap-8 rounded-3xl bg-primary-container p-10 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-headline text-3xl font-extrabold">Need a tailored business service?</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Tell us about the site, users and uptime requirements and our team will shape the right package.
            </p>
          </div>
          <button className="rounded-full border border-secondary-container bg-secondary-container px-8 py-4 font-extrabold text-on-secondary-fixed transition hover:bg-yellow-300">
            Contact Sales
          </button>
        </div>
      </section>
    </main>
  );
};

export default Screen3;
