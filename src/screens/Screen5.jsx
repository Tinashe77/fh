import React from 'react';
import CoverageSection from '../components/coverage/CoverageSection';

const buildings = [
  { name: 'Southview Park', status: 'Rollout in progress', phase: 'Phase 2' },
  { name: 'Residential Suburbs', status: 'Demand registration open', phase: 'Planning' },
  { name: 'Multi-Dwelling Units', status: 'Site survey required', phase: 'Assessment' },
  { name: 'Commercial Properties', status: 'Tailored feasibility check', phase: 'Assessment' },
];

const Screen5 = () => {
  return (
    <main className="bg-white pb-20">
      <section
        className="relative flex min-h-[560px] items-center overflow-hidden pt-28"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(1,15,61,0.93), rgba(3,5,104,0.72), rgba(3,5,104,0.25)), url(https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?auto=format&fit=crop&w=1800&q=85)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
              Network Status
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Check coverage and deployment status.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/82">
              Confirm your location, track active rollout areas and see which buildings or suburbs are ready for the next connection step.
            </p>
          </div>
        </div>
      </section>

      <CoverageSection />

      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary">Live Status</span>
              <h2 className="mt-3 font-headline text-4xl font-extrabold text-primary-container">
                Building and suburb readiness
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-green-700 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              Core network operational
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-primary-container px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white/70">
              <span>Area</span>
              <span>Status</span>
              <span>Phase</span>
            </div>
            {buildings.map((item) => (
              <div key={item.name} className="grid grid-cols-1 gap-2 border-t border-outline-variant/20 px-6 py-5 md:grid-cols-3">
                <p className="font-headline text-lg font-extrabold text-primary-container">{item.name}</p>
                <p className="font-medium text-on-surface-variant">{item.status}</p>
                <p className="font-bold text-secondary">{item.phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen5;
