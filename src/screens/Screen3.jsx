import { Link } from 'react-router-dom';

const homePlans = [
  { name: 'Connect 5', speed: '5 Mbps', price: 'US$40', description: 'Perfect for browsing, social media and messaging.' },
  { name: 'Connect 15', speed: '15 Mbps', price: 'US$50', description: 'Ideal for streaming, remote work and online learning.' },
  { name: 'Connect 30', speed: '30 Mbps', price: 'US$65', description: 'Great for families, multiple devices and HD streaming.', featured: true },
  { name: 'Connect 100', speed: '100 Mbps', price: 'US$85', description: 'For power users, gamers and 4K streaming.' },
];

const businessPlans = [
  { name: 'Business 20', speed: '20 Mbps', price: 'US$90', description: 'Ideal for small offices and essential business operations.' },
  { name: 'Business 50', speed: '50 Mbps', price: 'US$160', description: 'For growing teams, cloud tools and video meetings.' },
  { name: 'Business 100', speed: '100 Mbps', price: 'US$240', description: 'High-speed fibre for busy offices and multiple users.', popular: true },
  { name: 'Business 200', speed: '200 Mbps', price: 'US$420', description: 'For high-demand workloads, large offices and branches.' },
];

const heroBenefits = [
  { icon: 'speed', title: 'Blazing Fast', text: 'Fibre Speeds' },
  { icon: 'verified_user', title: 'Unlimited Data', text: 'No FUP' },
  { icon: 'thumb_up', title: 'Reliable', text: 'Every Day' },
  { icon: 'support_agent', title: 'Local Support', text: 'You Can Trust' },
];

const homePlanFeatures = [
  { icon: 'check_circle', title: 'Unlimited', text: 'Data' },
  { icon: 'handyman', title: 'FREE*', text: 'Installation' },
  { icon: 'security', title: 'Activation', text: 'from US$65' },
  { icon: 'router', title: 'Wi-Fi Router', text: 'Included*' },
];

const businessFeatures = [
  { icon: 'sync_alt', title: 'Symmetrical Speed Options', text: 'Upload and download speeds that work for you.' },
  { icon: 'admin_panel_settings', title: 'Static IP Available', text: 'Add static IP addresses to your plan.' },
  { icon: 'support_agent', title: 'Priority Support', text: 'Local business support when you need it.' },
  { icon: 'monitoring', title: 'Scalable Solutions', text: 'Easily upgrade as your business grows.' },
];

const enterpriseFeatures = [
  { icon: 'public', title: 'Dedicated Internet Access' },
  { icon: 'apartment', title: 'Multi-site Connectivity' },
  { icon: 'security', title: 'Advanced Network Solutions' },
  { icon: 'speed', title: '99.9% Network Availability' },
  { icon: 'support_agent', title: 'Priority Enterprise Support' },
];

const flexibleSolutions = [
  { icon: 'speed', title: 'Dedicated Internet Access', text: 'High-performance internet with guaranteed bandwidth.' },
  { icon: 'hub', title: 'Point-to-Point & MPLS', text: 'Secure, private connectivity between locations.' },
  { icon: 'admin_panel_settings', title: 'Static IP Services', text: 'Public IP addresses for secure remote access and hosting.' },
  { icon: 'router', title: 'Managed Connectivity', text: 'End-to-end management and monitoring.' },
  { icon: 'home_work', title: 'Tailored Bandwidth', text: 'Solutions customised to your needs and growth.' },
];

const trustCards = [
  { icon: 'home', title: 'Connecting Homes and Businesses', text: "Across Zimbabwe's growing communities." },
  { icon: 'hub', title: '100% Fibre Infrastructure', text: 'Built for speed, reliability and the future.' },
  { icon: 'verified_user', title: 'Trusted Local Provider', text: 'Licensed, reliable and customer-focused.' },
  { icon: 'groups', title: 'Local Support That Cares', text: 'Real people. Real solutions. Always.' },
];

