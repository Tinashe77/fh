import React from 'react';
import { Link } from 'react-router-dom';
import { documents } from '../data/documents';

const resourceOrder = ['residential-sla', 'business-sla', 'terms', 'privacy', 'fair-use'];

const contactChannels = [
  { label: 'Fibrehood Business', value: '+263 780 797 695', href: 'tel:+263780797695', icon: 'business_center' },
  { label: 'Billing', value: '+263 780 257 425', href: 'tel:+263780257425', icon: 'receipt_long' },
  { label: 'Customer Support', value: '+263 784 416 605', href: 'tel:+263784416605', icon: 'support_agent' },
  { label: 'Support Email', value: 'support@fibrehood.co.zw', href: 'mailto:support@fibrehood.co.zw', icon: 'mail' },
  { label: 'Sales & Marketing', value: '+263 780 711 337', href: 'tel:+263780711337', icon: 'campaign' },
  { label: 'Sales Email', value: 'sales@fibrehood.co.zw', href: 'mailto:sales@fibrehood.co.zw', icon: 'alternate_email' },
];

const SupportPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-primary-container pt-36">
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
        <div className="mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary">Contact</span>
          <h2 className="mt-3 font-headline text-4xl font-extrabold text-primary-container">
            Official communication channels
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="rounded-2xl border border-primary-container/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glass"
              >
                <span className="material-symbols-outlined text-secondary-container">{channel.icon}</span>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant">{channel.label}</p>
                <p className="mt-2 font-headline text-xl font-extrabold text-primary-container">{channel.value}</p>
              </a>
            ))}
          </div>
          <a
            href="https://whatsapp.com/channel/0029VazOoMWDzgT62zEu2L36"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-secondary-container px-8 py-4 font-extrabold text-on-secondary-fixed transition hover:bg-yellow-300"
          >
            Join Fibrehood WhatsApp Channel
          </a>
        </div>

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
                <p className="mt-4 inline-flex rounded-full bg-surface-container-low px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary-container">
                  View PDF
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
