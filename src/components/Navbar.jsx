import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Fibre Plans', path: '/fibre-plans' },
  { name: 'Coverage', path: '/coverage' },
  { name: 'Get Connected', path: '/get-connected' },
  { name: 'Partner Us', path: '/partner-us' },
  { name: 'Support', path: '/support' },
];

const Navbar = () => {
  const location = useLocation();

  const isPathActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
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
            <Link
              key={item.name}
              to={item.path}
              className={`relative flex items-center px-3 py-2 rounded-full text-sm transition-colors duration-200 font-semibold ${
                isPathActive(item.path)
                  ? 'text-blue-900 bg-blue-50'
                  : 'text-blue-900/60 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              {item.name}
              {isPathActive(item.path) && (
                <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400" />
              )}
            </Link>
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
