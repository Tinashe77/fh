import React from 'react';

const Screen5 = () => {
  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-8 mb-20 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase rounded mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="group relative bg-surface-container-lowest p-10 rounded-xl shadow-sm border-l-4 border-transparent hover:border-secondary-container transition-all duration-300">
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
                <span className="material-symbols-outlined text-secondary" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Speeds up to 25 Mbps</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Unlimited Data Allowance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Dual-band Wi-Fi 6 Router</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span className="text-on-surface font-medium">Next-Day Installation</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Get Started <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="group relative bg-primary-container p-10 rounded-xl shadow-lg transform md:-translate-y-4">
            <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-secondary-container text-on-secondary-container text-xs font-black rounded-full uppercase tracking-tighter">
              Recommended
            </div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-headline">SME Business Service Plans</h3>
                <p className="text-blue-200">Enterprise reliability for growing teams.</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-blue-300">Starting at</span>
                <div className="text-4xl font-black text-white font-headline">US$75<span className="text-lg font-normal text-blue-300">/pm</span></div>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-white font-medium">Symmetric Speeds (50 Mbps+)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-white font-medium">Dedicated Priority Support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-white font-medium">Static IP Address Included</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <span className="text-white font-medium">99.95% SLA Guarantee</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-secondary-container text-on-secondary-container font-black rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Sign Up Now <span className="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
            </button>
          </div>

        </div>
      </section>

      <section className="mb-32">
        <div className="bg-surface-container-low py-20">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-primary-container mb-6 leading-tight font-headline">
                Uptime Guaranteed.<br />Value Engineered.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl" data-icon="speed" style={{fontVariationSettings: "'FILL' 1"}}>speed</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 font-headline">99.95% Network Availability</h4>
                    <p className="text-on-surface-variant">Our self-healing infrastructure ensures your business stays online when it matters most.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl" data-icon="local_atm" style={{fontVariationSettings: "'FILL' 1"}}>local_atm</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 font-headline">Best Value in Zimbabwe</h4>
                    <p className="text-on-surface-variant">Competitive pricing models designed to bring high-speed fiber to every neighborhood.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
              <img alt="Server room with blue lighting" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGRDuD1Kx7PA_PFyLf_cLT2TAtzjp9CcyJwQvYG69xXx4qSj4BgD74EDLb0uOiG1oXKgDvkwrbAQrAsaB5HPRM7CXCgXwiK6JTbLhobIsZrW46iP1vbYg1xfHN76hk0Sa7qZwIq8LV-NDWxg8Un6wEcA1LnfHr75LHRDSpGEpKQ_HowZLjILmFSuVY-5CHtT5SeAjp33lV-Qv7RaDMBodpH7cnKwfTpjN9NRkBs5QaRwVQVRRu7s7B1FbCsb28dKmTXpjvg2kPXVM" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold italic">"Powering the next generation of Zimbabwean digital entrepreneurs."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-headline">Detailed Matrix</h2>
          <p className="text-on-surface-variant">Compare speed tiers and intended activities.</p>
        </div>
        <div className="overflow-x-auto rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-surface-container">
                <th className="p-6 font-bold text-primary-container border-b border-outline-variant/30">Activity Comparison</th>
                <th className="p-6 font-bold text-primary-container border-b border-outline-variant/30 text-center">10 Mbps</th>
                <th className="p-6 font-bold text-primary-container border-b border-outline-variant/30 text-center">25 Mbps</th>
                <th className="p-6 font-bold text-primary-container border-b border-outline-variant/30 text-center">50 Mbps+</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr>
                <td className="p-6 font-medium">Standard Browsing &amp; Email</td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
              </tr>
              <tr className="bg-surface-container-low/30">
                <td className="p-6 font-medium">HD Video Streaming (1 Device)</td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
              </tr>
              <tr>
                <td className="p-6 font-medium">4K Ultra HD Streaming</td>
                <td className="p-6 text-center text-outline-variant">—</td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
              </tr>
              <tr className="bg-surface-container-low/30">
                <td className="p-6 font-medium">Multi-Device Heavy Usage</td>
                <td className="p-6 text-center text-outline-variant">—</td>
                <td className="p-6 text-center text-outline-variant">—</td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check">check</span></td>
              </tr>
              <tr>
                <td className="p-6 font-medium">Cloud Backup &amp; Large File Uploads</td>
                <td className="p-6 text-center text-outline-variant">—</td>
                <td className="p-6 text-center text-outline-variant">—</td>
                <td className="p-6 text-center"><span className="material-symbols-outlined text-green-600" data-icon="check" style={{fontVariationSettings: "'wght' 700"}}>check</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 mb-20">
        <div className="bg-secondary-container p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-on-secondary-container">
          <div>
            <h2 className="text-3xl font-black mb-2 font-headline">Ready for a faster hood?</h2>
            <p className="font-medium opacity-80">Check availability in your area and get connected within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 bg-primary-container text-on-primary font-bold rounded-lg shadow-xl hover:-translate-y-1 transition-all">
              Check Availability
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-primary-container font-bold rounded-lg border border-primary-container/10 hover:bg-white/30 transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen5;