const Screen3 = () => {
  return (
    <main className="bg-white text-primary-container">
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#fff7df_0%,#ffffff_44%,#ffe891_100%)] pt-28">
        <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-6 pb-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10">
            <h1 className="font-headline text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
              Connect <br />
              Your World. <br />
              <span className="text-secondary-container">Power Your Everyday.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg font-semibold leading-8 text-primary-container/82">
              Fast, reliable fibre internet for homes, businesses and communities across Zimbabwe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#home-fibre" className="rounded-full bg-primary-container px-8 py-4 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(3,5,104,0.22)]">
                View Home Plans
              </a>
              <a href="#business-fibre" className="rounded-full bg-secondary-container px-8 py-4 text-sm font-extrabold text-primary-container shadow-[0_16px_34px_rgba(253,204,0,0.26)]">
                Business Solutions
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-5 sm:grid-cols-4">
              {heroBenefits.map((item) => (
                <div key={item.title} className="text-center">
                  <span className="material-symbols-outlined text-4xl text-primary-container">{item.icon}</span>
                  <p className="mt-3 text-xs font-extrabold leading-5 text-primary-container">{item.title}</p>
                  <p className="text-[11px] font-semibold leading-4 text-primary-container/74">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[430px] lg:min-h-[560px]">
            <img
              src="/assets/get-fibre-banner.jpg"
              alt="Family using Fibrehood fibre internet"
              className="absolute right-0 top-0 h-full w-full rounded-bl-[4rem] object-cover object-center shadow-[0_24px_70px_rgba(3,5,104,0.12)]"
            />
            <div className="absolute inset-0 rounded-bl-[4rem] bg-[linear-gradient(90deg,#fff7df_0%,rgba(255,247,223,0.35)_24%,rgba(255,247,223,0)_62%)]" />
            <div className="absolute bottom-12 right-8 rounded-2xl bg-white px-8 py-6 shadow-[0_24px_55px_rgba(3,5,104,0.16)]">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-primary-container">
                  <span className="material-symbols-outlined">wifi</span>
                </span>
                <div>
                  <p className="font-headline text-xl font-extrabold">100% Fibre</p>
                  <p className="text-sm font-semibold text-primary-container/72">for a Better Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home-fibre" className="bg-[linear-gradient(120deg,#fff2bd_0%,#ffffff_50%,#fff2bd_100%)] py-16 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-secondary">Home Fibre</span>
              <h2 className="mt-3 font-headline text-4xl font-extrabold md:text-5xl">Home Fibre Plans</h2>
              <p className="mt-4 text-base font-semibold leading-7 text-primary-container/78">
                Unlimited fibre for every home. Prices include VAT.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {homePlanFeatures.map((feature) => (
                <div key={feature.title} className="flex min-h-[76px] items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_12px_30px_rgba(3,5,104,0.08)]">
                  <span className="material-symbols-outlined text-secondary-container">{feature.icon}</span>
                  <div>
                    <p className="text-sm font-extrabold leading-5">{feature.title}</p>
                    <p className="text-xs font-semibold text-primary-container/72">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {homePlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex min-h-[360px] flex-col rounded-2xl p-8 text-center shadow-[0_18px_40px_rgba(3,5,104,0.10)] ${
                  plan.featured ? 'bg-secondary-container text-primary-container' : 'bg-white'
                }`}
              >
                {plan.featured && (
                  <span className="absolute left-8 right-8 top-0 rounded-b-xl bg-primary-container py-2 text-xs font-black uppercase tracking-[0.18em] text-secondary-container">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-headline text-xl font-extrabold ${plan.featured ? 'mt-8' : ''}`}>{plan.name}</h3>
                <p className="mt-7 font-headline text-5xl font-extrabold">
                  {plan.speed.split(' ')[0]} <span className="text-xl font-extrabold">Mbps</span>
                </p>
                <p className="mx-auto mt-5 min-h-[72px] max-w-[12rem] text-sm font-semibold leading-6 text-primary-container/78">{plan.description}</p>
                <div className="mx-auto mt-6 h-px w-32 bg-primary-container/12" />
                <p className="mt-6 font-headline text-3xl font-extrabold">
                  {plan.price}<span className="text-sm font-bold"> /month</span>
                </p>
                <Link to="/sign-up" className="mt-auto rounded-full bg-primary-container px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(3,5,104,0.22)]">
                  Sign Up
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs font-semibold text-primary-container/68">*Applicable in available Fibrehood Connect locations only.</p>
        </div>
      </section>

      <section id="business-fibre" className="bg-white py-16 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_48px_rgba(3,5,104,0.10)]">
            <img src="/assets/business-fibre-plans.jpg" alt="Business fibre customer" className="h-full min-h-[430px] w-full object-cover" />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-secondary">SME & Business</span>
            <h2 className="mt-3 font-headline text-4xl font-extrabold md:text-5xl">Business Fibre Plans</h2>
            <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-primary-container/78">
              Reliable, high-performance fibre connectivity for SMEs, offices and growing businesses.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {businessPlans.map((plan) => (
                <article key={plan.name} className="relative overflow-hidden rounded-2xl border border-primary-container/10 bg-white text-center shadow-[0_16px_34px_rgba(3,5,104,0.08)]">
                  {plan.popular && (
                    <span className="absolute right-4 top-0 rounded-b-lg bg-secondary-container px-3 py-1.5 text-[10px] font-black uppercase text-primary-container">Popular</span>
                  )}
                  <div className="p-6">
                    <h3 className="font-headline text-lg font-extrabold">{plan.name}</h3>
                  </div>
                  <div className="bg-secondary-container py-4">
                    <p className="font-headline text-3xl font-extrabold">{plan.speed.split(' ')[0]} <span className="text-base">Mbps</span></p>
                  </div>
                  <div className="flex min-h-[210px] flex-col p-6">
                    <p className="text-sm font-semibold leading-6 text-primary-container/78">{plan.description}</p>
                    <p className="mt-auto font-headline text-2xl font-extrabold">
                      {plan.price}<span className="text-xs font-bold"> /month</span>
                    </p>
                    <a href="mailto:sales@fibrehood.co.zw?subject=Business%20fibre%20plan%20enquiry" className="mt-5 rounded-full bg-primary-container px-5 py-3 text-sm font-extrabold text-white">
                      Enquire Now
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {businessFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-4xl text-secondary-container">{feature.icon}</span>
                  <div>
                    <p className="text-sm font-extrabold">{feature.title}</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-primary-container/72">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-secondary-container px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl">support_agent</span>
                <div>
                  <p className="font-headline text-xl font-extrabold">Need help choosing the right plan?</p>
                  <p className="text-sm font-semibold text-primary-container/76">Our team is ready to help you get connected.</p>
                </div>
              </div>
              <a href="mailto:sales@fibrehood.co.zw?subject=Business%20sales%20consultation" className="shrink-0 rounded-full bg-primary-container px-8 py-4 text-center text-sm font-extrabold text-white">
                Talk to Business Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div
            className="relative overflow-hidden rounded-2xl bg-primary-container text-white shadow-[0_24px_70px_rgba(3,5,104,0.20)]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(1,2,48,0.98) 0%, rgba(3,5,104,0.9) 46%, rgba(3,5,104,0.26) 100%), url(/assets/enterprise-connectivity.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="max-w-3xl px-8 py-12 md:px-10">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-secondary-container">Enterprise</span>
              <h2 className="mt-3 font-headline text-4xl font-extrabold md:text-5xl">Enterprise Connectivity</h2>
              <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-white/82">
                Tailored, high-capacity solutions for organisations that demand performance, reliability and expert support.
              </p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {enterpriseFeatures.map((feature) => (
                  <div key={feature.title} className="text-center">
                    <span className="material-symbols-outlined text-4xl text-secondary-container">{feature.icon}</span>
                    <p className="mt-3 text-xs font-extrabold leading-5 text-white">{feature.title}</p>
                  </div>
                ))}
              </div>
              <a href="mailto:sales@fibrehood.co.zw?subject=Enterprise%20connectivity%20consultation" className="mt-9 inline-flex rounded-full bg-secondary-container px-9 py-4 text-sm font-extrabold text-primary-container">
                Talk to Our Solutions Team
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-7 shadow-[0_18px_44px_rgba(3,5,104,0.08)]">
            <h3 className="font-headline text-lg font-extrabold uppercase tracking-[0.08em]">
              Flexible solutions for every organisation
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-5">
              {flexibleSolutions.map((solution) => (
                <div key={solution.title} className="flex gap-3">
                  <span className="material-symbols-outlined shrink-0 text-secondary-container">{solution.icon}</span>
                  <div>
                    <p className="text-sm font-extrabold leading-5">{solution.title}</p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-primary-container/72">{solution.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-container py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 md:grid-cols-4">
          {trustCards.map((card) => (
            <div key={card.title} className="flex gap-4">
              <span className="material-symbols-outlined text-4xl text-primary-container">{card.icon}</span>
              <div>
                <p className="font-headline text-lg font-extrabold">{card.title}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-primary-container/76">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary-container pb-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col gap-5 rounded-t-2xl py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-headline text-3xl font-extrabold">Ready to Get Connected?</h2>
              <p className="mt-2 text-base font-semibold text-primary-container/76">
                Choose your plan and experience the Fibrehood Connect difference.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#home-fibre" className="rounded-full bg-primary-container px-8 py-4 text-sm font-extrabold text-white">
                View All Plans
              </a>
              <Link to="/coverage" className="rounded-full border border-primary-container px-8 py-4 text-sm font-extrabold text-primary-container">
                Check Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen3;
