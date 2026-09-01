import { Link } from 'react-router-dom';

const heroStats = [
  { icon: 'apartment', value: '2,500+', label: 'Homes in Scope' },
  { icon: 'groups', value: '+1000', label: 'Homes Connected' },
  { icon: 'emoji_events', value: 'Gold Winner', label: 'ICT Excellence' },
];

const featureCards = [
  {
    icon: 'all_inclusive',
    title: 'Unlimited Internet',
    text: 'Enjoy seamless browsing, streaming, gaming and working from home.',
  },
  {
    icon: 'wallet',
    title: 'Plans from',
    value: 'US$40',
    suffix: '/month',
    text: 'Affordable plans to suit every household.',
  },
  {
    icon: 'handyman',
    title: 'FREE Installation',
    text: 'We handle the setup, so you can connect without the hassle.',
  },
  {
    icon: 'sell',
    title: 'Activation Fees from only',
    value: 'US$65',
    text: 'Applicable upon signup for service.',
  },
];

const futureReady = [
  { icon: 'verified_user', title: 'Reliable Network' },
  { icon: 'speed', title: 'High Speed Connectivity' },
  { icon: 'support_agent', title: 'Local Support You Can Trust' },
  { icon: 'lock', title: 'Secure & Future Ready' },
];

const Screen1 = () => {
  return (
    <main className="fh-home">
      <section className="fh-home-hero">
        <div className="fh-home-hero__shade" />
        <div className="fh-home-wrap">
          <div className="fh-home-copy">
            <h1>
              Fast, reliable
              <span>fibre internet for</span>
              <span>your home.</span>
            </h1>
            <div className="fh-home-price">
              <p>Starting from</p>
              <strong>US$40 <span>/month</span></strong>
            </div>
            <div className="fh-home-actions">
              <Link className="fh-home-btn fh-home-btn--yellow" to="/coverage">
                <span className="material-symbols-outlined">pin_drop</span>
                Check Coverage
              </Link>
              <Link className="fh-home-btn fh-home-btn--outline" to="/fibre-plans">
                View Plans
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="fh-home-stats">
            {heroStats.map((stat) => (
              <article key={stat.label}>
                <span className="material-symbols-outlined">{stat.icon}</span>
                <div>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="fh-home-features">
            {featureCards.map((card) => (
              <article key={card.title}>
                <span className="fh-card-icon material-symbols-outlined">{card.icon}</span>
                <h2>{card.title}</h2>
                {card.value && (
                  <strong>
                    {card.value}
                    {card.suffix && <span>{card.suffix}</span>}
                  </strong>
                )}
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <div className="fh-future-panel">
            <div className="fh-future-art" />
            <div className="fh-future-content">
              <h2>
                Built for today.
                <span>Ready for tomorrow.</span>
              </h2>
              <p>
                We&apos;re committed to delivering world-class fibre infrastructure that connects homes, empowers communities and drives Zimbabwe forward.
              </p>
              <div className="fh-future-list">
                {futureReady.map((item) => (
                  <article key={item.title}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                    <strong>{item.title}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen1;
