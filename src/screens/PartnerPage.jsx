import { Link } from 'react-router-dom';

const partnerCards = [
  {
    icon: 'groups',
    title: 'Community Residents Associations',
    text: 'Bring world-class connectivity to your neighbourhood and create lasting value for every resident.',
    points: ['Reliable, high-speed fibre for all homes', 'Increase property value and desirability', 'Future-proof your community'],
  },
  {
    icon: 'apartment',
    title: 'Property Developers',
    text: 'Differentiate your developments with built-in fibre infrastructure and increase buyer appeal.',
    points: ['Pre-wired developments', 'Seamless project integration', 'Faster sales, higher satisfaction'],
  },
  {
    icon: 'home_work',
    title: 'Estate Bodies / Body Corporates',
    text: 'Upgrade your existing properties with modern fibre infrastructure at no cost to the estate.',
    points: ['Minimal disruption, maximum benefit', 'Open access, fair and transparent', 'Improves tenant experience'],
  },
];

const benefits = [
  { icon: 'rocket_launch', title: 'Fast rollout', text: 'Minimal disruption to your community' },
  { icon: 'hub', title: 'No cost', text: 'Fibre infrastructure at no cost to you' },
  { icon: 'shield_lock', title: 'Open access', text: 'Fair, non-discriminatory network access' },
  { icon: 'bolt', title: 'Gigabit speeds', text: 'Future-ready connectivity' },
  { icon: 'trending_up', title: 'Boost value', text: 'Increase property and community value' },
  { icon: 'support_agent', title: 'Ongoing support', text: 'Local team, always here to help' },
];

const process = [
  {
    icon: 'groups',
    title: 'Understand',
    text: 'We listen to your needs and assess your estate or development.',
  },
  {
    icon: 'edit_document',
    title: 'Design',
    text: 'Our engineers design the best fibre solution tailored to your requirements.',
  },
  {
    icon: 'engineering',
    title: 'Build',
    text: 'We deploy the infrastructure with minimal disruption and to the highest standards.',
  },
  {
    icon: 'wifi',
    title: 'Connect & Support',
    text: 'We activate your network and provide ongoing support for the long term.',
  },
];

const PartnerPage = () => (
  <main className="partner-page">
    <section className="partner-hero">
      <div className="partner-hero__shade" />
      <div className="partner-wrap partner-hero__inner">
        <div className="partner-hero__copy">
          <h1>
            Better connections.
            <span>Stronger communities.</span>
            <em>Built together.</em>
          </h1>
          <p>
            Fibrehood partners with community associations, property developers and estate bodies to deliver future-ready fibre infrastructure that unlocks opportunity and grows value.
          </p>
          <div className="partner-hero__actions">
            <Link className="partner-btn partner-btn--yellow" to="/sign-up">
              Partner With Us
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a className="partner-btn partner-btn--ghost" href="mailto:sales@fibrehood.co.zw">
              <span className="material-symbols-outlined">headset_mic</span>
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="partner-wrap partner-overview" aria-label="Partner options">
      {partnerCards.map((card) => (
        <article className="partner-card" key={card.title}>
          <span className="material-symbols-outlined partner-card__icon">{card.icon}</span>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <ul>
            {card.points.map((point) => (
              <li key={point}>
                <span className="material-symbols-outlined">check_circle</span>
                {point}
              </li>
            ))}
          </ul>
          <Link to="/sign-up">
            Learn More
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </article>
      ))}
    </section>

    <section className="partner-wrap partner-benefits" aria-label="Partner benefits">
      {benefits.map((benefit) => (
        <article key={benefit.title}>
          <span className="material-symbols-outlined">{benefit.icon}</span>
          <h2>{benefit.title}</h2>
          <p>{benefit.text}</p>
        </article>
      ))}
    </section>

    <section className="partner-wrap partner-process">
      <p className="partner-eyebrow">How we work</p>
      <h2>A seamless partnership from start to finish.</h2>
      <div className="partner-process__grid">
        {process.map((step) => (
          <article key={step.title}>
            <span className="material-symbols-outlined">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="partner-wrap partner-cta">
      <span className="material-symbols-outlined partner-cta__icon">handshake</span>
      <div>
        <h2>Let&apos;s build better, connected communities.</h2>
        <p>Partner with Fibrehood and unlock the power of fibre.</p>
      </div>
      <a className="partner-cta__outline" href="mailto:sales@fibrehood.co.zw">
        <span className="material-symbols-outlined">headset_mic</span>
        Talk to Our Team
      </a>
      <Link className="partner-cta__primary" to="/sign-up">
        Partner With Us
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </section>
  </main>
);

export default PartnerPage;
