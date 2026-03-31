import { useState, useRef } from 'react';
import CoverageSection from '../components/coverage/CoverageSection';
import AnimateOnScroll from '../components/AnimateOnScroll';

// ── Data ─────────────────────────────────────────────────────────────────────


const whyPoints = [
  'The lack of internet access traps people in cycles of poverty and limits opportunities.',
  "Internet is not just about education or entertainment, it's also about economic empowerment.",
  'With internet access, new avenues for income and growth emerge benefiting both individuals and the broader economy.',
  'In Zimbabwe we have a large portion of the population that have extremely limited or no internet access at all. Unfortunately this drastically reduces the opportunity to showcase talent and achieve true potential.',
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
    title: 'Open Access',
    text: 'Residents can choose from various ISPs to suit their needs.',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-fixed',
    highlight: true,
  },
  {
    icon: 'bolt',
    title: 'Blazing fast speeds',
    text: 'Enjoy lightning-fast download and upload speeds for uninterrupted streaming, work, and play.',
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
    iconColor: 'text-on-secondary-fixed',
    highlight: true,
  },
  {
    icon: 'thumb_up',
    title: 'Reliable and stable connection',
    text: 'Experience a stable connection, even during peak times and bad weather.',
    iconBg: 'bg-primary-container',
    iconColor: 'text-white',
  },
];

const connectivityPartners = [
  { name: 'TelOne', tagline: 'The Future Is Better Together' },
  { name: 'DFA', tagline: 'Open Access Network' },
  { name: 'Powertel', tagline: 'Communications' },
  { name: 'BCS', tagline: 'Bandwidth & Cloud Services Group' },
  { name: 'Think Believe Connect', tagline: '' },
  { name: 'Liquid', tagline: 'Intelligent Technologies' },
];

