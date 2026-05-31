import React from 'react';

const rolloutStats = [
  { value: '3,600+', label: 'Homes in scope' },
  { value: '1Gbps', label: 'Network capacity' },
  { value: 'US$40', label: 'Packages from / month' },
  { value: 'US$100', label: 'Once-off activation' },
];

const phases = [
  { name: 'Phase 1', status: 'Rollout in progress' },
  { name: 'Phase 2', status: 'Current phase' },
  { name: 'Phase 3', status: 'Demand confirmation' },
  { name: 'Phase 4', status: 'Planned expansion' },
];

const Screen4 = () => {
  return (
    <main className="bg-white pb-20">
      <section
        className="relative flex min-h-[680px] items-center overflow-hidden pt-28"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(1,15,61,0.94), rgba(3,5,104,0.78), rgba(3,5,104,0.3)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
              Southview Project
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
              A smart connected suburb for Southview.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/82">
              Fibrehood is working with the community to bring education, entertainment, security and reliable digital access into one connected neighbourhood.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-8 sm:grid-cols-2 lg:grid-cols-4">
          {rolloutStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="font-headline text-4xl font-extrabold text-primary-container">{stat.value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary">Rollout</span>
            <h2 className="mt-3 font-headline text-4xl font-extrabold text-primary-container">
              Phase 1 to 4 deployment is underway.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
              Advance payments help confirm demand and prioritise activations. Fibrehood has partnered with CABS Custodial Services to hold funds in trust and safeguard resident payments.
            </p>
            <button className="mt-8 rounded-full bg-secondary-container px-8 py-4 font-extrabold text-on-secondary-fixed transition hover:bg-yellow-300">
              Register Interest
            </button>
          </div>

          <div className="rounded-3xl border border-outline-variant/30 bg-white p-5 shadow-sm">
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#eef1f9]">
              <div className="absolute inset-8 rounded-[2rem] border-2 border-primary-container/20" />
              <div className="absolute left-[12%] top-[18%] h-[32%] w-[38%] rounded-2xl bg-secondary-container/80 p-5 text-primary-container shadow-sm">
                <p className="font-headline text-xl font-extrabold">Zone A</p>
                <p className="mt-2 text-sm font-bold">Phase 1</p>
              </div>
              <div className="absolute right-[14%] top-[24%] h-[36%] w-[30%] rounded-2xl bg-primary-container p-5 text-white shadow-sm">
                <p className="font-headline text-xl font-extrabold">Zone B</p>
                <p className="mt-2 text-sm font-bold text-secondary-container">Phase 2</p>
              </div>
              <div className="absolute bottom-[14%] left-[20%] h-[24%] w-[30%] rounded-2xl bg-white p-5 text-primary-container shadow-sm">
                <p className="font-headline text-xl font-extrabold">Zone C</p>
                <p className="mt-2 text-sm font-bold">Phase 3</p>
              </div>
              <div className="absolute bottom-[12%] right-[12%] h-[22%] w-[30%] rounded-2xl bg-white p-5 text-primary-container shadow-sm">
                <p className="font-headline text-xl font-extrabold">Zone D</p>
                <p className="mt-2 text-sm font-bold">Phase 4</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-container py-20 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary-container">Daily statistics</span>
            <h2 className="mt-3 font-headline text-4xl font-extrabold">Activation dashboard</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { value: '1,000+', label: 'Home passes' },
              { value: '0', label: 'Homes connected' },
              { value: '2', label: 'Current phase' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/8 p-8">
                <p className="font-headline text-5xl font-extrabold text-secondary-container">{stat.value}</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-widest text-white/62">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {phases.map((phase) => (
              <div key={phase.name} className="rounded-2xl bg-white/8 p-5">
                <p className="font-headline text-xl font-extrabold">{phase.name}</p>
                <p className="mt-2 text-sm font-semibold text-white/65">{phase.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen4;
