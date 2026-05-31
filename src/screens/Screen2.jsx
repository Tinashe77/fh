import React from 'react';
import heroImage from '../assets/hero.png';

const Screen2 = () => {
  return (
    <main className="pb-20 overflow-hidden">
      <header className="relative min-h-[680px] w-full overflow-hidden pt-32 pb-24 flex items-center bg-primary">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,2,48,0.96)_0%,rgba(3,5,104,0.86)_44%,rgba(3,5,104,0.5)_72%,rgba(3,5,104,0.2)_100%)]" />
        <img
          aria-hidden="true"
          className="absolute right-[-8rem] top-1/2 hidden w-[48rem] max-w-none -translate-y-1/2 opacity-80 lg:block"
          src={heroImage}
          alt=""
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold uppercase tracking-widest bg-secondary-container text-on-secondary-fixed rounded-full shadow-sm">
              Infrastructure Deployment
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 font-headline">
              Installation Pathways
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Streamlined fiber-to-the-home and business solutions tailored for every architectural landscape. Discover the right connection journey for your property.
            </p>
          </div>
        </div>
      </header>

      <div className="px-8 max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

          <div className="glass-card group relative p-10 rounded-4xl transition-all duration-500 hover:shadow-[0_32px_64px_rgba(3,5,104,0.1)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-white/60 rounded-2xl flex items-center justify-center text-primary-container shadow-inner icon-glow">
                <span className="material-symbols-outlined text-4xl" data-icon="home">home</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant/20 font-headline">01</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 font-headline">Residential Suburbs</h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed min-h-[4.5rem]">
              End-to-end fiber connectivity for standalone homes. Our non-invasive trenching technology ensures minimal disruption to your driveway and garden.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Non-invasive micro-trenching
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Same-day activation options
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Standard 20m free cabling
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center group-hover:shadow-lg">
              Express Interest
              <span className="material-symbols-outlined ml-2 text-xl transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="glass-card group relative p-10 rounded-4xl transition-all duration-500 hover:shadow-[0_32px_64px_rgba(3,5,104,0.1)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-white/60 rounded-2xl flex items-center justify-center text-primary-container shadow-inner icon-glow">
                <span className="material-symbols-outlined text-4xl" data-icon="apartment">apartment</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant/20 font-headline">02</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 font-headline">Multi-Dwelling Units</h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed min-h-[4.5rem]">
              Customized infrastructure for apartment blocks and gated communities. We manage the backbone installation to provide every resident with gigabit speeds.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Building management liaison
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Internal riser optimization
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Zero cost to body corporate
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center group-hover:shadow-lg">
              Express Interest
              <span className="material-symbols-outlined ml-2 text-xl transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="glass-card group relative p-10 rounded-4xl transition-all duration-500 hover:shadow-[0_32px_64px_rgba(3,5,104,0.1)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-white/60 rounded-2xl flex items-center justify-center text-primary-container shadow-inner icon-glow">
                <span className="material-symbols-outlined text-4xl" data-icon="business">business</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant/20 font-headline">03</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 font-headline">Commercial Property</h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed min-h-[4.5rem]">
              High-availability connectivity for office parks and retail spaces. Scalable bandwidth that grows with your business and supports heavy cloud workloads.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Dedicated service level agreements
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Redundant pathway design
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Priority technical support
              </li>
            </ul>
            <button className="w-full py-4 bg-primary-container text-on-primary font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center group-hover:shadow-lg">
              Express Interest
              <span className="material-symbols-outlined ml-2 text-xl transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="glass-card group relative p-10 rounded-4xl transition-all duration-500 hover:shadow-[0_32px_64px_rgba(3,5,104,0.1)] hover:-translate-y-1">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-white/60 rounded-2xl flex items-center justify-center text-primary-container shadow-inner icon-glow">
                <span className="material-symbols-outlined text-4xl" data-icon="foundation">foundation</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant/20 font-headline">04</span>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4 font-headline">Property Developers</h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed min-h-[4.5rem]">
              Future-proof your greenfield developments. We partner with developers to integrate fiber infrastructure during the construction phase.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Pre-wiring during construction
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Value-add for property sales
              </li>
              <li className="flex items-center text-sm font-medium text-on-surface/80">
                <span className="material-symbols-outlined text-secondary mr-3 text-xl" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                Turnkey utility management
              </li>
            </ul>
            <button className="w-full py-4 bg-secondary-container text-on-secondary-fixed font-bold rounded-2xl hover:brightness-105 transition-all flex items-center justify-center group-hover:shadow-lg">
              Express Interest
              <span className="material-symbols-outlined ml-2 text-xl transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>

      <section className="bg-surface-container-low/50 py-32 rounded-[4rem] mx-4 mb-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-primary-container/5 rounded-4xl blur-3xl"></div>
            <img alt="Technical installation" className="relative rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.15)] w-full object-cover h-[560px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlzUTFGndkKNc7VALwsBaB_29TSgJ0a5sA0Jj1TvzWQp2ClMN6fOlaxxfvnali0y5DHGOVbb5weDOshsJ1nSG9fJz6Z0AoE0GNxs6wrk9SKM5SVEa_o9YWs7DxvAyhFwo0G10GrPpofYTwyLXezmjb5bZpEn00vwdR8IQSd-zQkAkWFPoXq75v912WH20SSdMP_IawNhElN4IX2HeoZJqXIj0LQe_qTN7opMsmvMJDbvtNoBne5qsBi5rSdWlN2PlIQ-qqUEa-2yA" />
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight font-headline">Can't find your category?</h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
              Our engineering team specializes in bespoke infrastructure layouts. If you have a unique property requirement, our digital architects are ready to map a path for you.
            </p>
            <a className="text-primary-container font-bold text-xl inline-flex items-center group" href="#">
              <span className="border-b-2 border-primary-container/20 pb-1 group-hover:border-primary-container transition-colors">Contact Engineering Team</span>
              <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-2" data-icon="trending_flat">trending_flat</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Screen2;
