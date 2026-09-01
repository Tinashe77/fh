import { Link } from 'react-router-dom';

const heroBenefits = [
  { icon: 'speed', title: 'Blazing Fast', text: 'Speeds' },
  { icon: 'verified_user', title: 'Reliable', text: 'Every Day' },
  { icon: 'router', title: 'Free Router', text: 'Included*' },
  { icon: 'support_agent', title: 'Local Support', text: 'You Can Trust' },
];

const featureStrip = [
  { icon: 'all_inclusive', title: 'Unlimited', text: 'Data' },
  { icon: 'handyman', title: 'FREE*', text: 'Installation' },
  { icon: 'power_settings_new', title: 'Activation', text: 'from US$65' },
  { icon: 'router', title: 'Wi-Fi Router', text: 'Included*' },
  { icon: 'calendar_month', title: 'Month-on-Month', text: 'Subscription' },
];

const homePlans = [
  { tier: 'yellow', icon: 'home', name: 'Starter Home Connect', speed: 'Up to 5Mbps', price: 'US$40' },
  { tier: 'red', icon: 'home', name: 'Smart Home Connect', speed: 'Up to 15Mbps', price: 'US$50' },
  { tier: 'green', icon: 'home', name: 'Pro Home Connect', speed: 'Up to 30Mbps', price: 'US$65' },
  { tier: 'blue', icon: 'home', name: 'Ultra-Home Connect', speed: 'Up to 100Mbps', price: 'US$85' },
];

const smePlans = [
  { tier: 'yellow', name: 'SME Basic', speed: '30', price: 'US$75' },
  { tier: 'green', name: 'SME Proc', speed: '50', price: 'US$125' },
  { tier: 'blue', name: 'SME Max', speed: '100', price: 'US$190' },
];

const enterpriseItems = [
  { icon: 'desktop_windows', title: 'Dedicated Internet Access' },
  { icon: 'business', title: 'Multiple Sites' },
  { icon: 'power_settings_new', title: '99.9% Network Uptime' },
  { icon: 'support_agent', title: 'Priority Support' },
];

const whyItems = [
  { icon: 'wifi', title: '100% Fibre Infrastructure', text: 'Built for speed, reliability and the future.' },
  { icon: 'hub', title: 'Trusted Local Provider', text: 'Licensed, reliable and customer-focused.' },
  { icon: 'shield', title: 'Support That Cares', text: 'Real people. Real solutions. Always.' },
  { icon: 'groups', title: 'Connecting Zimbabwe', text: 'Empowering homes, businesses and communities.' },
];

const Screen3 = () => {
  return (
    <main className="plans-page">
      <section className="plans-hero">
        <div className="plans-hero__wash" />
        <div className="plans-wrap plans-hero__inner">
          <div className="plans-hero__copy">
            <h1>
              Get unlimited,
              <span>affordable</span>
              <span>connectivity</span>
            </h1>
            <p>Fast, reliable fibre internet for homes and businesses across Zimbabwe.</p>
            <div className="plans-hero__actions">
              <a href="#home-fibre">View Home Plans</a>
              <a href="#business-fibre">Business Solutions</a>
            </div>
            <div className="plans-hero__benefits">
              {heroBenefits.map((item) => (
                <article key={item.title}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </article>
              ))}
            </div>
          </div>

          <div className="plans-float-card">
            <span className="material-symbols-outlined">wifi</span>
            <div>
              <strong>100% Fibre</strong>
              <p>for a Better Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="plans-wrap">
        <div className="plans-feature-strip">
          {featureStrip.map((item) => (
            <article key={item.title}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="home-fibre" className="plans-wrap plans-home">
        <p className="plans-label">Home Fibre</p>
        <div className="plans-home-grid">
          {homePlans.map((plan) => (
            <article className={`plans-home-card is-${plan.tier}`} key={plan.name}>
              <div className="plans-card-wave" />
              <span className="plans-home-icon material-symbols-outlined">{plan.icon}</span>
              <h2>{plan.name}</h2>
              <p className="plans-speed-pill">{plan.speed}</p>
              <strong>{plan.price}<span>/month</span></strong>
              <Link to="/sign-up">Sign Up</Link>
            </article>
          ))}
        </div>
        <p className="plans-terms">*Terms &amp; Conditions apply</p>
      </section>

      <section id="business-fibre" className="plans-wrap plans-sme">
        <h2>SME Fibre Packages</h2>
        <p>Reliable fibre for small to medium businesses.</p>
        <div className="plans-sme-grid">
          <img src="/assets/business-fibre-plans.jpg" alt="Business fibre customer" />
          {smePlans.map((plan) => (
            <article className={`plans-sme-card is-${plan.tier}`} key={plan.name}>
              <div>
                <h3>{plan.name}</h3>
                <strong>{plan.speed}<span> Mbps</span></strong>
              </div>
              <p>{plan.price}<span>/month</span></p>
              <Link to="/sign-up">Sign Up</Link>
            </article>
          ))}
        </div>
        <div className="plans-sme-cta">
          <div>
            <span className="material-symbols-outlined">sell</span>
            <strong>US$100</strong>
            <p>Activation Fee</p>
          </div>
          <a href="mailto:sales@fibrehood.co.zw?subject=SME%20fibre%20package%20enquiry">
            Enquire Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>

      <section className="plans-wrap plans-enterprise">
        <div className="plans-enterprise__overlay" />
        <div className="plans-enterprise__content">
          <h2>Enterprise Connectivity</h2>
          <p>Tailored, high-performance solutions for your organisation.</p>
          <div>
            {enterpriseItems.map((item) => (
              <article key={item.title}>
                <span className="material-symbols-outlined">{item.icon}</span>
                <strong>{item.title}</strong>
              </article>
            ))}
          </div>
          <a href="mailto:sales@fibrehood.co.zw?subject=Enterprise%20connectivity%20consultation">
            Talk to Our Solutions Team
          </a>
        </div>
      </section>

      <section className="plans-wrap plans-why">
        <h2>Why Choose Fibrehood?</h2>
        <span className="plans-title-line" />
        <div className="plans-why-grid">
          {whyItems.map((item) => (
            <article key={item.title}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Screen3;
