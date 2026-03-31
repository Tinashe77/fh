import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'About', path: '/screen-1' },
    { name: 'Value', path: '/screen-4' },
    { name: 'Service Plans', path: '/screen-3' },
    { name: 'Installation', path: '/screen-2' },
    { name: 'Network Status', path: '/screen-5' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-3xl shadow-[0_20px_40px_rgba(3,5,104,0.06)] font-['Manrope'] tracking-tight font-medium h-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <div className="text-2xl font-black text-blue-900 dark:text-white tracking-tighter">
          <Link to="/">Fibrehood</Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path || (location.pathname === '/' && link.path === '/screen-1');
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-300 font-['Manrope'] tracking-tight font-medium ${
                  isActive
                    ? "text-blue-900 dark:text-yellow-400 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-yellow-400 after:rounded-full"
                    : "text-blue-900/60 dark:text-slate-400 hover:text-blue-900 dark:hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-full text-blue-900/60 dark:text-slate-400 font-semibold hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all scale-95 active:scale-90 duration-200">
            Login
          </button>
          <button className="px-8 py-2.5 bg-primary-container text-on-primary rounded-full font-semibold shadow-lg hover:shadow-primary-container/20 transition-all scale-95 active:scale-90 duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;