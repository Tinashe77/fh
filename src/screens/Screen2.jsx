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

const connectionTypes = [
  {
    icon: 'home',
    title: 'Home',
    text: 'High-speed fibre for your household.',
    active: true,
  },
  {
    icon: 'apartment',
    title: 'Business / SME',
    text: 'Reliable connectivity for your business.',
  },
  {
    icon: 'domain',
    title: 'Multi-Dwelling Unit',
    text: 'Solutions for apartments and estates.',
  },
  {
    icon: 'construction',
    title: 'Developer / Projects',
    text: 'Partner with us for new developments.',
  },
];

const StepNumber = ({ children }) => <span className="gc-step-number">{children}</span>;

const Screen2 = () => {
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

      <section className="gc-shell">
        <div className="gc-availability">
          <div className="gc-panel-copy">
            <div className="gc-section-title">
              <StepNumber>1</StepNumber>
              <div>
                <h2>Check Availability</h2>
                <p>Enter your address to see if Fibrehood is available in your area.</p>
              </div>
            </div>

            <div className="gc-check-form">
              <label htmlFor="street-address">Street address</label>
              <div className="gc-input-wrap">
                <input id="street-address" placeholder="Enter your street address" />
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <button type="button">Check Availability</button>
              <p className="gc-help">
                <span className="material-symbols-outlined">help</span>
                Not sure of your address? <a href="mailto:support@fibrehood.co.zw">Contact our team</a> for assistance.
              </p>
            </div>
          </div>

          <div className="gc-map-card" aria-label="Coverage preview">
            <div className="gc-map-pin">
              <span className="material-symbols-outlined">all_inclusive</span>
            </div>
            <div className="gc-map-result">
              <span className="material-symbols-outlined">check</span>
              <div>
                <h3>Fibrehood is in your area!</h3>
                <p>We can connect your home or business.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="gc-workflow">
          <section className="gc-panel">
            <div className="gc-section-title">
              <StepNumber>2</StepNumber>
              <div>
                <h2>Choose Your Connection</h2>
                <p>What are you looking to connect?</p>
              </div>
            </div>

            <div className="gc-connection-grid">
              {connectionTypes.map((type) => (
                <button className={`gc-choice ${type.active ? 'is-active' : ''}`} key={type.title} type="button">
                  <span className="material-symbols-outlined">{type.icon}</span>
                  <strong>{type.title}</strong>
                  <small>{type.text}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="gc-panel">
            <div className="gc-section-title">
              <StepNumber>3</StepNumber>
              <div>
                <h2>Tell Us About You</h2>
                <p>Fill in your details and we&apos;ll be in touch.</p>
              </div>
            </div>

            <form className="gc-details-form">
              <input placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <div className="gc-form-row">
                <input type="tel" placeholder="Phone Number" />
                <select defaultValue="phone" aria-label="Preferred Contact">
                  <option value="phone">Preferred Contact: Phone</option>
                  <option value="whatsapp">Preferred Contact: WhatsApp</option>
                  <option value="email">Preferred Contact: Email</option>
                </select>
              </div>
              <input placeholder="Property Address (if known)" />
              <textarea placeholder="How can we help you? (optional)" />
              <label className="gc-consent">
                <input type="checkbox" />
                <span>
                  I agree to Fibrehood&apos;s <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms & Conditions</a>.
                </span>
              </label>
              <button type="button">
                Submit Request
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </section>
        </div>

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