const propertyDevelopers = [
  { name: 'N3 Properties', tagline: '' },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Screen1 = () => {
  const [heroInput, setHeroInput] = useState('');
  const [externalSearch, setExternalSearch] = useState(null);
  const coverageRef = useRef(null);

  const handleHeroCheck = () => {
    if (!heroInput.trim()) return;
    setExternalSearch({ query: heroInput.trim(), ts: Date.now() });
    setTimeout(() => {
      coverageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <main className="overflow-hidden bg-surface text-on-surface">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #010230 0%, #020450 30%, #030568 55%, #040880 75%, #020344 100%)' }}
      >
        {/* ── Ambient blobs ── */}
        <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[600px] rounded-full blur-[140px]" style={{ background: 'rgba(253,204,0,0.09)' }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <div className="pointer-events-none absolute top-1/2 left-1/3 w-[600px] h-[400px] -translate-y-1/2 rounded-full blur-[130px]" style={{ background: 'rgba(3,5,104,0.5)' }} />
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center py-16">

          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em]" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-container opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-container" />
              </span>
              Empowering Communities
            </div>

            {/* Headline */}
            <h1 className="font-headline text-5xl lg:text-[3.75rem] xl:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.04em]">
              Affordable,{' '}
              <span className="relative inline-block text-secondary-container">
                accessible
                <span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded-full bg-secondary-container/25" />
              </span>{' '}
              and{' '}
              <span className="relative inline-block text-secondary-container">
                high quality
                <span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded-full bg-secondary-container/25" />
              </span>{' '}
              fibre.
            </h1>

            <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We are building the future of digital infrastructure, connecting suburbs, MDUs, and businesses to the global economy with light-speed reliability.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <button className="px-9 py-4 bg-secondary-container text-on-secondary-fixed font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-200 glow-yellow" style={{ boxShadow: '0 8px 32px rgba(253,204,0,0.3)' }}>
                View Service Plans
              </button>
              <button className="group px-9 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-200" style={{ border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
                Learn about Fibrehood
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform duration-200">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Coverage search bar */}
            <div className="flex items-center gap-2 p-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(16px)' }}>
              <div className="flex flex-1 items-center gap-3 px-4 py-2">
                <span className="material-symbols-outlined text-secondary-container">location_on</span>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.9)', caretColor: '#fdcc00' }}
                  placeholder="Enter your address to check fibre availability..."
                  type="text"
                  value={heroInput}
                  onChange={(e) => setHeroInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleHeroCheck()}
                />
              </div>
              <button
                onClick={handleHeroCheck}
                className="flex items-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-fixed text-xs font-black uppercase tracking-[0.18em] rounded-full hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-base">search</span>
                Check Coverage
              </button>
            </div>
          </div>

          {/* Right: image + floating cards */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[2.5rem]" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)' }}>
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                alt="Communities connected through Fibrehood"
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* 1Gbps floating card */}
            <div
              className="absolute -bottom-6 -left-10 p-6 rounded-[1.75rem] max-w-[240px]"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)', boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 bg-secondary-container rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-fixed">speed</span>
                </span>
                <span className="font-extrabold text-2xl text-white">1Gbps</span>
              </div>
              <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Gigabit speeds available across all new MDU installations.
              </p>
            </div>

            {/* Network Live badge */}
            <div
              className="absolute top-6 -right-4 px-5 py-3 rounded-full flex items-center gap-2.5"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(16px)', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white">Network Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE MAP — immediately after hero ─────────────── */}
      <CoverageSection ref={coverageRef} externalSearch={externalSearch} />

      {/* ── VALUE MARQUEE ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-10"
        style={{ background: 'linear-gradient(135deg, #010230 0%, #020558 40%, #030568 70%, #010f4a 100%)' }}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 rounded-full blur-[80px]" style={{ background: 'rgba(253,204,0,0.07)' }} />
        <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-32 rounded-full blur-[80px]" style={{ background: 'rgba(253,204,0,0.05)' }} />

        {/* Left/right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(90deg, #010230 0%, transparent 100%)' }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(270deg, #010230 0%, transparent 100%)' }} />

        {/* Row 1 — scrolls left */}
        <div className="marquee-track mb-4">
          <div className="marquee-group">
            {[
              { text: 'Affordable, accessible and high quality internet', icon: 'wifi' },
              { text: 'Fast rollout for underserved communities', icon: 'rocket_launch' },
              { text: 'Reliable infrastructure built for long-term growth', icon: 'hub' },
              { text: 'A platform for education, remote work and digital business', icon: 'school' },
              { text: 'Affordable, accessible and high quality internet', icon: 'wifi' },
              { text: 'Fast rollout for underserved communities', icon: 'rocket_launch' },
              { text: 'Reliable infrastructure built for long-term growth', icon: 'hub' },
              { text: 'A platform for education, remote work and digital business', icon: 'school' },
            ].map((item, i) => (
              <div
                key={i}
                className="mr-3 inline-flex items-center gap-3 px-5 py-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'rgba(253,204,0,0.1)' : 'rgba(255,255,255,0.06)',
                  border: i % 2 === 0 ? '1px solid rgba(253,204,0,0.2)' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span
                  className="material-symbols-outlined shrink-0"
                  style={{ fontSize: '15px', color: i % 2 === 0 ? '#fdcc00' : 'rgba(255,255,255,0.5)' }}
                >
                  {item.icon}
                </span>
                <span
                  className="text-[11px] font-black uppercase tracking-[0.25em] whitespace-nowrap"
                  style={{ color: i % 2 === 0 ? '#fdcc00' : 'rgba(255,255,255,0.7)' }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="marquee-track">
          <div className="marquee-group" style={{ animationDirection: 'reverse' }}>
            {[
              { text: 'No-cost installation', icon: 'handyman' },
              { text: 'Open access network', icon: 'lan' },
              { text: 'Blazing fast speeds', icon: 'bolt' },
              { text: 'Boost property value', icon: 'trending_up' },
              { text: 'Future-proof technology', icon: 'security' },
              { text: 'Reliable & stable connection', icon: 'verified' },
              { text: 'No-cost installation', icon: 'handyman' },
              { text: 'Open access network', icon: 'lan' },
              { text: 'Blazing fast speeds', icon: 'bolt' },
              { text: 'Boost property value', icon: 'trending_up' },
              { text: 'Future-proof technology', icon: 'security' },
              { text: 'Reliable & stable connection', icon: 'verified' },
            ].map((item, i) => (
              <div
                key={i}
                className="mr-3 inline-flex items-center gap-3 px-5 py-3 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span
                  className="material-symbols-outlined shrink-0"
                  style={{ fontSize: '15px', color: 'rgba(253,204,0,0.7)' }}
                >
                  {item.icon}
                </span>
                <span
                  className="text-[11px] font-black uppercase tracking-[0.25em] whitespace-nowrap"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT US — WHY WE COME TO WORK ────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f8f9ff 0%, #ffffff 40%, #fafbff 100%)' }}>

        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(253,204,0,0.07)' }} />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(3,5,104,0.05)' }} />
        {/* Large decorative quote mark */}
        <div className="pointer-events-none absolute top-16 right-8 select-none font-headline font-extrabold leading-none" style={{ fontSize: 'clamp(160px,20vw,280px)', color: 'rgba(3,5,104,0.03)', lineHeight: 1 }}>"</div>

        <div className="max-w-7xl mx-auto px-8 relative">

          {/* ── Section label ── */}
          <AnimateOnScroll direction="up" delay={0}>
            <span className="inline-flex mb-14 px-4 py-2 rounded-full bg-secondary-container/20 text-primary-container text-xs font-black uppercase tracking-[0.3em]">
              About Us
            </span>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-stretch">

            {/* ── Left: image ── */}
            <AnimateOnScroll direction="left" delay={80}>
              <div className="relative">
                {/* Decorative ring behind image */}
                <div
                  className="absolute -top-6 -left-6 right-6 bottom-6 rounded-[2.5rem]"
                  style={{ background: 'linear-gradient(135deg, rgba(253,204,0,0.18) 0%, rgba(3,5,104,0.08) 100%)', zIndex: 0 }}
                />

                <div className="relative z-10 overflow-hidden rounded-[2.5rem]" style={{ boxShadow: '0 32px 80px rgba(3,5,104,0.18), 0 8px 24px rgba(3,5,104,0.1)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85"
                    alt="Communities benefiting from connectivity"
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-primary-container/10 to-transparent" />

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-8 py-7">
                    <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Zimbabwe</p>
                    <p className="font-headline text-white font-extrabold text-2xl leading-tight">Connecting the<br />underserved.</p>
                  </div>
                </div>

                {/* Floating stat card */}
                <div
                  className="absolute -right-10 top-12 p-6 rounded-[1.5rem] hidden md:block z-20"
                  style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(3,5,104,0.08)', boxShadow: '0 24px 60px rgba(3,5,104,0.14)' }}
                >
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2" style={{ color: 'rgba(3,5,104,0.4)' }}>Without internet</p>
                  <p className="font-headline text-4xl font-extrabold text-primary-container leading-none">60%<span className="text-2xl">+</span></p>
                  <p className="text-xs mt-2 leading-snug max-w-[140px]" style={{ color: 'rgba(3,5,104,0.5)' }}>of Zimbabwean households</p>
                  <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(3,5,104,0.08)' }}>
                    <div className="h-full rounded-full animate-draw-line" style={{ width: '62%', background: 'linear-gradient(90deg, #fdcc00, #f59e0b)' }} />
                  </div>
                </div>

                {/* Yellow bottom accent */}
                <div className="absolute -bottom-3 left-10 right-10 h-1.5 rounded-full z-20" style={{ background: 'linear-gradient(90deg, transparent, #fdcc00, transparent)' }} />
              </div>
            </AnimateOnScroll>

            {/* ── Right: headline + points ── */}
            <div className="flex h-full flex-col">
              <AnimateOnScroll direction="up" delay={120}>
                <h2 className="font-headline text-3xl lg:text-4xl xl:text-[3rem] font-extrabold leading-[1.04] tracking-tight mb-8" style={{ color: '#030568' }}>
                  Why we come to <br />
                  <span style={{ color: '#fdcc00', WebkitTextStroke: '1px rgba(180,120,0,0.2)' }}>work everyday?</span>
                </h2>
              </AnimateOnScroll>

              {/* Four-column points */}
              <div className="grid flex-1 gap-4 md:grid-cols-2 auto-rows-fr">
                {whyPoints.map((point, i) => (
                  <AnimateOnScroll key={i} direction="up" delay={180 + i * 90}>
                    <div
                      className="group h-full rounded-[2rem] p-[1px] transition-all duration-500 hover:-translate-y-2"
                      style={{
                        background:
                          i % 2 === 1
                            ? 'linear-gradient(145deg, rgba(253,204,0,0.8), rgba(253,204,0,0.18), rgba(255,255,255,0.65))'
                            : 'linear-gradient(145deg, rgba(3,5,104,0.24), rgba(3,5,104,0.08), rgba(253,204,0,0.22))',
                        boxShadow:
                          i % 2 === 1
                            ? '0 24px 60px rgba(253,204,0,0.14)'
                            : '0 24px 60px rgba(3,5,104,0.12)',
                      }}
                    >
                      <div
                        className="flex h-full flex-col rounded-[calc(2rem-1px)] px-5 py-5"
                        style={{
                          background:
                            i % 2 === 1
                              ? 'linear-gradient(180deg, #fffef7 0%, #fff8dd 100%)'
                              : 'linear-gradient(180deg, #ffffff 0%, #f7f8fc 100%)',
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.9rem] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
                            style={{
                              background: i % 2 === 0 ? '#030568' : '#fdcc00',
                              color: i % 2 === 0 ? '#ffffff' : '#1a1200',
                              boxShadow:
                                i % 2 === 0
                                  ? '0 12px 28px rgba(3,5,104,0.18)'
                                  : '0 12px 28px rgba(253,204,0,0.24)',
                            }}
                          >
                            <span className="material-symbols-outlined">
                              {['signal_cellular_alt', 'school', 'trending_up', 'bolt'][i]}
                            </span>
                          </div>

                          <span
                            className="font-headline text-[2rem] font-extrabold leading-none transition-colors duration-300 group-hover:text-primary-container/30"
                            style={{ color: 'rgba(3,5,104,0.14)' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <p className="mt-4 flex-1 text-[15px] leading-7" style={{ color: 'rgba(3,5,104,0.65)' }}>
                          {point}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OUR DREAM ────────────────────────────────────────── */}
      <section className="bg-white pb-28 px-8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll direction="up" delay={0}>
            <div
              className="relative overflow-hidden rounded-[2.5rem] bg-primary-container px-10 py-20 md:px-20 text-center"
              style={{ boxShadow: '0 32px 80px rgba(3,5,104,0.35), 0 8px 24px rgba(3,5,104,0.2), 0 2px 6px rgba(0,0,0,0.12)' }}
            >
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-secondary-container/15 blur-[60px]" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5 blur-[60px]" />
              {/* Vertical accent lines */}
              <div className="pointer-events-none absolute top-0 h-full w-px bg-white/5 left-[20%]" />
              <div className="pointer-events-none absolute top-0 h-full w-px bg-white/5 right-[20%]" />

              <div className="relative">
                <AnimateOnScroll direction="up" delay={100}>
                  <h3 className="font-headline text-secondary-container text-xl font-black uppercase tracking-[0.35em] mb-6">
                    OUR DREAM.
                  </h3>
                </AnimateOnScroll>
                <AnimateOnScroll direction="up" delay={220}>
                  <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
                    At Fibrehood, we have a dream.
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll direction="up" delay={360}>
                  <p className="font-headline text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
                    Our dream is simply to connect the marginalized communities to an{' '}
                    <span className="text-secondary-container">affordable, accessible &amp; high quality internet.</span>
                  </p>
                </AnimateOnScroll>
                <AnimateOnScroll direction="up" delay={480}>
                  <p className="mt-8 text-white/35 text-xs font-medium tracking-widest uppercase">
                    Terms &amp; Conditions apply
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── OUR VALUE PROPOSITION ─────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #010230 0%, #020450 30%, #030568 55%, #040880 75%, #020344 100%)' }}
      >
        {/* ── Ambient light blobs ── */}
        <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[500px] rounded-full blur-[130px]" style={{ background: 'rgba(253,204,0,0.08)' }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[150px]" style={{ background: 'rgba(3,5,104,0.6)' }} />

        {/* ── Subtle grid texture ── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />

        <div className="max-w-7xl mx-auto px-8 relative">

          {/* ── Section header ── */}
          <div className="text-center mb-20 relative">
            {/* Large background watermark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
              <span className="font-headline font-extrabold uppercase tracking-[-0.05em] text-[clamp(80px,14vw,180px)] leading-none whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.03)' }}>
                VALUE
              </span>
            </div>

            <div className="relative">
              <AnimateOnScroll direction="up" delay={0}>
                <span className="inline-flex mb-6 px-4 py-2 rounded-full text-on-secondary-fixed text-xs font-black uppercase tracking-[0.3em]" style={{ background: 'rgba(253,204,0,0.9)' }}>
                  Value
                </span>
              </AnimateOnScroll>
              <AnimateOnScroll direction="up" delay={100}>
                <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
                  Our Value Proposition
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll direction="up" delay={200}>
                <p className="text-lg font-semibold max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Choosing Fibrehood for your property brings a host of advantages that go beyond just faster internet.
                </p>
              </AnimateOnScroll>
            </div>
          </div>

          {/* ── Cards grid ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valuePropCards.map((card, i) => {
              const isHighlight = card.highlight;
              return (
                <AnimateOnScroll key={card.title} direction="up" delay={i * 80} threshold={0.07}>
                  <div
                    className="group relative h-full rounded-[2rem] overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2"
                    style={{
                      background: isHighlight
                        ? 'linear-gradient(145deg, rgba(253,204,0,0.12) 0%, rgba(253,204,0,0.07) 60%, rgba(253,204,0,0.04) 100%)'
                        : 'rgba(255,255,255,0.05)',
                      border: isHighlight
                        ? '1px solid rgba(253,204,0,0.25)'
                        : '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(16px)',
                      boxShadow: isHighlight
                        ? '0 8px 40px rgba(253,204,0,0.08), inset 0 1px 0 rgba(253,204,0,0.15)'
                        : '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* ── Hover glow bloom ── */}
                    <div
                      className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ background: isHighlight ? 'rgba(253,204,0,0.18)' : 'rgba(255,255,255,0.06)' }}
                    />

                    {/* ── Top accent bar ── */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: isHighlight
                          ? 'linear-gradient(90deg, transparent, rgba(253,204,0,0.9), transparent)'
                          : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      }}
                    />

                    {/* ── Watermark number ── */}
                    <div className="pointer-events-none absolute bottom-3 right-5 select-none">
                      <span className="font-headline font-extrabold text-[6rem] leading-none" style={{ color: isHighlight ? 'rgba(253,204,0,0.07)' : 'rgba(255,255,255,0.04)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="relative p-8">
                      {/* ── Icon ── */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background: isHighlight
                            ? 'rgba(253,204,0,0.18)'
                            : 'rgba(255,255,255,0.08)',
                          border: isHighlight
                            ? '1px solid rgba(253,204,0,0.35)'
                            : '1px solid rgba(255,255,255,0.12)',
                          boxShadow: isHighlight
                            ? '0 4px 20px rgba(253,204,0,0.2)'
                            : '0 4px 16px rgba(0,0,0,0.2)',
                        }}
                      >
                        <span
                          className="material-symbols-outlined text-2xl"
                          style={{ color: isHighlight ? '#fdcc00' : 'rgba(255,255,255,0.85)' }}
                        >
                          {card.icon}
                        </span>
                      </div>

                      {/* ── Title ── */}
                      <h3
                        className="font-headline text-xl font-extrabold mb-3 leading-snug"
                        style={{ color: isHighlight ? '#fdcc00' : '#ffffff' }}
                      >
                        {card.title}
                      </h3>

                      {/* ── Underline ── */}
                      <div
                        className="h-[2px] mb-5 rounded-full group-hover:w-16 transition-all duration-500"
                        style={{
                          width: '2rem',
                          background: isHighlight
                            ? 'rgba(253,204,0,0.5)'
                            : 'rgba(255,255,255,0.15)',
                        }}
                      />

                      {/* ── Body text ── */}
                      <p className="leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {card.text}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* ── Bottom stats strip ── */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '1Gbps', label: 'Max speeds available', icon: 'speed' },
              { value: '0', label: 'Installation cost', icon: 'handyman' },
              { value: '99.9%', label: 'Uptime guarantee', icon: 'verified' },
              { value: '24/7', label: 'Network monitoring', icon: 'support_agent' },
            ].map((stat, i) => (
              <AnimateOnScroll key={stat.label} direction="up" delay={i * 60} threshold={0.1}>
                <div
                  className="group flex items-center gap-4 p-5 rounded-[1.5rem] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'rgba(253,204,0,0.15)', border: '1px solid rgba(253,204,0,0.2)' }}
                  >
                    <span className="material-symbols-outlined" style={{ color: '#fdcc00', fontSize: '18px' }}>{stat.icon}</span>
                  </div>
                  <div>
                    <p className="font-headline text-xl font-extrabold leading-none" style={{ color: '#fdcc00' }}>{stat.value}</p>
                    <p className="text-[11px] mt-0.5 leading-tight" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </section>


      {/* ── OUR PARTNERS ──────────────────────────────────────── */}
      <section className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #eef1f9 50%, #f8f9fa 100%)' }}>
        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <AnimateOnScroll direction="up" delay={0}>
              <span className="inline-flex mb-6 px-4 py-2 rounded-full bg-primary-container/10 text-primary-container text-xs font-black uppercase tracking-[0.3em] border border-primary-container/15">
                OUR PARTNERS
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={100}>
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-primary tracking-tight max-w-3xl mx-auto leading-tight">
                We believe in collaborations to add value to our community
              </h2>
            </AnimateOnScroll>
          </div>

          {/* ── 3-column grid ── */}
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">

            {/* ── Column 1: Connectivity Partners (Deep Navy) ── */}
            <AnimateOnScroll direction="up" delay={0} className="flex">
              <div
                className="relative flex flex-col w-full overflow-hidden rounded-[2.5rem] shadow-glass-heavy"
                style={{ background: 'linear-gradient(150deg, #020344 0%, #030568 45%, #0c1a8a 80%, #030568 100%)' }}
              >
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px]" style={{ background: 'rgba(253,204,0,0.18)' }} />
                <div className="pointer-events-none absolute bottom-0 -left-8 w-40 h-40 rounded-full blur-[50px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
                {/* Subtle grid pattern overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 40px)' }}
                />

                <div className="relative p-9 pb-6 flex-1">
                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 border border-secondary-container/30" style={{ background: 'rgba(253,204,0,0.15)' }}>
                    <span className="material-symbols-outlined text-secondary-container text-2xl">cell_tower</span>
                  </div>

                  <h3 className="font-headline text-2xl font-extrabold text-secondary-container mb-4 leading-snug">
                    Connectivity Partners
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    We work with multiple Fibre Network Operators to bring you fast affordable and reliable Broadband
                  </p>
                </div>

                {/* Logo carousel */}
                <div className="relative pb-9 overflow-hidden">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10" style={{ background: 'linear-gradient(90deg, #030568 0%, transparent 100%)' }} />
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10" style={{ background: 'linear-gradient(270deg, #030568 0%, transparent 100%)' }} />

                  <div className="marquee-track py-2">
                    <div className="marquee-group">
                      {connectivityPartners.concat(connectivityPartners).map((p, i) => (
                        <div
                          key={i}
                          className="mr-3 inline-flex flex-col items-center justify-center px-5 py-3 rounded-2xl border border-white/15 min-w-[120px]"
                          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
                        >
                          <span className="text-white font-extrabold text-sm leading-tight text-center">{p.name}</span>
                          {p.tagline && (
                            <span className="text-white/45 text-[9px] uppercase tracking-widest mt-0.5 text-center leading-tight">{p.tagline}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
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

                  <h3 className="font-headline text-2xl font-extrabold text-primary-container mb-4 leading-snug">
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

                  <h3 className="font-headline text-2xl font-extrabold text-secondary-container mb-4 leading-snug">
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

                {/* CTA at bottom */}
                <div className="relative px-9 pb-9 pt-2 border-t border-white/8 mt-2">
                  <button className="w-full py-4 bg-secondary-container text-on-secondary-fixed font-extrabold text-sm rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl glow-yellow">
                    Contact Us
                  </button>
                  <p className="text-center text-white/30 text-[10px] font-medium uppercase tracking-widest mt-4">
                    Terms &amp; Conditions apply
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8">
          <AnimateOnScroll direction="up" delay={0}>
            <div
              className="relative overflow-hidden rounded-[2.75rem] shadow-[0_32px_100px_rgba(195,140,0,0.24)]"
              style={{ background: 'linear-gradient(118deg, #fff8d3 0%, #ffe27a 24%, #fdcc00 48%, #f4b400 72%, #d69200 100%)' }}
            >
              <div className="pointer-events-none absolute -top-24 -right-12 h-80 w-80 rounded-full bg-white/35 blur-[80px]" />
              <div className="pointer-events-none absolute bottom-0 left-[22%] h-64 w-64 rounded-full bg-primary-container/10 blur-[90px]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(-35deg,#030568 0px,#030568 1px,transparent 1px,transparent 24px)' }} />
              <div className="pointer-events-none absolute top-0 h-full w-px bg-primary-container/10" style={{ right: '190px' }} />
              <div className="pointer-events-none absolute top-0 h-full w-px bg-primary-container/10" style={{ right: '380px' }} />

              <div className="relative grid items-center gap-12 p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-16 xl:p-20">
                <div className="space-y-8">
                  <div className="inline-flex rounded-full border border-primary-container/12 bg-white/45 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-primary-container backdrop-blur-md">
                    Get Connected
                  </div>

                  <h2 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary lg:text-6xl">
                    Ready to join the <br />
                    <span className="text-primary-container">Fibrehood?</span>
                  </h2>

                  <p className="max-w-2xl text-lg leading-relaxed text-primary/75 lg:text-xl">
                    Join thousands of households and businesses already experiencing the Fibrehood difference. Simple setup, expert support.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button className="rounded-full bg-primary-container px-10 py-5 font-extrabold text-white shadow-[0_20px_45px_rgba(3,5,104,0.22)] transition-all duration-200 hover:scale-105 active:scale-95">
                      View Service Plans
                    </button>
                    <button
                      className="rounded-full px-10 py-5 font-bold text-white shadow-[0_20px_45px_rgba(3,5,104,0.18)] transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{ backgroundColor: '#030568', opacity: 1 }}
                    >
                      Check Coverage
                    </button>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="group overflow-hidden rounded-[2.25rem] border border-white/45 shadow-[0_24px_70px_rgba(3,5,104,0.16)] rotate-1 transition-all duration-700 hover:rotate-0">
                    <img
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191011?auto=format&fit=crop&w=1200&q=85"
                      alt="A happy family connected through Fibrehood"
                      className="h-[400px] w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/28 via-transparent to-white/10" />
                  </div>

                  <div className="absolute -left-8 bottom-8 rounded-[1.5rem] border border-white/55 bg-white/70 p-5 shadow-[0_18px_50px_rgba(3,5,104,0.12)] backdrop-blur-xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-container/50">Simple Setup</p>
                    <p className="mt-2 font-headline text-2xl font-extrabold text-primary-container">Fast support.</p>
                    <p className="mt-1 text-sm leading-6 text-primary/65">Expert help from sign-up to activation.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </main>
  );
};

export default Screen1;
