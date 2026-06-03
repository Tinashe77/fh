import React from 'react';
import { Link } from 'react-router-dom';
import { documents } from '../data/documents';

const resourceOrder = ['residential-sla', 'business-sla', 'terms', 'privacy', 'fair-use'];

const SupportPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-primary-container pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,5,104,0.98),rgba(3,5,104,0.82),rgba(253,204,0,0.20))]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-8 hero-readable">
          <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
            Support
          </span>
          <h1 className="max-w-4xl font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Customer documents and support resources.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white md:text-lg">
            Find Fibrehood FAQs, service-level documents, terms, privacy information and network-use policies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/faq" className="rounded-2xl border border-primary-container/10 bg-surface-container-low p-6 transition hover:-translate-y-1 hover:shadow-glass">
            <span className="material-symbols-outlined text-secondary-container">help</span>
            <h2 className="mt-4 font-headline text-2xl font-extrabold text-primary-container">FAQ</h2>
            <p className="mt-2 leading-relaxed text-on-surface-variant">Installation, open access, activation and support answers.</p>
          </Link>

          {resourceOrder.map((slug) => {
            const doc = documents[slug];
            return (
              <Link key={slug} to={`/documents/${slug}`} className="rounded-2xl border border-primary-container/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass">
                <span className="material-symbols-outlined text-secondary-container">description</span>
                <h2 className="mt-4 font-headline text-2xl font-extrabold text-primary-container">{doc.title}</h2>
                <p className="mt-2 leading-relaxed text-on-surface-variant">{doc.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
