import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';

// ── Data ─────────────────────────────────────────────────────────────────────


const whyPoints = [
  'The lack of internet access traps people in cycles of poverty and limits opportunities.',
  "Internet is not just about education or entertainment, it's also about economic empowerment.",
  'With internet access, new avenues for income and growth emerge benefiting both individuals and the broader economy.',
  'Limited or no internet access drastically reduces the opportunity to showcase talent and achieve true potential.',
];

const valuePropCards = [
  {
    icon: 'handyman',
    title: 'No-cost installation',
    text: 'Fibre is installed at no COST',
    iconBg: 'bg-primary-container',
    iconColor: 'text-white',
  },
  {
    icon: 'hub',
    title: 'Unlimited Fibre Packages',
    text: 'Residents can choose a package suitable to their connectivity needs.',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-primary-container',
    highlight: true,
  },
  {
    icon: 'bolt',
    title: 'Fast Fibre Internet',
    text: 'Enjoy low latency and faster speeds for work and play.',
    iconBg: 'bg-primary-container',
    iconColor: 'text-white',
  },
  {
    icon: 'trending_up',
    title: 'Boost property value',
    text: "Fibre connectivity increases your property's appeal to buyers and tenants.",
    iconBg: 'bg-primary-container',
    iconColor: 'text-white',
  },
  {
    icon: 'security',
    title: 'Future-proof technology',
    text: 'Fibre networks are built to support the growing demands of the digital era, ensuring long-term value.',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-primary-container',
    highlight: true,
  },
  {
    icon: 'thumb_up',
    title: 'Reliable and stable connection',
    text: 'Our fibre network is engineered to provide stable, consistent connectivity for everyday home and business use.',
    iconBg: 'bg-primary-container',
    iconColor: 'text-white',
  },
];

const connectivityPartners = [
  { name: 'TelOne', tagline: 'The Future Is Better Together' },
  { name: 'DFA', tagline: 'Open Access Network' },
  { name: 'Powertel', tagline: 'Communications' },
  { name: 'BCS', tagline: 'Bandwidth & Cloud Services Group' },
  { name: 'Think Believe Connect', tagline: 'Connectivity Partner' },
  { name: 'Liquid', tagline: 'Intelligent Technologies' },
];

const propertyDevelopers = [
  { name: 'N3 Properties', tagline: '' },
];

const homeCoverageAreas = [
  { area: 'Southview Park', building: 'Phase 1A', status: 'LIVE', detail: 'Fibre is live and activations are in progress in this zone.' },
  { area: 'Southview Park', building: 'Phase 1B', status: 'BUILDING', detail: 'Rollout is underway. Register interest so the team can confirm activation timing.' },
  { area: 'Southview Park', building: 'Phase 1D', status: 'BUILDING', detail: 'Rollout is underway. Register interest so the team can confirm activation timing.' },
  { area: 'Southview Park', building: 'Phase 1C', status: 'PLANNED', detail: 'This zone is planned. Register your interest to help Fibrehood plan demand.' },
  { area: 'Southview Park', building: 'Phase 2A', status: 'PLANNED', detail: 'This zone is planned. Register your interest to help Fibrehood plan demand.' },
  { area: 'Southview Park', building: 'Phase 2B', status: 'PLANNED', detail: 'This zone is planned. Register your interest to help Fibrehood plan demand.' },
  { area: 'Southview Park', building: 'Phase 2C', status: 'PLANNED', detail: 'This zone is planned. Register your interest to help Fibrehood plan demand.' },
  { area: 'Avenues Area Network', building: 'MDU / Apartment', status: 'LIVE', detail: 'Fibre is live for supported buildings in the Avenues area.' },
  { area: '2257 Lifestyle Estate', building: 'Estate', status: 'LIVE', detail: 'Fibre is available for supported homes in this estate.' },
  { area: 'Southlea', building: 'Suburb', status: 'PLANNED', detail: 'This area is in future rollout planning.' },
  { area: 'Braeside', building: 'Suburb', status: 'PLANNED', detail: 'This area is in future rollout planning.' },
];

const coverageStatusContent = {
  LIVE: {
    label: 'LIVE',
    title: 'Fibre available now',
    icon: 'wifi',
    tone: 'border-green-500 bg-green-50 text-green-800',
    dot: 'bg-green-500',
    cta: 'Sign Up',
    action: '/sign-up',
  },
  BUILDING: {
    label: 'BUILDING',
    title: 'Network deployment underway',
    icon: 'construction',
    tone: 'border-orange-500 bg-orange-50 text-orange-800',
    dot: 'bg-orange-500',
    cta: 'Register Interest',
    action: '/coverage?locate=1',
  },
  PLANNED: {
    label: 'PLANNED',
    title: 'Register your interest',
    icon: 'event_available',
    tone: 'border-red-500 bg-red-50 text-red-800',
    dot: 'bg-red-500',
    cta: 'Register Interest',
    action: '/coverage?locate=1',
  },
};

