import { Link } from 'react-router-dom';

const connectionTypes = [
  {
    icon: 'home',
    title: 'Residential Suburbs',
    text: 'End-to-end fibre connectivity for standalone homes. Our non-invasive trenching technology ensures minimal disruption to your driveway and garden.',
    points: ['Non-invasive micro-trenching', 'Same-day activation options', 'Standard 20m free cabling'],
  },
  {
    icon: 'apartment',
    title: 'Multi-Dwelling Units',
    text: 'Customized infrastructure for apartment blocks and gated communities. We manage the backbone installation to provide every resident with gigabit speeds.',
    points: ['Building management liaison', 'Internal riser optimization', 'Zero cost to body corporate'],
  },
  {
    icon: 'storefront',
    title: 'Commercial Property',
    text: 'High-availability connectivity for office parks and retail spaces. Scalable bandwidth that grows with your business.',
    points: ['Dedicated service level agreements', 'Redundant pathway design', 'Priority technical support'],
  },
  {
    icon: 'other_houses',
    title: 'Property Developers',
    text: 'Future-proof your greenfield developments. We partner with developers to integrate fibre infrastructure during the construction phase.',
    points: ['Pre-wiring during construction', 'Value-add for property sales', 'Turnkey utility management'],
  },
];

const steps = [
  {
    icon: 'location_on',
    title: 'Check Coverage',
    text: 'Confirm availability for your area, building or Southview phase.',
  },
  {
    icon: 'assignment_turned_in',
    title: 'Choose Your Plan',
    text: 'Pick the fibre package that fits your home or business.',
  },
  {
    icon: 'contact_page',
    title: 'Sign Up',
    text: 'Share your details and complete the simple registration steps.',
  },
  {
    icon: 'router',
    title: 'Get Connected',
    text: 'Fibrehood schedules installation and activates your service.',
  },
];

const Screen2 = () => (
  <main className="connect-page">
    <section className="connect-hero">
      <span className="material-symbols-outlined connect-float connect-float--cap">school</span>
      <span className="material-symbols-outlined connect-float connect-float--wifi">wifi</span>
      <span className="material-symbols-outlined connect-float connect-float--shop">storefront</span>
      <span className="material-symbols-outlined connect-float connect-float--people">groups</span>
      <div className="connect-shell connect-hero__inner">
        <div className="connect-hero__copy">
          <h1>
            Let&apos;s Get You
            <span>
              Connected<span className="connect-period">.</span>
            </span>
          </h1>
          <p>
            Getting started with Fibrehood is simple. Choose your connection type, check availability and we&apos;ll handle the rest.
          </p>
          <Link className="connect-primary" to="/sign-up">
            Sign Up Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>

    <section className="connect-shell connect-solutions" aria-label="Connection types">
      {connectionTypes.map((item) => (
        <article className="connect-solution-card" key={item.title}>
          <span className="material-symbols-outlined connect-solution-icon">{item.icon}</span>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <ul>
            {item.points.map((point) => (
              <li key={point}>
                <span className="material-symbols-outlined">check_circle</span>
                {point}
              </li>
            ))}
          </ul>
          <Link className="connect-card-btn" to="/coverage?locate=1">
            Express Interest
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </article>
      ))}
    </section>

    <section className="connect-shell connect-how">
      <p className="connect-eyebrow">How it works</p>
      <h2>Four simple steps to get connected.</h2>
      <div className="connect-steps">
        {steps.map((step, index) => (
          <article className="connect-step" key={step.title}>
            <strong>{String(index + 1).padStart(2, '0')}</strong>
            <span className="material-symbols-outlined connect-step-icon">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="connect-shell connect-cta">
      <span className="material-symbols-outlined connect-cta-icon">support_agent</span>
      <div>
        <h2>Ready to get connected?</h2>
        <p>Our team is standing by to bring fast, reliable fibre internet to your location.</p>
      </div>
      <a className="connect-outline" href="mailto:support@fibrehood.co.zw">
        <span className="material-symbols-outlined">headset_mic</span>
        Talk to Our Team
      </a>
      <Link className="connect-yellow" to="/sign-up">
        Sign Up Now
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </section>
  </main>
);

export default Screen2;
