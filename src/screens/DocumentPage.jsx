import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { documents } from '../data/documents';

const DocumentPage = () => {
  const { slug = 'terms' } = useParams();
  const doc = documents[slug] || documents.terms;

  return (
    <main className="bg-white pb-20">
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-primary-container pt-36">
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
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 py-20">
        <div className="rounded-3xl border border-primary-container/10 bg-surface-container-low p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-secondary">Official PDF</p>
              <h2 className="mt-2 font-headline text-3xl font-extrabold text-primary-container">{doc.title}</h2>
            </div>
            <a href={doc.file} className="inline-flex rounded-full bg-secondary-container px-8 py-4 font-extrabold text-on-secondary-fixed transition hover:bg-yellow-300">
              Open PDF
            </a>
          </div>

          <iframe
            src={doc.file}
            title={doc.title}
            className="mt-6 h-[720px] w-full rounded-2xl border border-primary-container/10 bg-white"
          />

          <a href={doc.file} className="mt-6 inline-flex rounded-full bg-primary-container px-8 py-4 font-extrabold text-white transition hover:bg-black">
            Open PDF
          </a>
          <div className="mt-8 border-t border-primary-container/10 pt-6">
            <Link to="/support" className="font-bold text-secondary-container hover:text-yellow-300">
              View all resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DocumentPage;
