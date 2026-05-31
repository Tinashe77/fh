import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    name: 'Home',
    path: '/',
    sub: [
      { name: 'About Us', path: '/#about' },
      { name: 'Value Proposition', path: '/#value' },
      { name: 'Our Partners', path: '/#partners' },
      { name: 'Get Connected', path: '/#get-connected' },
    ],
  },
  {
    name: 'Service Plans',
    path: '/service-plans',
    sub: [
      { name: 'Residential', path: '/service-plans/residential' },
      { name: 'Business', path: '/service-plans/business' },
    ],
  },
  {
    name: 'Installation',
    path: '/installation',
    sub: [
      { name: 'Coverage', path: '/network-status' },
      { name: 'Residential Suburbs', path: '/installation/residential-suburbs' },
      { name: 'Multi Dwelling Units', path: '/installation/multi-dwelling-units' },
      { name: 'Commercial Property', path: '/installation/commercial-property' },
    ],
  },
  {
    name: 'Network Status',
    path: '/network-status',
    sub: [
      { name: 'Coverage Map', path: '/network-status' },
      { name: 'Network Status', path: '/network-status' },
    ],
  },
  { name: 'Southview Project', path: '/southview' },
];

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const handleMouseEnter = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <nav className="fixed top-0 z-50 h-20 w-full border-b border-primary-container/8 bg-white font-['Manrope'] font-medium tracking-tight shadow-[0_4px_24px_rgba(3,5,104,0.07)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/assets/web-logo-light.png"
            alt="Fibrehood"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Nav links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.sub && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm transition-colors duration-200 font-semibold ${
                  isActive(item.path)
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-blue-900/60 hover:text-blue-900 hover:bg-slate-50'
                }`}
              >
                {item.name}
                {item.sub && (
                  <span
                    className={`material-symbols-outlined text-[14px] transition-transform duration-200 ${
                      openDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                )}
                {isActive(item.path) && (
                  <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400" />
                )}
              </Link>

              {/* Dropdown */}
              {item.sub && openDropdown === item.name && (
                <div
                  className="absolute top-full left-0 mt-2 py-2 rounded-2xl bg-white shadow-[0_12px_40px_rgba(3,5,104,0.14)] border border-slate-100 min-w-[200px] z-50"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.sub.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-blue-900/70 hover:text-blue-900 hover:bg-slate-50 transition-colors duration-150"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/portal"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-blue-900/60 hover:text-blue-900 hover:bg-slate-50 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-base">person</span>
            Client Portal
          </Link>
          <Link
            to="/sign-up"
            className="px-6 py-2.5 rounded-full bg-yellow-400 text-blue-900 text-sm font-extrabold hover:bg-yellow-300 active:scale-95 transition-all duration-200 shadow-[0_4px_16px_rgba(253,204,0,0.35)]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
