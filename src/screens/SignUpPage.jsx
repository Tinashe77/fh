import React from 'react';

const serviceTypes = [
  {
    icon: 'home',
    title: 'Single dwelling home',
    text: 'For homes and residences',
  },
  {
    icon: 'apartment',
    title: 'MDU / Body Corporate',
    text: 'For apartments and complexes',
  },
  {
    icon: 'groups',
    title: 'Community / Estate',
    text: 'For estates and neighbourhoods',
  },
  {
    icon: 'business',
    title: 'Business Fibre',
    text: 'For offices and businesses',
  },
];

const heroBenefits = [
  { icon: 'speed', title: 'High-speed', text: 'fibre internet' },
  { icon: 'workspace_premium', title: 'Reliable, future-', text: 'ready connectivity' },
  { icon: 'support_agent', title: 'Local support,', text: 'always here to help' },
];

const QRCode = () => {
  const modules = Array.from({ length: 441 }, (_, index) => {
    const row = Math.floor(index / 21);
    const col = index % 21;
    const finder =
      (row < 7 && col < 7 && (row === 0 || row === 6 || col === 0 || col === 6 || (row > 1 && row < 5 && col > 1 && col < 5))) ||
      (row < 7 && col > 13 && (row === 0 || row === 6 || col === 14 || col === 20 || (row > 1 && row < 5 && col > 15 && col < 19))) ||
      (row > 13 && col < 7 && (row === 14 || row === 20 || col === 0 || col === 6 || (row > 15 && row < 19 && col > 1 && col < 5)));
    const pattern = ((row * 7 + col * 11 + row * col) % 5 === 0) || ((row + col) % 7 === 0) || ((row * 3 + col) % 11 === 0);

    return finder || pattern;
  });

  return (
    <div className="registration-qr" aria-label="QR code placeholder">
      {modules.map((filled, index) => (
        <span key={index} className={filled ? 'is-filled' : ''} />
      ))}
    </div>
  );
};

const Field = ({ icon, children, wide = false }) => (
  <label className={wide ? 'registration-field registration-field--wide' : 'registration-field'}>
    <span className="material-symbols-outlined">{icon}</span>
    {children}
  </label>
);

const PortalView = () => (
  <main className="min-h-[70vh] bg-surface-container-low px-6 pb-20 pt-32">
    <section className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-sm">
      <span className="mb-5 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-on-secondary-fixed">
        Client Portal
      </span>
      <h1 className="font-headline text-4xl font-extrabold text-primary-container">Access your Fibrehood account.</h1>
      <p className="mt-4 text-primary-container/70">Sign in to manage your account, service requests and support communication.</p>
      <form className="mt-8 grid gap-4">
        <input className="rounded-xl border-outline-variant" type="email" placeholder="Email address" />
        <input className="rounded-xl border-outline-variant" type="password" placeholder="Password" />
        <button type="button" className="rounded-full bg-secondary-container px-8 py-4 font-extrabold text-on-secondary-fixed">
          Sign In
        </button>
      </form>
    </section>
  </main>
);

