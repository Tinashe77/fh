import { Link } from 'react-router-dom';

const Footer = () => {
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
            Building world-class fibre infrastructure for the next generation of connectivity.
          </p>

          {/* Social media icons */}
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
            <h4 className="text-white font-extrabold uppercase tracking-widest text-[11px]">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', to: '/' },
                { label: 'Service Plans', to: '/service-plans' },
                { label: 'Installation', to: '/installation' },
                { label: 'Southview Project', to: '/southview' },
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
            <h4 className="text-white font-extrabold uppercase tracking-widest text-[11px]">Support</h4>
            <ul className="space-y-3">
              {[
                { label: 'FAQ', to: '/faq' },
                { label: 'Support', to: '/support' },
                { label: 'Network Status', to: '/network-status' },
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
            <h4 className="text-white font-extrabold uppercase tracking-widest text-[11px]">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Terms & Conditions', to: '/terms' },
                { label: 'Privacy Policy', to: '/privacy' },
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
            © 2024 Fibrehood Connectivity (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            {[
              { label: 'FAQ', to: '/faq' },
              { label: 'Support', to: '/support' },
              { label: 'Terms & Conditions', to: '/terms' },
              { label: 'Privacy Policy', to: '/privacy' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-white/40 hover:text-yellow-400 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
