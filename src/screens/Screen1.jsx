import React from 'react';

const Screen1 = () => {
  return (
    <main className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-8 mb-32">
        <div className="max-w-3xl">
          <span className="text-secondary font-headline font-bold tracking-widest uppercase text-xs mb-4 block">Our Purpose</span>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-primary leading-[1.1] tracking-tighter mb-8">
            Connectivity as <br /><span className="text-primary-container">Dignity.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium opacity-80">
            We believe the digital divide is the modern frontier of inequality. Fibrehood exists to bridge that gap with world-class infrastructure for everyone.
          </p>
        </div>
      </header>

      <section className="bg-surface-container-low py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-12 tracking-tight">Why we come to work everyday</h2>
              <div className="space-y-8">
                <div className="glass-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-12 bg-error/40 rounded-full mt-1"></div>
                    <div>
                      <h3 className="text-xl font-headline font-extrabold mb-3 uppercase tracking-tight text-primary">The Cycle of Poverty</h3>
                      <p className="text-on-surface-variant leading-relaxed text-sm">
                        Isolation in the digital age is a trap. Without high-speed access, education remains stagnant, job opportunities vanish, and local economies remain tethered to physical limitations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-12 bg-secondary-container rounded-full mt-1"></div>
                    <div>
                      <h3 className="text-xl font-headline font-extrabold mb-3 uppercase tracking-tight text-primary">Economic Empowerment</h3>
                      <p className="text-on-surface-variant leading-relaxed text-sm">
                        Broadband is the new electricity. By injecting gigabit speeds into marginalized neighborhoods, we unlock remote work, global education, and the digital marketplace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-8 relative mt-12 md:mt-0">
              <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-2xl shadow-2xl relative group">
                <img alt="Modern high-tech fibre optic cables" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo19HHyNDZNkepnznpY1233mSRmRMtOJ808MdezSwK9LS34omRuV94Wv9dWjBN8-JJO7NISm-uRIkjw02wNAtG0g1kODh8ch-kNr-gALq98kJiY1_NAf4tjor3hhByU8GQ0_H7PaL2OOeXqITDCRF-Ou-QKjjF_riwmj2BtsZtPfQrcTPRdIf9SwpVESNltOgV4tTYUy07lbPx_FFFtQ-kJkpdWBD4jZN10qfjQFG-eBaCx8urAdxzsYS76DHk7zfoOgxBe-AhvMc" />
                <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="absolute -bottom-10 -left-20 glass-card-dark p-12 text-on-primary max-w-sm hidden lg:block rounded-xl shadow-2xl z-20">
                <span className="material-symbols-outlined text-4xl mb-4 text-secondary-container" data-icon="bolt">bolt</span>
                <p className="font-headline text-2xl font-bold leading-tight">Empowering 50,000+ households through digital access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-surface-container-low to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-24 items-end mb-24">
            <div className="md:w-2/3">
              <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-primary tracking-tighter mb-12">
                The Dream: <br />Marginalized to <span className="text-secondary">Mainstream</span>.
              </h2>
            </div>
            <div className="md:w-1/3">
              <p className="text-lg text-on-surface-variant font-medium border-l-4 border-primary-container pl-6 py-2 opacity-80">
                Our architecture isn't just about cables; it's about people. We dream of a neighborhood where speed is no longer a luxury.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-card p-12 rounded-2xl flex flex-col justify-between min-h-[400px] shadow-sm hover:shadow-xl transition-all duration-500">
              <div>
                <span className="material-symbols-outlined text-secondary-container text-5xl mb-6" data-icon="hub">hub</span>
                <h4 className="text-3xl font-headline font-bold mb-4 text-primary">A Unified Infrastructure</h4>
                <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">We build proprietary fibre loops that bypass traditional bottlenecks, ensuring that even the most remote corners experience zero-latency connectivity.</p>
              </div>
              <div className="pt-8">
                <button className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all group">
                  EXPLORE OUR NETWORK <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="glass-card-dark p-12 rounded-2xl text-on-primary flex flex-col justify-center shadow-xl">
              <h4 className="text-4xl font-headline font-extrabold mb-6 leading-tight">Digital Equity for All</h4>
              <p className="text-on-primary-container/90 mb-8 font-medium">No credit checks. No hidden fees. Just world-class speed for the people who need it most.</p>
              <div className="w-16 h-1 bg-secondary-container rounded-full"></div>
            </div>

            <div className="glass-card p-12 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-all duration-500">
              <span className="material-symbols-outlined text-6xl mb-4 text-primary" data-icon="school" style={{fontVariationSettings: "'FILL' 1"}}>school</span>
              <h4 className="text-xl font-headline font-bold mb-2">Education First</h4>
              <p className="text-on-surface-variant text-sm font-medium">Providing free high-speed access to every local community center.</p>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden relative group shadow-2xl">
              <img alt="Diverse professionals working" className="w-full h-full object-cover min-h-[350px] grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2qSTN8HibGOZKk2dSDGZ3RVF5tPDiuKKnDOIKI9jvBOom-QW0QFW0HcggxopkDN2s1qE3Ux-qDLzGRerY-HV4yWCGYZLUpUSJXzfw3kluqS9eWjMcxbC6NjKjIeTH2mYdN4uZBsKrNgO44hjqBCDHD6Qe0hxJTQOTPClcyxSiY1PbzkkoasMIr7YYimehC2yOgOmNVfmpB8jfkdrMg9fwEGaguCT8qFQsTvrDeVEiYnC8mxs0oodCmtffPxsK-jBek9hnTFvtX4s" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent flex items-end p-12">
                <span className="text-white font-headline font-bold text-2xl tracking-tight">Connecting talent to the global economy.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-secondary-container/90 backdrop-blur-sm p-16 md:p-24 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-on-secondary-fixed mb-8 tracking-tighter">Ready to join the hood?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <button className="bg-primary-container text-on-primary px-12 py-4 rounded-xl font-headline font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">Check Availability</button>
            <button className="bg-white/30 backdrop-blur-md border-2 border-primary-container/20 text-primary-container px-12 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/50 transition-all">Contact Sales</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen1;