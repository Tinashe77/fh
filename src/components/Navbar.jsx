import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Value', path: '/' },
    { name: 'Service Plans', path: '/' },
    { name: 'Installation', path: '/' },
    { name: 'Network Status', path: '/' },
  ];

  return (
    <nav className="fixed top-0 z-50 h-20 w-full rounded-b-3xl border-b border-primary-container/8 bg-white font-['Manrope'] font-medium tracking-tight shadow-[0_18px_40px_rgba(3,5,104,0.08)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <Link to="/" className="flex items-center rounded-full bg-white px-2 py-1">
          <img
            src="/assets/web-logo-light.png"
            alt="Fibrehood"
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = location.pathname === '/';
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-300 font-['Manrope'] tracking-tight font-medium ${
                  isActive
                    ? "text-blue-900 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-yellow-400 after:rounded-full"
                    : "text-blue-900/60 hover:text-blue-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="scale-95 rounded-full px-5 py-2 font-semibold text-blue-900/60 transition-all duration-200 hover:bg-slate-100/50 active:scale-90">
            Login
          </button>
          <button className="scale-95 rounded-full bg-primary-container px-8 py-2.5 font-semibold text-on-primary shadow-lg transition-all duration-200 hover:shadow-primary-container/20 active:scale-90">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
