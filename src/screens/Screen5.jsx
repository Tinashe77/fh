import { useLocation } from 'react-router-dom';
import CoverageSection from '../components/coverage/CoverageSection';

const heroStats = [
  {
    icon: 'home',
    value: '3,600+',
    label: 'Homes in Scope',
    text: 'Across Southview Park and surrounding areas.',
  },
  {
    icon: 'speed',
    value: '1Gbps',
    label: 'Network Capacity',
    text: 'Built for speed, reliability and future growth.',
  },
  {
    icon: 'paid',
    value: 'US$40',
    label: 'Packages From / Month',
    text: 'Affordable fibre plans for every household.',
  },
  {
    icon: 'rocket_launch',
    value: 'US$100',
    label: 'Once-off Activation',
    text: 'Simple, transparent activation fee.',
  },
];

const rolloutCards = [
  {
    icon: 'check_circle',
    title: 'Live Zones',
    value: '2',
    phases: '1A, 1D',
    text: 'Homes ready to connect now.',
    tone: 'green',
  },
  {
    icon: 'engineering',
    title: 'In Progress',
    value: '1',
    phases: '1B',
    text: 'Deployment is underway.',
    tone: 'yellow',
  },
  {
    icon: 'calendar_month',
    title: 'Planned Zones',
    value: '2',
    phases: '2A, 2C',
    text: 'Scheduled for future rollout.',
    tone: 'blue',
  },
  {
    icon: 'schedule',
    title: 'Not Started',
    value: '3',
    phases: '1C, 2B, 3',
    text: 'Deployment planned.',
    tone: 'slate',
  },
];

const Screen5 = () => {
  const location = useLocation();
  const shouldAutoLocate = new URLSearchParams(location.search).get('locate') === '1';

  return (
    <main className="cp-page">
      <section className="cp-hero">
        <div className="cp-hero-grid" />
        <div className="cp-hero-glow" />
        <div className="cp-hero-inner">
          <div className="cp-hero-copy">
            <p className="cp-pill">Coverage</p>
            <h1>Check coverage and deployment status.</h1>
            <p>
              Confirm your location, track rollout progress and see which areas are live, in progress or coming soon.
            </p>
          </div>

          <div className="cp-stat-strip">
            {heroStats.map((stat) => (
              <article className="cp-hero-stat" key={stat.label}>
                <span className="material-symbols-outlined">{stat.icon}</span>
                <div>
                  <strong>{stat.value}</strong>
                  <h2>{stat.label}</h2>
                  <p>{stat.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CoverageSection autoLocate={shouldAutoLocate} />

      <section className="cp-glance">
        <div className="cp-glance-head">
          <div>
            <h2>Rollout at a glance</h2>
            <p>Real-time overview of our deployment progress.</p>
          </div>
          <span>Last updated: 20 May 2025, 10:30 AM</span>
        </div>

        <div className="cp-glance-grid">
          {rolloutCards.map((card) => (
            <article className={`cp-rollout-card is-${card.tone}`} key={card.title}>
              <span className="material-symbols-outlined">{card.icon}</span>
              <div>
                <h3>{card.title}</h3>
                <strong>{card.value}</strong>
                <p className="cp-phases">{card.phases}</p>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cp-support-band">
        <div>
          <span className="material-symbols-outlined">support_agent</span>
          <div>
            <h2>Can&apos;t find your area or need more information?</h2>
            <p>Our team is ready to assist you with availability and connection options.</p>
          </div>
        </div>
        <a href="mailto:support@fibrehood.co.zw">
          Talk to Our Team
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </section>
    </main>
  );
};

export default Screen5;
