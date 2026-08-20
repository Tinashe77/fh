import { useLocation } from 'react-router-dom';
import CoverageSection from '../components/coverage/CoverageSection';

const journeySteps = [
  {
    icon: 'location_on',
    title: 'Check Availability',
    text: "Enter your address to see if we're in your area.",
  },
  {
    icon: 'inventory_2',
    title: 'Choose Your Plan',
    text: 'Select the perfect fibre plan for your needs.',
  },
  {
    icon: 'event_available',
    title: 'Book Installation',
    text: "Pick a convenient date. We'll do the rest.",
  },
  {
    icon: 'wifi',
    title: 'Get Connected',
    text: 'Enjoy fast, reliable internet every day.',
  },
];

const Screen2 = () => {
  const location = useLocation();
  const shouldAutoLocate = new URLSearchParams(location.search).get('locate') === '1';

  return (
    <main className="gc-page">
      <section className="gc-hero">
        <div className="gc-hero-inner">
          <div className="gc-hero-copy">
            <p className="gc-eyebrow">Get Connected</p>
            <h1>
              Let&apos;s Get You
              <span>Connected.</span>
            </h1>
            <p className="gc-hero-text">
              Getting started with Fibrehood is simple. Choose your connection type, check availability and we&apos;ll handle the rest.
            </p>
          </div>

          <div className="gc-journey">
            {journeySteps.map((step) => (
              <article className="gc-journey-item" key={step.title}>
                <span className="material-symbols-outlined">{step.icon}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gc-flow-intro">
        <div>
          <p>Start here</p>
          <h2>Check your location first.</h2>
          <span>
            Enter your suburb, estate, apartment or street address. If fibre is live, you can request connection immediately. If rollout is still underway or planned, you can register interest so the team can follow up.
          </span>
        </div>
      </section>

      <CoverageSection autoLocate={shouldAutoLocate} />

      <section className="gc-shell">
        <section className="gc-contact-band">
          <div className="gc-contact-copy">
            <span className="material-symbols-outlined">support_agent</span>
            <div>
              <h2>Prefer to talk to our team?</h2>
              <p>We&apos;re here to help you every step of the way.</p>
            </div>
          </div>
          <a className="gc-contact-button" href="mailto:support@fibrehood.co.zw">Contact Us</a>
          <div className="gc-contact-details">
            <a href="tel:+263784416605">
              <span className="material-symbols-outlined">call</span>
              +263 784 416 605
            </a>
            <a href="mailto:support@fibrehood.co.zw">
              <span className="material-symbols-outlined">mail</span>
              support@fibrehood.co.zw
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Screen2;
