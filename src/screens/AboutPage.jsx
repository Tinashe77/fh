const purposeItems = [
  {
    icon: 'groups',
    title: 'Empower Communities',
    text: 'We connect people to opportunities.',
    tone: 'blue',
  },
  {
    icon: 'business_center',
    title: 'Drive Economic Growth',
    text: 'We enable businesses to thrive.',
    tone: 'yellow',
  },
  {
    icon: 'school',
    title: 'Enable Education and Innovation',
    text: 'We open doors to knowledge and creativity.',
    tone: 'blue',
  },
  {
    icon: 'home',
    title: 'Deliver Reliable Connectivity',
    text: 'High quality internet, built for everyday life.',
    tone: 'yellow',
  },
];

const values = [
  {
    icon: 'verified_user',
    title: 'Affordable',
    text: 'We make quality internet accessible to every household.',
    tone: 'blue',
  },
  {
    icon: 'handshake',
    title: 'Reliable',
    text: 'We build and deliver networks you can count on.',
    tone: 'yellow',
  },
  {
    icon: 'person',
    title: 'Inclusive',
    text: 'We reach underserved communities and leave no one behind.',
    tone: 'blue',
  },
  {
    icon: 'star',
    title: 'Forward Thinking',
    text: 'We innovate today for a smarter, more connected tomorrow.',
    tone: 'yellow',
  },
];

const impactItems = [
  {
    icon: 'home',
    value: '2,500+',
    label: 'Homes in Scope',
    text: 'Across Southview Park and surrounding areas.',
    tone: 'blue',
  },
  {
    icon: 'groups',
    value: '+1000',
    label: 'Homes Connected',
    text: 'And growing every day across Zimbabwe.',
    tone: 'yellow',
  },
  {
    icon: 'emoji_events',
    value: 'Gold Winner',
    label: 'ICT Excellence',
    text: 'Recognised for outstanding network infrastructure delivery.',
    tone: 'blue',
  },
];

const AboutPage = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__shade" />
        <div className="about-wrap about-hero__inner">
          <p className="about-eyebrow">About Us</p>
          <h1>
            Bridging the gap.
            <span>Connecting</span>
            <span>potential.</span>
          </h1>
          <p>
            Fibrehood is building affordable, high-quality fibre infrastructure in communities that have historically had limited access to reliable fixed broadband. We believe better connectivity creates opportunities for households, businesses, education and local economic growth.
          </p>
        </div>
      </section>

      <section className="about-section about-section--white">
        <div className="about-wrap">
          <div className="about-title">
            <h2>Our Purpose</h2>
            <span />
          </div>
          <div className="about-purpose-grid">
            {purposeItems.map((item) => (
              <article className="about-purpose-item" key={item.title}>
                <span className={`about-icon is-${item.tone} material-symbols-outlined`}>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-section--soft">
        <div className="about-wrap">
          <div className="about-title">
            <h2>What We Stand For</h2>
            <span />
          </div>
          <div className="about-values-grid">
            {values.map((item) => (
              <article className="about-value-card" key={item.title}>
                <span className={`about-icon is-${item.tone} material-symbols-outlined`}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-section--white">
        <div className="about-wrap">
          <div className="about-title">
            <h2>Our Impact</h2>
            <span />
          </div>
          <div className="about-impact-grid">
            {impactItems.map((item) => (
              <article className="about-impact-item" key={item.label}>
                <span className={`about-icon about-icon--large is-${item.tone} material-symbols-outlined`}>{item.icon}</span>
                <div>
                  <strong>{item.value}</strong>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
