import React from 'react';

const Screen4 = () => {
  return (
    <main className="pt-20">
      <section className="relative min-h-[850px] flex items-center bg-surface hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center px-4 py-1.5 glass-effect text-primary-container rounded-full text-xs font-bold tracking-widest uppercase border border-primary-container/10">
              <span className="w-2 h-2 bg-secondary-container rounded-full mr-2 animate-pulse"></span>
              Empowering Communities
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tight">
              Affordable, accessible and <span className="text-primary-container relative">high quality<span className="absolute bottom-2 left-0 w-full h-3 bg-secondary-container/30 -z-10 rounded-full"></span></span> fibre.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We are building the future of digital infrastructure, connecting suburbs, MDUs, and businesses to the global economy with light-speed reliability.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="px-10 py-5 bg-secondary-container text-on-secondary-fixed font-bold rounded-full shadow-glass-heavy hover:scale-105 active:scale-95 transition-all glow-yellow">
                View Service Plans
              </button>
              <button className="px-10 py-5 text-primary-container font-bold flex items-center gap-2 group transition-all">
                Learn about Fibrehood <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-glass-heavy rotate-2 scale-105 border-[12px] border-white/50 backdrop-blur-sm">
              <img className="w-full aspect-square object-cover" data-alt="Modern geometric patterns in deep navy blue and bright yellow representing digital connectivity and network signals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACUz7L5eAcskSZ0sIeTipMvA_0GP0ICe3gjOZs04h7ZOc3oS9cxt_HcgGgMYpUMpl1dM1L-tGj8WJ1hNaqBYW7eLk2mxkYpWyOIcKqbizn5_rzMuJuGRHFWq2t_kYGCnJIhsrFXUIVAXgMar8g8IQdHjAWT3oMqodH6yzBepn4BH1AuaS9RYC3CpR02Sr7LK1uzdvFRff-22MC9DmstF7AtFUQ4zhEZAlxrnRLsccuRxDmiNpHCd5maTihVpq8x4V0viBeqJp_8Ic" />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-effect p-8 rounded-3xl shadow-glass-heavy max-w-[260px] hidden md:block border border-white/40">
              <div className="flex items-center gap-4 mb-3">
                <span className="p-3 bg-secondary-container rounded-2xl text-on-secondary-container shadow-inner">
                  <span className="material-symbols-outlined" data-icon="speed">speed</span>
                </span>
                <span className="font-extrabold text-2xl text-primary-container">1Gbps</span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant leading-relaxed">Gigabit speeds available across all new MDU installations.</p>
            </div>
          </div>
        </div>

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[150px]"></div>
      </section>

      <section className="relative z-20 -mt-12 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-effect rounded-full p-3 shadow-glass-heavy flex flex-col md:flex-row items-center gap-2 border border-white/60">
            <div className="flex-1 flex items-center px-8 gap-4 w-full">
              <span className="material-symbols-outlined text-primary-container scale-125" data-icon="location_on">location_on</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-lg font-medium text-on-surface placeholder:text-outline/60 outline-none" placeholder="Enter your address to check fibre availability..." type="text" />
            </div>
            <button className="w-full md:w-auto px-12 py-5 bg-primary-container text-on-primary font-bold rounded-full hover:bg-black hover:shadow-2xl transition-all flex items-center justify-center gap-3 scale-95 active:scale-90">
              <span className="material-symbols-outlined" data-icon="search">search</span>
              Check Coverage
            </button>
          </div>

          <div className="mt-16 rounded-3xl overflow-hidden aspect-[21/9] bg-surface-container shadow-glass-heavy border border-white/40 relative group min-h-[300px]">
            <img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" data-alt="Stylized modern map interface with interactive connectivity pins showing network coverage across an urban neighborhood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy4I6rhJMglrPfzeuD6w_RvB-X2TefqG9U26yGQ-KobpHKAD0P0LsSIMPdwxV4VcqbejILywYdYn-7_ZJm6WNgUu_wvoi18vu5Trd448ReeK-Kug8CioToJFdJWS3lsyevu6nIVr8fpndDbtX2lho4NCTqfm9xpLP_or_ApTYj3ubKjIKCVFzXz1S-gwba7vTw0BJA_hJxD2fwHUJOkzlAXX-oSSDFstp1vH1uip2sO2aerE5wuql_epke51RBT7sZlFdkWaHHJzs" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 glass-effect px-8 py-4 rounded-full flex items-center gap-4 border border-white/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-extrabold text-primary-container tracking-wider uppercase">Live Network Status: Operational</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-primary mb-8 tracking-tight">
                Built for the modern <br /><span className="text-primary-container">South African</span> community.
              </h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                We don't just provide internet; we provide the architecture for growth, learning, and connection.
              </p>
            </div>
            <div className="pb-4">
              <div className="w-32 h-2 bg-secondary-container rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="glass-effect-dark p-12 rounded-3xl space-y-8 hover:translate-y-[-12px] transition-all duration-500 hover:shadow-glass group">
              <div className="w-20 h-20 bg-primary-container flex items-center justify-center rounded-2xl shadow-lg group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-white text-4xl" data-icon="bolt">bolt</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">Ultra-Fast Speeds</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">Experience symmetrical upload and download speeds that handle 4K streaming and high-intensity gaming with zero lag.</p>
            </div>

            <div className="glass-effect-dark p-12 rounded-3xl space-y-8 hover:translate-y-[-12px] transition-all duration-500 hover:shadow-glass group border-t-8 border-secondary-container">
              <div className="w-20 h-20 bg-secondary-container flex items-center justify-center rounded-2xl shadow-lg group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-fixed text-4xl" data-icon="verified_user">verified_user</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">Unmatched Reliability</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">Our infrastructure is built with the latest fibre-optic technology, ensuring 99.9% uptime for homes and businesses.</p>
            </div>

            <div className="glass-effect-dark p-12 rounded-3xl space-y-8 hover:translate-y-[-12px] transition-all duration-500 hover:shadow-glass group">
              <div className="w-20 h-20 bg-slate-900 flex items-center justify-center rounded-2xl shadow-lg group-hover:rotate-6 transition-transform">
                <span className="material-symbols-outlined text-white text-4xl" data-icon="payments">payments</span>
              </div>
              <h3 className="text-2xl font-headline font-bold">Truly Affordable</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">No hidden costs. No contracts. Just transparent pricing that brings world-class internet to everyone.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-primary-container rounded-3xl p-12 lg:p-24 relative overflow-hidden shadow-glass-heavy">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-white leading-tight tracking-tight">
                Ready to join the <br /><span className="text-secondary-container glow-yellow">Fibrehood?</span>
              </h2>
              <p className="text-on-primary-container text-xl leading-relaxed opacity-90">
                Join thousands of households and businesses already experiencing the Fibrehood difference. Simple setup, expert support.
              </p>
              <div className="flex gap-4">
                <button className="px-12 py-5 bg-secondary-container text-on-secondary-fixed font-extrabold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl glow-yellow">
                  View Service Plans
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-1 group hover:rotate-0 transition-all duration-700">
                <img className="w-full h-[450px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3UNXQNyKqFvsU_KWV65SeUV42VQ-O3mhWG7k3OHK2URZyEUPEeiUAlsVfuRG1NfQzZZ6ws_8wUs5xeOTGgp80iM4E0KxhILn1wgkrCuadEHeJ6el-xSQSZmZwS8XU9vc0rY4u1rhAGomFVoMjXuc4YMHBiE0BePIViYUCUuMAHhjOSEN82qYbe5-cFQoxgSX_mQSiqWxOMoErgBfEDfSfwpl_zN_oOcCBWlWa-3YgszbI3ScacmbGWZCr4oIscwKONQrJ3bypFMc" />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="absolute top-0 right-0 h-full w-px bg-white/5 translate-x-[-150px]"></div>
          <div className="absolute top-0 right-0 h-full w-px bg-white/5 translate-x-[-300px]"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </main>
  );
};

export default Screen4;