import React from 'react';
import { useLocation } from 'react-router-dom';
import CoverageSection from '../components/coverage/CoverageSection';

const buildings = [
  { name: 'Southview Phase 1A', status: 'Now live, activations in progress', phase: 'Live', color: 'text-green-700' },
  { name: 'Southview Phase 1B', status: 'Rollout in progress', phase: 'In progress', color: 'text-orange-700' },
  { name: 'Southview Phase 1C', status: 'Not yet started', phase: 'Pending', color: 'text-red-700' },
  { name: 'Southview Phase 1D', status: 'Rollout in progress', phase: 'In progress', color: 'text-orange-700' },
  { name: 'Southview Phase 2A', status: 'Not yet started', phase: 'Pending', color: 'text-red-700' },
  { name: 'Southview Phase 2B', status: 'Not yet started', phase: 'Pending', color: 'text-red-700' },
  { name: 'Southview Phase 2C', status: 'Not yet started', phase: 'Pending', color: 'text-red-700' },
];

const Screen5 = () => {
  const location = useLocation();
  const shouldAutoLocate = new URLSearchParams(location.search).get('locate') === '1';

  return (
    <main className="bg-white pb-20">
      <section
        className="relative flex min-h-[560px] items-center overflow-hidden pt-28"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(1,2,48,0.94) 0%, rgba(3,5,104,0.78) 43%, rgba(3,5,104,0.42) 72%, rgba(3,5,104,0.2) 100%), url(https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?auto=format&fit=crop&w=1800&q=85)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,48,0.24)_0%,rgba(1,2,48,0.08)_46%,rgba(1,2,48,0.72)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 hero-readable">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
              Network Status
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Check coverage and deployment status.
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-white md:text-lg">
              Confirm your location, track active rollout areas and see which buildings or suburbs are ready for the next connection step.
            </p>
          </div>
        </div>
      </section>

      <CoverageSection autoLocate={shouldAutoLocate} />

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
                <p className={`font-bold ${item.color}`}>{item.phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen5;
