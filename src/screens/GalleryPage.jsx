import React from 'react';

const galleryImages = [
  {
    src: '/assets/fibrehood-installation.jpeg',
    title: 'Fibrehood field installation',
    caption: 'On-site fibre implementation work.',
  },
  {
    src: '/assets/engineers-working.jpeg',
    title: 'Engineering team',
    caption: 'Technical teams working on network rollout.',
  },
  {
    src: '/assets/fibrehood-box.jpeg',
    title: 'Fibre access equipment',
    caption: 'Installed Fibrehood access infrastructure.',
  },
  {
    src: '/assets/fibrehood-ladder.jpeg',
    title: 'Aerial installation',
    caption: 'Field work during deployment.',
  },
  {
    src: '/assets/fibrehood-southview.jpeg',
    title: 'Southview rollout',
    caption: 'Southview Park FTTH deployment activity.',
  },
  {
    src: '/assets/fibrehood-team.jpeg',
    title: 'Fibrehood team',
    caption: 'Team members supporting community rollout.',
  },
  {
    src: '/assets/fibrehood-team-portrait.jpg',
    title: 'Fibrehood operations',
    caption: 'People behind the network.',
  },
  {
    src: '/assets/team-fibrehood.jpeg',
    title: 'Project team',
    caption: 'Fibrehood project delivery team.',
  },
];

const GalleryPage = () => {
  return (
    <main className="bg-white pb-20">
      <section
        className="relative flex min-h-[430px] items-center overflow-hidden pt-28"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(1,2,48,0.94) 0%, rgba(3,5,104,0.78) 43%, rgba(3,5,104,0.42) 72%, rgba(3,5,104,0.2) 100%), url(/assets/fibrehood-southview.jpeg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,48,0.24)_0%,rgba(1,2,48,0.08)_46%,rgba(1,2,48,0.72)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 60px)' }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 hero-readable">
          <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-on-secondary-fixed">
            Gallery
          </span>
          <h1 className="max-w-4xl font-headline text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Fibrehood in the field.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white md:text-lg">
            Real rollout, installation, and team images from Fibrehood projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-2xl border border-primary-container/10 bg-white shadow-sm">
              <img src={image.src} alt={image.title} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h2 className="font-headline text-xl font-extrabold text-primary-container">{image.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{image.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
