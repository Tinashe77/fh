import React from 'react';

const faqs = [
  {
    question: 'What is this initiative all about?',
    answer:
      'Fibrehood is building a fixed fibre optic telecommunications network to deliver broadband services in residential areas and buildings, subject to feasibility criteria being met.',
  },
  {
    question: 'What is FTTH?',
    answer:
      'Fibre-to-the-home is the installation of optical fibre directly to homes, apartments and buildings to provide high-speed internet access.',
  },
  {
    question: 'What does open access mean?',
    answer:
      'Open access means multiple service providers can deliver services over the Fibrehood network, allowing residents to choose and switch between ISP options.',
  },
  {
    question: 'Why install Fibrehood if another fibre network exists?',
    answer:
      'A closed network limits provider choice and can lead to repeated infrastructure installations. Fibrehood is designed as open access infrastructure so residents can choose services without future duplication.',
  },
  {
    question: 'What enables installation in a building or area?',
    answer:
      'Feasibility depends on the number of units, resident demand, other fibre infrastructure in the area, and existing ducts, poles or other usable infrastructure.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Timing depends on the building or area size and is confirmed after survey. A typical installation is generally completed within about three months.',
  },
  {
    question: 'What is the cost of Fibrehood installation?',
    answer:
      'Network infrastructure through the building and to home units is installed at no cost to tenants or residents associations because it is funded by Fibrehood.',
  },
  {
    question: 'Are residents required to sign up once the network is installed?',
    answer:
      'No. Residents are not obliged to subscribe. Only residents who choose a service package pay service costs.',
  },
  {
    question: 'What do I pay when subscribing?',
    answer:
      'A subscriber typically pays an activation or connection fee, a service subscription, and a Wi-Fi router if it is not provided by the selected ISP.',
  },
  {
    question: 'Who do I contact for support?',
    answer:
      'If you subscribe through one of Fibrehood’s ISP partners, support and communication normally comes from that ISP. Fibrehood becomes directly involved where network infrastructure issues need attention.',
  },
];

const FaqPage = () => {
  return (
    <main className="bg-white pb-20">
      <section className="relative flex min-h-[440px] items-center overflow-hidden bg-primary-container pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,5,104,0.98),rgba(3,5,104,0.84),rgba(253,204,0,0.22))]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-8 hero-readable">
          <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
            Support
          </span>
          <h1 className="max-w-4xl font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Frequently asked questions
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white md:text-lg">
            Practical answers about Fibrehood installation, open access fibre, activation and support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 py-20">
        <div className="grid gap-5">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-primary-container/10 bg-surface-container-low p-6">
              <h2 className="font-headline text-xl font-extrabold text-primary-container">{item.question}</h2>
              <p className="mt-3 leading-relaxed text-on-surface-variant">{item.answer}</p>
            </article>
          ))}
        </div>

        <a
          href="/docs/faq.pdf"
          className="mt-10 inline-flex rounded-full bg-primary-container px-8 py-4 font-extrabold text-white transition hover:bg-black"
        >
          Download full FAQ
        </a>
      </section>
    </main>
  );
};

export default FaqPage;
