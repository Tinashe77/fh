import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { documents } from '../data/documents';

const DocumentPage = () => {
  const { slug = 'terms' } = useParams();
  const doc = documents[slug] || documents.terms;

  return (
    <main className="bg-white pb-20">
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-primary-container pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,5,104,0.98),rgba(3,5,104,0.84),rgba(253,204,0,0.20))]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-8 hero-readable">
          <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
            {doc.label}
          </span>
          <h1 className="max-w-4xl font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">{doc.title}</h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white md:text-lg">{doc.summary}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-8 py-20 lg:grid-cols-[0.8fr_0.42fr]">
        <div className="rounded-3xl border border-primary-container/10 bg-surface-container-low p-8">
          <h2 className="font-headline text-3xl font-extrabold text-primary-container">Key points</h2>
          <div className="mt-8 grid gap-4">
            {doc.points.map((point) => (
              <div key={point} className="flex gap-4 rounded-2xl bg-white p-5">
                <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <p className="font-semibold leading-relaxed text-on-surface-variant">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl bg-primary-container p-8 text-white">
          <h2 className="font-headline text-3xl font-extrabold">Original document</h2>
          <p className="mt-3 leading-relaxed text-white/70">
            This page is a summary. The PDF remains the authoritative document.
          </p>
          <a href={doc.file} className="mt-8 inline-flex rounded-full bg-secondary-container px-8 py-4 font-extrabold text-on-secondary-fixed transition hover:bg-yellow-300">
            Open PDF
          </a>
          <div className="mt-8 border-t border-white/10 pt-6">
            <Link to="/support" className="font-bold text-secondary-container hover:text-yellow-300">
              View all resources
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default DocumentPage;