const howItWorksSteps = [
  { title: 'Check Coverage', text: 'Confirm availability for your area, building or Southview phase.', icon: 'location_on' },
  { title: 'Choose Your Plan', text: 'Pick the fibre package that fits your home or business.', icon: 'speed' },
  { title: 'Sign Up', text: 'Share your details and complete the simple registration steps.', icon: 'edit_note' },
  { title: 'Get Connected', text: 'Fibrehood schedules installation and activates your service.', icon: 'router' },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Screen1 = () => {
  const navigate = useNavigate();
  const [coverageForm, setCoverageForm] = useState({
    area: 'Southview Park',
    building: 'Phase 1A',
    unit: '',
  });
  const [homeCoverageResult, setHomeCoverageResult] = useState(homeCoverageAreas[0]);

  const handleHeroCheck = () => {
    navigate('/coverage');
  };

  const handleServicePlans = () => {
    navigate('/fibre-plans');
  };

  const updateCoverageField = (field, value) => {
    setCoverageForm((current) => {
      const next = { ...current, [field]: value };
      if (field === 'area') {
        const firstMatch = homeCoverageAreas.find((item) => item.area === value);
        next.building = firstMatch?.building || '';
      }
      return next;
    });
  };

  const handleHomeCoverageCheck = (event) => {
    event.preventDefault();

    const normalizedBuilding = coverageForm.building.trim().toLowerCase();
    const areaMatches = homeCoverageAreas.filter((item) => item.area === coverageForm.area);
    const exactMatch = areaMatches.find((item) => item.building.toLowerCase() === normalizedBuilding);
    const partialMatch = areaMatches.find((item) => normalizedBuilding && normalizedBuilding.includes(item.building.toLowerCase()));
    const fallback = areaMatches[0] || homeCoverageAreas.find((item) => item.status === 'PLANNED');

    setHomeCoverageResult(exactMatch || partialMatch || fallback);
  };

  const selectedAreaOptions = homeCoverageAreas.filter((item) => item.area === coverageForm.area);
  const selectedStatus = coverageStatusContent[homeCoverageResult.status];

  return (
    <main className="overflow-hidden bg-surface text-primary-container">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(1,2,48,0.96) 0%, rgba(3,5,104,0.82) 40%, rgba(3,5,104,0.48) 67%, rgba(3,5,104,0.28) 100%), url(/assets/fibrehood-southview.jpeg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,48,0.22)_0%,rgba(1,2,48,0.08)_46%,rgba(1,2,48,0.72)_100%)]" />
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-between gap-14 px-6 py-14 sm:px-8 lg:min-h-[720px] lg:py-16">
          <div className="absolute right-8 top-10 hidden items-center gap-2.5 rounded-full border border-white/20 bg-white/14 px-5 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white">Network Live</span>
          </div>

          <div className="max-w-2xl space-y-7 lg:pt-8">
            {/* Headline */}
            <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-[3.75rem] xl:text-7xl">
              Fast, Unlimited Fibre Internet for{' '}
              <span className="relative inline-block text-secondary-container">
                your home.
                <span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded-full bg-secondary-container/25" />
              </span>
            </h1>

            <p className="max-w-xl text-lg font-medium leading-relaxed text-white">
              Starting from <span className="font-extrabold text-secondary-container">US$40/month</span> with free installation and a once-off activation fee applicable.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <button onClick={handleHeroCheck} className="inline-flex items-center gap-2 px-9 py-4 bg-secondary-container text-primary-container font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-200 glow-yellow" style={{ boxShadow: '0 8px 32px rgba(253,204,0,0.3)' }}>
                <span className="material-symbols-outlined text-base">pin_drop</span>
                Check Coverage
              </button>
              <button onClick={handleServicePlans} className="group px-9 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-200" style={{ border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.12)', color: '#ffffff', backdropFilter: 'blur(12px)' }}>
                View Plans
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-200">
                  arrow_forward
                </span>
              </button>
            </div>

          </div>

          <div className="grid w-full gap-4 self-end md:max-w-[49rem] md:grid-cols-3">
            {[
              { value: '12+', label: 'Connected Communities', icon: 'workspace_premium' },
              { value: '2,500+', label: 'Homes Passed and Growing', icon: 'home_work' },
              { value: 'Gold Winner', label: 'Recognized for Excellence in Connectivity', icon: 'emoji_events' },
            ].map((item) => (
              <div key={item.label} className="flex min-h-[104px] items-center gap-4 rounded-2xl border border-white/16 bg-white/10 px-5 py-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <span className="material-symbols-outlined shrink-0 text-3xl text-secondary-container">{item.icon}</span>
                <div className="min-w-0">
                  <p className="font-headline text-2xl font-extrabold leading-tight text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-white/78">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOME COVERAGE CHECKER ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <AnimateOnScroll direction="up" delay={0}>
              <div className="h-full rounded-[2rem] border border-primary-container/10 bg-[linear-gradient(145deg,#ffffff_0%,#f7f8fc_100%)] p-6 shadow-[0_24px_70px_rgba(3,5,104,0.10)] md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-primary-container px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-white">
                      Coverage Checker
                    </span>
                    <h2 className="mt-5 max-w-2xl font-headline text-3xl font-extrabold leading-tight text-primary-container md:text-4xl">
                      Is Fibrehood available at your address?
                    </h2>
                    <p className="mt-3 max-w-xl text-base font-semibold leading-7 text-primary-container/78">
                      Check your suburb, building or Southview phase before choosing a plan.
                    </p>
                  </div>
                  <Link to="/coverage" className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-primary-container hover:text-secondary-container">
                    Full network map
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>

                <form onSubmit={handleHomeCoverageCheck} className="mt-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <label className="block">
                      <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-primary-container/65">Suburb / Area</span>
                      <select
                        value={coverageForm.area}
                        onChange={(event) => updateCoverageField('area', event.target.value)}
                        className="h-14 w-full rounded-xl border border-primary-container/10 bg-white px-4 text-sm font-bold text-primary-container shadow-[0_10px_24px_rgba(3,5,104,0.05)] focus:border-primary-container focus:ring-primary-container/20"
                      >
                        {[...new Set(homeCoverageAreas.map((item) => item.area))].map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-primary-container/65">Building / Phase</span>
                      <select
                        value={coverageForm.building}
                        onChange={(event) => updateCoverageField('building', event.target.value)}
                        className="h-14 w-full rounded-xl border border-primary-container/10 bg-white px-4 text-sm font-bold text-primary-container shadow-[0_10px_24px_rgba(3,5,104,0.05)] focus:border-primary-container focus:ring-primary-container/20"
                      >
                        {selectedAreaOptions.map((item) => (
                          <option key={`${item.area}-${item.building}`} value={item.building}>{item.building}</option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-primary-container/65">Unit / Stand</span>
                      <input
                        value={coverageForm.unit}
                        onChange={(event) => updateCoverageField('unit', event.target.value)}
                        placeholder="Optional"
                        className="h-14 w-full rounded-xl border border-primary-container/10 bg-white px-4 text-sm font-bold text-primary-container shadow-[0_10px_24px_rgba(3,5,104,0.05)] placeholder:text-primary-container/50 focus:border-primary-container focus:ring-primary-container/20"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container px-8 py-4 font-extrabold text-primary-container shadow-[0_16px_34px_rgba(253,204,0,0.28)] transition-all duration-200 hover:scale-[1.02] active:scale-95">
                      Check Coverage
                      <span className="material-symbols-outlined text-base">search</span>
                    </button>
                    <button type="button" onClick={() => navigate('/coverage?locate=1')} className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-container/15 bg-white px-8 py-4 font-extrabold text-primary-container transition-all duration-200 hover:border-primary-container/35">
                      Use My Location
                      <span className="material-symbols-outlined text-base">my_location</span>
                    </button>
                  </div>
                </form>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={100}>
              <div className={`flex h-full flex-col justify-between rounded-[2rem] border p-6 shadow-[0_24px_70px_rgba(3,5,104,0.08)] md:p-8 ${selectedStatus.tone}`}>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full ${selectedStatus.dot}`} />
                      <span className="text-xs font-black uppercase tracking-[0.24em]">{selectedStatus.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-4xl">{selectedStatus.icon}</span>
                  </div>

                  <h3 className="mt-8 font-headline text-3xl font-extrabold leading-tight md:text-4xl">
                    {selectedStatus.title}
                  </h3>
                  <p className="mt-4 text-base font-semibold leading-7">
                    {homeCoverageResult.detail}
                  </p>

                  <div className="mt-6 rounded-2xl bg-white/70 p-4 text-primary-container">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-container/55">Checked location</p>
                    <p className="mt-2 font-headline text-xl font-extrabold">{homeCoverageResult.area}</p>
                    <p className="mt-1 text-sm font-semibold text-primary-container/70">
                      {homeCoverageResult.building}{coverageForm.unit ? ` · Unit ${coverageForm.unit}` : ''}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate(selectedStatus.action)}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-container px-8 py-4 font-extrabold text-white shadow-[0_16px_34px_rgba(3,5,104,0.20)] transition-all duration-200 hover:scale-[1.02] active:scale-95"
                >
                  {selectedStatus.cta}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="bg-surface-container-low py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-secondary-container">How it works</span>
              <h2 className="mt-3 font-headline text-3xl font-extrabold text-primary-container md:text-4xl">
                Four simple steps to get connected.
              </h2>
            </div>
            <p className="max-w-md text-sm font-semibold leading-7 text-primary-container/78">
              From coverage check to activation, the process is designed to be clear and simple.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <AnimateOnScroll key={step.title} direction="up" delay={index * 70} className="h-full">
                <div className="relative flex h-full min-h-[190px] flex-col rounded-2xl border border-primary-container/10 bg-white p-5 shadow-[0_14px_34px_rgba(3,5,104,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container text-secondary-container">
                      <span className="material-symbols-outlined">{step.icon}</span>
                    </span>
                    <span className="font-headline text-3xl font-extrabold text-primary-container/14">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-7 font-headline text-xl font-extrabold text-primary-container">{step.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-primary-container/78">{step.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE SNAPSHOT ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-primary-container/10 bg-surface-container-low shadow-[0_28px_80px_rgba(3,5,104,0.12)]">
            <div className="grid gap-px bg-primary-container/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: 'Unlimited', kicker: 'Fibre internet', label: 'Internet', icon: 'all_inclusive' },
                { value: 'US$40', kicker: 'Starting from', label: 'Per month', icon: 'payments' },
                { value: 'FREE*', kicker: 'Available locations', label: 'Installation', note: '*Applicable in available live Fibrehood locations only.', icon: 'handyman' },
                { value: 'US$65', kicker: 'Starting from...', label: 'Activation fee', icon: 'bolt' },
              ].map((item) => (
                <div
                  key={item.value}
                  className="flex min-h-[176px] flex-col justify-between bg-white px-7 py-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="material-symbols-outlined text-3xl text-secondary-container">{item.icon}</span>
                    <span className="text-right text-xs font-black uppercase tracking-[0.16em] text-primary-container/45">{item.kicker}</span>
                  </div>

                  <div>
                    <p className="font-headline text-4xl font-extrabold leading-none text-primary-container lg:text-[3.05rem]">
                      {item.value}
                    </p>
                    <p className="mt-4 text-xs font-black uppercase leading-5 tracking-[0.24em] text-primary-container/78">
                      {item.label}
                    </p>
                    {item.note && (
                      <p className="mt-2 max-w-[15rem] text-xs font-semibold leading-5 text-primary-container/78">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-container px-5 py-6 sm:px-8">
              <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
                {[
                  { value: '12+', label: 'Connected Communities', icon: 'workspace_premium' },
                  { value: '2,500+', label: 'Homes Passed and Growing', icon: 'home_work' },
                  { value: 'Gold Winner', label: 'Recognized for Excellence in Connectivity', icon: 'emoji_events' },
                ].map((item) => (
                  <div key={item.label} className="flex min-h-[96px] items-center justify-center rounded-2xl border border-white/20 bg-white/8 px-6 py-4 text-white">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined shrink-0 text-3xl text-secondary-container">{item.icon}</span>
                      <div>
                        <p className="font-headline text-2xl font-extrabold leading-tight text-secondary-container">{item.value}</p>
                        <p className="mt-1 text-sm font-semibold leading-5 text-white">{item.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-low px-5 py-6 sm:px-8">
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { text: 'Fast rollout for underserved communities', icon: 'rocket_launch' },
                  { text: 'Reliable infrastructure built for long-term growth', icon: 'hub', accent: true },
                  { text: 'Education, remote work and digital business', icon: 'school' },
                  { text: 'Reliable & stable connection', icon: 'verified' },
                  { text: 'No-cost installation', icon: 'handyman' },
                  { text: 'Open access network', icon: 'lan' },
                  { text: 'Blazing fast speeds', icon: 'bolt' },
                  { text: 'Boost property value', icon: 'trending_up' },
                  { text: 'Future-proof technology', icon: 'security' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`flex min-h-[58px] items-center gap-3 rounded-2xl border bg-white px-4 py-3 ${item.accent ? 'border-secondary-container text-primary-container shadow-[0_12px_28px_rgba(253,204,0,0.12)]' : 'border-primary-container/10 text-primary-container'}`}
                  >
                    <span className={`material-symbols-outlined shrink-0 text-xl ${item.accent ? 'text-secondary-container' : 'text-primary-container'}`}>{item.icon}</span>
                    <span className="text-xs font-black uppercase leading-5 tracking-[0.12em]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT US — WHY WE COME TO WORK ────────────────────── */}
      <section id="about" className="relative overflow-hidden bg-white py-24 scroll-mt-24">
        <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full border-[28px] border-secondary-container/10" />
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-primary-container/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-[1220px] px-6 sm:px-8">
          <AnimateOnScroll direction="up" delay={0}>
            <div className="mb-10">
              <h2 className="font-headline text-5xl font-extrabold uppercase leading-none tracking-tight text-primary-container lg:text-[3.9rem]">
                About Us
              </h2>
              <div className="mt-5 h-3 w-44 rounded-full bg-secondary-container" />
            </div>
          </AnimateOnScroll>

          <div className="grid gap-10 lg:grid-cols-[460px_minmax(0,1fr)] lg:items-stretch xl:grid-cols-[500px_minmax(0,1fr)]">
            <AnimateOnScroll direction="left" delay={60} className="h-full">
              <div className="relative h-full min-h-[560px] rounded-[2rem] bg-white p-3 shadow-[0_28px_70px_rgba(3,5,104,0.14)] ring-8 ring-secondary-container/16">
                <img
                  src="/assets/about-fibregood-home.jpg"
                  alt="Children in a connected community"
                  className="h-full w-full rounded-[1.45rem] object-cover"
                />
              </div>
            </AnimateOnScroll>

            <div className="flex h-full min-w-0 flex-col">
              <AnimateOnScroll direction="up" delay={100}>
                <div>
                  <h3 className="font-headline text-4xl font-extrabold leading-[1.02] tracking-tight text-primary-container lg:text-[3.15rem]">
                    Why we come to <br />
                    <span className="text-secondary-container">work everyday?</span>
                  </h3>
                  <p className="mt-5 font-headline text-xl font-extrabold text-primary-container">
                    Bridging the Connectivity Gap
                  </p>
                  <p className="mt-5 max-w-3xl border-l-4 border-secondary-container pl-6 text-base font-semibold leading-7 text-primary-container/82">
                    Fibrehood is building affordable, high-quality fibre infrastructure in communities that have historically had limited access to reliable fixed broadband. We believe better connectivity creates opportunities for households, businesses, education and local economic growth.
                  </p>
                </div>
              </AnimateOnScroll>

              <div className="mt-7 grid flex-1 auto-rows-fr gap-4 md:grid-cols-2">
                {whyPoints.map((point, i) => {
                  const isYellow = i % 2 === 1;
                  return (
                    <AnimateOnScroll key={point} direction="up" delay={180 + i * 70} className="h-full">
                      <div className={`relative flex h-full min-h-[142px] flex-col rounded-2xl border p-5 shadow-[0_14px_34px_rgba(3,5,104,0.07)] ${isYellow ? 'border-secondary-container/45 bg-secondary-container/[0.08]' : 'border-primary-container/10 bg-white'}`}>
                        <div className="flex items-start justify-between gap-4">
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${isYellow ? 'bg-secondary-container text-primary-container' : 'bg-primary-container text-white'}`}>
                            <span className="material-symbols-outlined text-xl">
                              {['signal_cellular_alt', 'school', 'trending_up', 'bolt'][i]}
                            </span>
                          </span>
                          <span className="font-headline text-3xl font-extrabold leading-none text-primary-container/20">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="mt-auto pt-5 text-sm font-semibold leading-6 text-primary-container/80">
                          {point}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
          </div>

          <AnimateOnScroll direction="up" delay={180}>
            <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-primary-container px-8 py-10 text-center shadow-[0_28px_70px_rgba(3,5,104,0.28)] md:px-16">
              <div
                className="pointer-events-none absolute -left-12 bottom-0 h-44 w-44 opacity-30"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(253,204,0,0.5) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
              />
              <div
                className="pointer-events-none absolute -right-12 bottom-0 h-44 w-44 opacity-30"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(253,204,0,0.5) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
              />
              <div className="relative">
                <h3 className="font-headline text-sm font-black uppercase tracking-[0.45em] text-secondary-container">
                  Our Dream.
                </h3>
                <p className="mx-auto mt-5 max-w-4xl font-headline text-2xl font-extrabold leading-tight text-white md:text-4xl">
                  Our dream is simply to connect marginalized communities to an{' '}
                  <span className="text-secondary-container">affordable, accessible &amp; high quality internet.</span>
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── OUR VALUE PROPOSITION ─────────────────────────────── */}
      <section
        id="value"
        className="relative py-24 overflow-hidden scroll-mt-24"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f3f4f5 100%)' }}
      >
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

          {/* ── Section header ── */}
          <div className="relative mb-14 text-center">
            <div className="relative">
              <AnimateOnScroll direction="up" delay={0}>
                <span className="inline-flex rounded-full bg-secondary-container px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary-container shadow-[0_10px_24px_rgba(253,204,0,0.22)]">
                  Value
                </span>
              </AnimateOnScroll>
              <AnimateOnScroll direction="up" delay={100}>
                <h2 className="mt-5 font-headline text-5xl font-extrabold leading-tight tracking-tight text-primary-container lg:text-6xl">
                  Our Value Proposition
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll direction="up" delay={200}>
                <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-8 text-primary-container/78">
                  Choosing Fibrehood for your property brings a host of advantages that go beyond just faster internet.
                </p>
              </AnimateOnScroll>
            </div>
          </div>

          {/* ── Cards grid ── */}
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valuePropCards.map((card, i) => {
              const isHighlight = card.highlight;
              return (
                <AnimateOnScroll key={card.title} direction="up" delay={i * 80} threshold={0.07}>
                  <div
                    className="group relative flex min-h-[190px] h-full flex-col overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: isHighlight
                        ? 'linear-gradient(145deg, #fff8d8 0%, #ffffff 100%)'
                        : '#ffffff',
                      border: isHighlight
                        ? '1px solid rgba(253,204,0,0.55)'
                        : '1px solid rgba(3,5,104,0.10)',
                      boxShadow: isHighlight
                        ? '0 18px 45px rgba(253,204,0,0.16)'
                        : '0 12px 34px rgba(3,5,104,0.08)',
                    }}
                  >
                    {/* ── Watermark number ── */}
                    <div className="pointer-events-none absolute bottom-3 right-5 select-none">
                      <span className="font-headline text-[4rem] font-extrabold leading-none" style={{ color: isHighlight ? 'rgba(253,204,0,0.28)' : 'rgba(3,5,104,0.10)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="relative flex h-full flex-col p-6">
                      {/* ── Icon ── */}
                      <div
                        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: isHighlight
                            ? '#fdcc00'
                            : '#030568',
                          border: isHighlight
                            ? '1px solid rgba(253,204,0,0.35)'
                            : '1px solid rgba(3,5,104,0.12)',
                          boxShadow: isHighlight
                            ? '0 4px 20px rgba(253,204,0,0.2)'
                            : '0 4px 16px rgba(3,5,104,0.16)',
                        }}
                      >
                        <span
                          className="material-symbols-outlined text-2xl"
                          style={{ color: isHighlight ? '#231a00' : '#ffffff' }}
                        >
                          {card.icon}
                        </span>
                      </div>

                      {/* ── Title ── */}
                      <h3
                        className="mb-3 font-headline text-xl font-extrabold leading-snug"
                        style={{ color: '#030568' }}
                      >
                        {card.title}
                      </h3>

                      {/* ── Underline ── */}
                      <div
                        className="mb-5 h-[2px] rounded-full transition-all duration-500 group-hover:w-14"
                        style={{
                          width: '1.75rem',
                          background: 'rgba(253,204,0,0.9)',
                        }}
                      />

                      {/* ── Body text ── */}
                      <p className="relative z-10 mt-auto max-w-[15.5rem] text-sm leading-6 text-primary-container/78">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── OUR PARTNERS ──────────────────────────────────────── */}
      <section id="partners" className="py-28 overflow-hidden scroll-mt-24" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f3f4f5 50%, #ffffff 100%)' }}>
        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <AnimateOnScroll direction="up" delay={0}>
              <span className="inline-flex mb-6 px-4 py-2 rounded-full bg-primary-container/10 text-primary-container text-xs font-black uppercase tracking-[0.3em] border border-primary-container/15">
                OUR PARTNERS
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={100}>
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-primary-container tracking-tight max-w-3xl mx-auto leading-tight">
                We believe in collaborations to add value to our community
              </h2>
            </AnimateOnScroll>
          </div>

          {/* ── 3-column grid ── */}
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">

            {/* ── Column 1: Connectivity Partners ── */}
            <AnimateOnScroll direction="up" delay={0} className="flex">
              <div
                className="relative flex flex-col w-full overflow-hidden rounded-[2rem] border border-primary-container/10 bg-white shadow-glass-heavy"
              >
                <div className="bg-primary-container p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-secondary-container/30 bg-white/10">
                    <span className="material-symbols-outlined text-secondary-container text-2xl">cell_tower</span>
                  </div>
                  <h3 className="font-headline text-2xl font-extrabold text-white mb-3 leading-snug">
                    Connectivity Partners
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We work with multiple Fibre Network Operators to bring fast, affordable and reliable broadband to communities.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-7">
                  {connectivityPartners.map((p) => (
                    <div key={p.name} className="rounded-2xl border border-primary-container/10 bg-white p-4 shadow-sm">
                      <p className="font-headline text-base font-extrabold text-primary-container">{p.name}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-primary-container/65">{p.tagline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* ── Column 2: Property Developers (Gold gradient) ── */}
            <AnimateOnScroll direction="up" delay={130} className="flex">
              <div
                className="relative flex flex-col w-full overflow-hidden rounded-[2.5rem] shadow-glass-heavy"
                style={{ background: 'linear-gradient(150deg, #c98a00 0%, #e6a800 30%, #fdcc00 65%, #fbbf24 100%)' }}
              >
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[50px]" style={{ background: 'rgba(255,255,255,0.35)' }} />
                <div className="pointer-events-none absolute -bottom-8 -left-8 w-36 h-36 rounded-full blur-[45px]" style={{ background: 'rgba(3,5,104,0.12)' }} />
                {/* Diagonal stripe texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 0px, #000 1px, transparent 1px, transparent 12px)' }}
                />

                <div className="relative p-9 flex-1">
                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 bg-primary-container/20 border border-primary-container/20">
                    <span className="material-symbols-outlined text-primary-container text-2xl">apartment</span>
                  </div>

                  <h3 className="font-headline text-2xl font-extrabold text-white mb-4 leading-snug rounded-2xl bg-primary-container px-5 py-4">
                    Property Developers
                  </h3>
                  <p className="text-primary-container/75 text-sm leading-relaxed mb-8">
                    We work with Property Developers to ensure their properties incorporate this critical utility service at design stage and that they benefit from the monetization of additional revenue streams
                  </p>

                  {/* Developer chips */}
                  <div className="flex flex-wrap gap-3">
                    {propertyDevelopers.map((dev) => (
                      <div
                        key={dev.name}
                        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-primary-container/20"
                        style={{ background: 'rgba(3,5,104,0.1)', backdropFilter: 'blur(8px)' }}
                      >
                        <div className="w-8 h-8 bg-primary-container rounded-xl flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-secondary-container text-base">domain</span>
                        </div>
                        <div>
                          <p className="font-headline text-sm font-extrabold text-primary-container leading-none">{dev.name}</p>
                          {dev.tagline && <p className="text-[10px] text-primary-container/60 mt-0.5">{dev.tagline}</p>}
                        </div>
                      </div>
                    ))}

                    {/* "Your project" invite chip */}
                    <div
                      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-dashed border-primary-container/30 cursor-default"
                      style={{ background: 'rgba(3,5,104,0.06)' }}
                    >
                      <div className="w-8 h-8 bg-primary-container/20 rounded-xl flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary-container text-base">add</span>
                      </div>
                      <p className="font-headline text-sm font-bold text-primary-container/70 leading-none">Your project</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* ── Column 3: Home Owners Associations (Dark Slate-Navy) ── */}
            <AnimateOnScroll direction="up" delay={260} className="flex">
              <div
                className="relative flex flex-col w-full overflow-hidden rounded-[2.5rem] shadow-glass-heavy"
                style={{ background: 'linear-gradient(150deg, #0f172a 0%, #1e293b 40%, #162044 75%, #0a0f2e 100%)' }}
              >
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[60px]" style={{ background: 'rgba(253,204,0,0.12)' }} />
                <div className="pointer-events-none absolute bottom-10 left-0 w-36 h-36 rounded-full blur-[50px]" style={{ background: 'rgba(3,5,104,0.5)' }} />
                {/* Dot pattern */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                <div className="relative p-9 flex-1">
                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 border border-secondary-container/25" style={{ background: 'rgba(253,204,0,0.12)' }}>
                    <span className="material-symbols-outlined text-secondary-container text-2xl">home_work</span>
                  </div>

                  <h3 className="font-headline text-2xl font-extrabold text-white mb-4 leading-snug">
                    Home Owners Associations
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-8">
                    We collaborate with your Home Owners Association, Residents Association, Body Corporate or Property Manager for the benefit of your residents, ensuring that they have fast, affordable and reliable internet with minimum damage to the property or disruptions
                  </p>

                  {/* Feature checkmarks */}
                  {[
                    'Fast, affordable & reliable internet',
                    'Minimum damage to property',
                    'Zero disruptions to residents',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-3 mb-3">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/20 border border-secondary-container/40 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary-container" style={{ fontSize: '13px' }}>check</span>
                      </span>
                      <span className="text-white/70 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section id="get-connected" className="pb-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <AnimateOnScroll direction="up" delay={0}>
            <div
              className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(195,140,0,0.22)]"
              style={{ background: 'linear-gradient(135deg, #ffe56a 0%, #fdcc00 48%, #f5b400 100%)' }}
            >
              <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/35 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-primary-container/8 blur-[90px]" />

              <div className="relative grid items-center gap-10 p-8 md:p-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 xl:p-14">
                <div>
                  <h2 className="font-headline text-5xl font-extrabold leading-[0.98] tracking-tight text-primary-container lg:text-[4.4rem]">
                    Ready to <br />
                    <span className="text-white">get connected?</span>
                  </h2>

                  <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-primary-container lg:text-xl">
                    Join thousands of households and businesses already experiencing the Fibrehood difference. Simple setup, expert support.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { value: '1GPS', label: 'Capable network', icon: 'speed' },
                      { value: 'Free', label: 'Installation', icon: 'handyman' },
                      { value: '24/7', label: 'Support', icon: 'support_agent' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex min-h-[128px] flex-col items-center justify-center rounded-xl border border-white/55 bg-white/72 px-5 py-5 text-center shadow-[0_16px_38px_rgba(3,5,104,0.10)] backdrop-blur-sm"
                      >
                        <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '34px' }}>{stat.icon}</span>
                        <p className="mt-3 font-headline text-3xl font-extrabold leading-none text-primary-container">{stat.value}</p>
                        <p className="mt-2 text-sm font-extrabold leading-5 text-primary-container">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="overflow-hidden rounded-[1.55rem] border border-white/60 shadow-[0_24px_70px_rgba(3,5,104,0.16)]">
                    <img
                      src="/assets/how-to-get.jpg"
                      alt="A happy family connected through Fibrehood"
                      className="h-[320px] w-full object-cover md:h-[390px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="developers-estates" className="bg-white py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <AnimateOnScroll direction="up" delay={0}>
            <div className="overflow-hidden rounded-[2rem] border border-primary-container/10 bg-white shadow-[0_28px_90px_rgba(3,5,104,0.12)]">
              <div
                className="relative min-h-[500px] bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/fibrehood-houses.jpg)' }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(253,204,0,0.98)_0%,rgba(253,204,0,0.88)_34%,rgba(253,204,0,0.34)_56%,rgba(3,5,104,0.04)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_58%,rgba(3,5,104,0.10)_100%)]" />

                <div className="relative max-w-3xl px-8 py-12 md:px-14">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-container">
                    Developers &amp; Estates
                  </p>
                  <div className="mt-3 h-1 w-16 rounded-full bg-primary-container" />
                  <h2 className="mt-5 max-w-xl font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary-container md:text-5xl">
                    Fibre infrastructure for future-ready estates.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-primary-container/85">
                    Fibrehood partners with developers, body corporates and estates to deliver no-cost infrastructure models and smart estate connectivity.
                  </p>

                  <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      'FTTH Network Design',
                      'Fibre Infrastructure Deployment',
                      'Developer Partnership Models',
                      'Estate & MDU Connectivity',
                      'Managed Services',
                    ].map((item) => (
                      <div key={item} className="flex min-h-[62px] items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-[0_14px_30px_rgba(3,5,104,0.10)]">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary-container">
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                        </span>
                        <span className="text-sm font-extrabold leading-5 text-primary-container">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white px-8 py-12 text-center">
                <div className="mx-auto mb-7 h-1 w-16 rounded-full bg-secondary-container" />
                <h3 className="font-headline text-2xl font-extrabold text-primary-container md:text-3xl">
                  Let&apos;s build smarter, connected estates together.
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-primary-container/78">
                  Partner with Fibrehood to deliver high-quality, future-ready connectivity that adds value to your developments.
                </p>
                <button
                  onClick={() => { window.location.href = 'mailto:sales@fibrehood.co.zw?subject=Developer%20and%20estate%20partnership'; }}
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary-container px-9 py-4 font-extrabold text-white shadow-[0_18px_38px_rgba(3,5,104,0.22)] transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Partner With Us
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </main>
  );
};

export default Screen1;
