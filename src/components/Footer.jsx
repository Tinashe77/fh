import { Link } from 'react-router-dom';

const Footer = () => {
  const contactChannels = [
    { group: 'Call Lines', items: [
      { label: 'Fibrehood Business', value: '+263 780 797 695', href: 'tel:+263780797695' },
      { label: 'Billing', value: '+263 780 257 425', href: 'tel:+263780257425' },
      { label: 'Customer Support', value: '+263 784 416 605', href: 'tel:+263784416605' },
      { label: 'Sales & Marketing', value: '+263 780 711 337', href: 'tel:+263780711337' },
    ] },
    { group: 'Emails', items: [
      { label: 'Support', value: 'support@fibrehood.co.zw', href: 'mailto:support@fibrehood.co.zw' },
      { label: 'Sales', value: 'sales@fibrehood.co.zw', href: 'mailto:sales@fibrehood.co.zw' },
    ] },
  ];

  return (
    <footer className="w-full bg-[#010f3d] font-['Manrope'] text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto px-10 pt-16 pb-10 flex flex-col md:flex-row justify-between gap-12">

        {/* Brand column */}
        <div className="space-y-5 max-w-xs shrink-0">
          <img
            src="/assets/web-logo-light.png"
            alt="Fibrehood"
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="text-white/50 text-sm leading-relaxed">
            Potential lives everywhere.
          </p>

          <div className="space-y-4 pt-1">
            {contactChannels.map(({ group, items }) => (
              <div key={group}>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-yellow-400">{group}</p>
                <div className="space-y-1.5">
                  {items.map(({ label, value, href }) => (
                    <a key={label} href={href} className="block text-xs text-white/55 transition hover:text-yellow-400">
                      <span className="font-bold text-white/75">{label}:</span> {value}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://whatsapp.com/channel/0029VazOoMWDzgT62zEu2L36"
            className="inline-flex rounded-full border border-yellow-400/35 px-4 py-2 text-xs font-extrabold text-yellow-400 transition hover:bg-yellow-400 hover:text-blue-950"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>

          <div className="flex gap-3 pt-1">
            {[
              { label: 'f', href: '#', title: 'Facebook' },
              { label: 'in', href: '#', title: 'LinkedIn' },
              { label: '▶', href: '#', title: 'YouTube' },
            ].map(({ label, href, title }) => (
              <a
                key={title}
                href={href}
                title={title}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-yellow-400 hover:border-yellow-400/50 transition-colors duration-200 text-xs font-bold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 flex-1">

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-yellow-400 font-extrabold uppercase tracking-widest text-[11px]">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Fibre Plans', to: '/fibre-plans' },
                { label: 'Get Connected', to: '/get-connected' },
                { label: 'Partner Us', to: '/partner-us' },
                { label: 'Southview Project', to: '/southview' },
                { label: 'Gallery', to: '/gallery' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/50 hover:text-yellow-400 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-yellow-400 font-extrabold uppercase tracking-widest text-[11px]">Support</h4>
            <ul className="space-y-3">
              {[
                { label: 'FAQ', to: '/faq' },
                { label: 'Support', to: '/support' },
                { label: 'Coverage', to: '/coverage' },
                { label: 'Client Portal', to: '/portal' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/50 hover:text-yellow-400 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-yellow-400 font-extrabold uppercase tracking-widest text-[11px]">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Terms & Conditions', to: '/terms' },
                { label: 'Privacy Policy', to: '/privacy' },
                { label: 'Fair Use Policy', to: '/fair-use' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/50 hover:text-yellow-400 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/35 text-xs">
            © 2026 Fibrehood (Pvt) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
