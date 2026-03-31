import React from 'react';

const Screen3 = () => {
  return (
    <main className="pt-40 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="inline-block py-1.5 px-4 bg-secondary-fixed/50 backdrop-blur-sm text-on-secondary-fixed text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Premium Connectivity
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight font-headline">
            Architected for Speed.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Choose a plan that matches your digital lifestyle. Transparent pricing, no hidden fees, and the most reliable fiber network in Zimbabwe.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="glass-card p-10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-container mb-2 font-headline">Residential Home Connect</h3>
                <p className="text-on-surface-variant">Perfect for households and streaming.</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-outline">Starting at</span>
                <div className="text-4xl font-black text-primary font-headline">US$40<span className="text-lg font-normal text-outline">/pm</span></div>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Speeds up to 25 Mbps</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Unlimited Data Allowance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Dual-band Wi-Fi 6 Router</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Next-Day Installation</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-full hover:opacity-95 transition-all flex items-center justify-center gap-2 group">
              Get Started <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="glass-glow relative p-10 rounded-2xl transform md:-translate-y-4 transition-all duration-500 hover:shadow-[0_50px_90px_-20px_rgba(253,204,0,0.3)]">
            <div className="absolute top-0 right-10 -translate-y-1/2 px-5 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-black rounded-full uppercase tracking-tight shadow-md">
              Recommended
            </div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-container mb-2 font-headline">SME Business Plans</h3>
                <p className="text-on-surface-variant">Enterprise reliability for growing teams.</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-outline">Starting at</span>
                <div className="text-4xl font-black text-primary font-headline">US$75<span className="text-lg font-normal text-outline">/pm</span></div>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-on-surface font-medium">Symmetric Speeds (50 Mbps+)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-on-surface font-medium">Dedicated Priority Support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-on-surface font-medium">Static IP Address Included</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-on-surface font-medium">99.95% SLA Guarantee</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-secondary-container text-on-secondary-container font-black rounded-full hover:brightness-105 transition-all flex items-center justify-center gap-2 group shadow-lg">
              Sign Up Now <span className="material-symbols-outlined transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" data-icon="rocket_launch">rocket_launch</span>
            </button>
          </div>

        </div>
      </section>

      <section className="mb-32">
        <div className="bg-surface-container-low/50 py-24 rounded-[3rem] mx-4">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary-container mb-8 leading-tight font-headline">
                Uptime Guaranteed.<br />Value Engineered.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>speed</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 font-headline">99.95% Network Availability</h4>
                    <p className="text-on-surface-variant">Our self-healing infrastructure ensures your business stays online when it matters most.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>local_atm</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 font-headline">Best Value in Zimbabwe</h4>
                    <p className="text-on-surface-variant">Competitive pricing models designed to bring high-speed fiber to every neighborhood.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl">
              <img alt="Server room with blue lighting" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGRDuD1Kx7PA_PFyLf_cLT2TAtzjp9CcyJwQvYG69xXx4qSj4BgD74EDLb0uOiG1oXKgDvkwrbAQrAsaB5HPRM7CXCgXwiK6JTbLhobIsZrW46iP1vbYg1xfHN76hk0Sa7qZwIq8LV-NDWxg8Un6wEcA1LnfHr75LHRDSpGEpKQ_HowZLjILmFSuVY-5CHtT5SeAjp33lV-Qv7RaDMBodpH7cnKwfTpjN9NRkBs5QaRwVQVRRu7s7B1FbCsb28dKmTXpjvg2kPXVM" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-10">
                <p className="text-white text-xl font-bold italic leading-relaxed">"Powering the next generation of Zimbabwean digital entrepreneurs."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight font-headline">Detailed Matrix</h2>
          <p className="text-on-surface-variant text-lg">Compare speed tiers and intended activities.</p>
        </div>
        <div className="overflow-x-auto rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-xl">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="p-8 font-bold text-primary-container border-b border-outline-variant/30 text-lg">Activity Comparison</th>
                <th className="p-8 font-bold text-primary-container border-b border-outline-variant/30 text-center text-lg">10 Mbps</th>
                <th className="p-8 font-bold text-primary-container border-b border-outline-variant/30 text-center text-lg">25 Mbps</th>
                <th className="p-8 font-bold text-primary-container border-b border-outline-variant/30 text-center text-lg">50 Mbps+</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container-low/20 transition-colors">
                <td className="p-8 font-medium">Standard Browsing &amp; Email</td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
              </tr>
              <tr className="bg-surface-container-low/10 hover:bg-surface-container-low/20 transition-colors">
                <td className="p-8 font-medium">HD Video Streaming (1 Device)</td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
              </tr>
              <tr className="hover:bg-surface-container-low/20 transition-colors">
                <td className="p-8 font-medium">4K Ultra HD Streaming</td>
                <td className="p-8 text-center text-outline-variant">—</td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
              </tr>
              <tr className="bg-surface-container-low/10 hover:bg-surface-container-low/20 transition-colors">
                <td className="p-8 font-medium">Multi-Device Heavy Usage</td>
                <td className="p-8 text-center text-outline-variant">—</td>
                <td className="p-8 text-center text-outline-variant">—</td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full" data-icon="check">check</span></td>
              </tr>
              <tr className="hover:bg-surface-container-low/20 transition-colors">
                <td className="p-8 font-medium">Cloud Backup &amp; Large File Uploads</td>
                <td className="p-8 text-center text-outline-variant">—</td>
                <td className="p-8 text-center text-outline-variant">—</td>
                <td className="p-8 text-center"><span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full font-bold" data-icon="check">check</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 mb-20">
        <div className="bg-secondary-container p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10 text-on-secondary-container shadow-[0_40px_100px_-20px_rgba(253,204,0,0.4)]">
          <div className="max-w-md">
            <h2 className="text-4xl font-black mb-4 tracking-tighter">Ready for a faster hood?</h2>
            <p className="font-medium text-lg opacity-80 leading-relaxed">Check availability in your area and get connected within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-10 py-5 bg-primary-container text-on-primary font-bold rounded-full shadow-2xl hover:-translate-y-1 transition-all active:scale-95 text-lg">
              Check Availability
            </button>
            <button className="px-10 py-5 bg-white/30 backdrop-blur-md text-primary-container font-bold rounded-full border border-primary-container/10 hover:bg-white/50 transition-all active:scale-95 text-lg">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen3;