const SignUpPage = ({ mode = 'signup' }) => {
  if (mode === 'portal') {
    return <PortalView />;
  }

  return (
    <main className="registration-page">
      <section className="registration-hero">
        <div className="registration-hero__shade" />
        <div className="registration-shell registration-hero__inner">
          <img className="registration-logo" src="/assets/web-logo-light.png" alt="Fibrehood" />
          <span className="registration-pill">Sign Up</span>
          <h1>Register for Fibrehood service.</h1>
          <p>Send your details to confirm coverage, register interest or begin an activation request.</p>
          <div className="registration-benefits">
            {heroBenefits.map((item) => (
              <article key={item.title}>
                <span className="material-symbols-outlined">{item.icon}</span>
                <strong>
                  {item.title}
                  <small>{item.text}</small>
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="registration-shell registration-panel-row">
        <form className="registration-form">
          <div className="registration-form__top">
            <section>
              <h2>1. Service Type</h2>
              <select defaultValue="">
                <option value="" disabled>Select service type</option>
                <option>Single dwelling home</option>
                <option>MDU / Body Corporate</option>
                <option>Community / Estate</option>
                <option>Business Fibre</option>
              </select>
              <div className="registration-service-list">
                {serviceTypes.map((type, index) => (
                  <label className="registration-service" key={type.title}>
                    <input type="radio" name="serviceType" defaultChecked={index === 0} />
                    <span className="material-symbols-outlined">{type.icon}</span>
                    <strong>
                      {type.title}
                      <small>{type.text}</small>
                    </strong>
                  </label>
                ))}
              </div>
            </section>

            <section>
              <h2>2. Package</h2>
              <select defaultValue="">
                <option value="" disabled>Select package</option>
                <option>Starter Home Connect</option>
                <option>Smart Home Connect</option>
                <option>Pro Home Connect</option>
                <option>Ultra-Home Connect</option>
                <option>SME Basic</option>
                <option>SME Pro</option>
                <option>SME Max</option>
              </select>
            </section>

            <section className="registration-details">
              <h2>3. Personal Details</h2>
              <div className="registration-field-grid">
                <Field icon="person">
                  <input type="text" placeholder="Full Name" />
                </Field>
                <Field icon="mail">
                  <input type="email" placeholder="Email Address" />
                </Field>
                <Field icon="call">
                  <input type="tel" placeholder="Phone / WhatsApp" />
                </Field>
                <Field icon="badge">
                  <input type="text" placeholder="ID / Passport Number" />
                </Field>
                <Field icon="location_on" wide>
                  <input type="text" placeholder="Address" />
                </Field>
                <Field icon="pin_drop">
                  <input type="text" placeholder="Area / Suburb" />
                </Field>
                <Field icon="flag">
                  <input type="text" placeholder="Nearest Landmark" />
                </Field>
              </div>
            </section>
          </div>

          <section className="registration-date">
            <div>
              <h2>4. Preferred Date & Time</h2>
              <p>When are you available for a call or site visit?</p>
            </div>
            <div className="registration-date__inputs">
              <Field icon="calendar_month">
                <input type="text" placeholder="Select preferred date" onFocus={(event) => { event.currentTarget.type = 'date'; }} />
              </Field>
              <Field icon="schedule">
                <select defaultValue="">
                  <option value="" disabled>Select preferred time</option>
                  <option>Morning (08:00 - 12:00)</option>
                  <option>Afternoon (12:00 - 17:00)</option>
                  <option>Evening (17:00 - 20:00)</option>
                </select>
              </Field>
            </div>
            <div className="registration-slots">
              {['Morning (08:00 - 12:00)', 'Afternoon (12:00 - 17:00)', 'Evening (17:00 - 20:00)'].map((slot) => (
                <label key={slot}>
                  <input type="radio" name="timeSlot" />
                  {slot}
                </label>
              ))}
            </div>
          </section>

          <div className="registration-submit-row">
            <label>
              <input type="checkbox" />
              I consent to Fibrehood collecting and using my information to contact me regarding my enquiry.
            </label>
            <button type="button">
              Submit Registration
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>

        <aside className="registration-qr-card">
          <h2>Scan QR Code</h2>
          <p>Scan to open the registration flow on your phone.</p>
          <div className="registration-qr-wrap">
            <QRCode />
          </div>
          <div className="registration-scan-note">
            <span className="material-symbols-outlined">phone_iphone</span>
            Point your camera and scan
          </div>
        </aside>
      </section>

      <footer className="registration-footer">
        <div className="registration-shell registration-footer__inner">
          <img src="/assets/web-logo-light.png" alt="Fibrehood" />
          <p>© 2026 Fibrehood (Pvt) Ltd. All rights reserved.</p>
          <p>Proudly connecting Zimbabwe.</p>
          <div>
            {['f', 'wa', '▶', 'in'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default SignUpPage;
