import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50 dark:bg-slate-950 font-['Manrope'] text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto px-12 py-16 flex flex-col md:flex-row justify-between items-start">
        <div className="space-y-6 max-w-sm mb-12 md:mb-0">
          <div className="text-xl font-bold text-blue-900 dark:text-white">Fibrehood</div>
          <p className="text-slate-500 dark:text-slate-400">Building world-class fibre infrastructure for the next generation of connectivity in South Africa.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass-effect-dark rounded-full flex items-center justify-center hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-xs">public</span>
            </a>
            <a href="#" className="w-10 h-10 glass-effect-dark rounded-full flex items-center justify-center hover:bg-secondary-container transition-colors">
              <span className="material-symbols-outlined text-xs">share</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 w-full md:w-auto">
          <div className="space-y-4">
            <h4 className="font-extrabold text-blue-900 dark:text-white uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/screen-1" className="text-slate-500 dark:text-slate-400 hover:text-yellow-500 transition-all opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/screen-4" className="text-slate-500 dark:text-slate-400 hover:text-yellow-500 transition-all opacity-80 hover:opacity-100">Coverage Map</Link></li>
              <li><Link to="/screen-5" className="text-slate-500 dark:text-slate-400 hover:text-yellow-500 transition-all opacity-80 hover:opacity-100">Network Status</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-extrabold text-blue-900 dark:text-white uppercase tracking-widest text-xs">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/screen-3" className="text-slate-500 dark:text-slate-400 hover:text-yellow-500 transition-all opacity-80 hover:opacity-100">Support Center</Link></li>
              <li><Link to="/screen-2" className="text-slate-500 dark:text-slate-400 hover:text-yellow-500 transition-all opacity-80 hover:opacity-100">Contact Us</Link></li>
              <li><Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-yellow-500 transition-all opacity-80 hover:opacity-100">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="font-extrabold text-blue-900 dark:text-white uppercase tracking-widest text-xs">Newsletter</h4>
            <div className="flex gap-2 p-1.5 bg-white dark:bg-slate-900 rounded-full shadow-inner border border-slate-200/50 dark:border-slate-800/50">
              <input type="email" placeholder="Email" className="bg-transparent border-none rounded-full px-4 text-sm w-full focus:ring-0 placeholder:text-slate-400" />
              <button className="bg-blue-900 text-white p-2.5 rounded-full hover:bg-yellow-500 transition-all flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm" data-icon="send">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 pb-12 border-t border-slate-200/50 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs font-medium">© 2024 Fibrehood Connectivity. All rights reserved.</p>
        <div className="flex gap-6 text-xs font-bold text-blue-900/40 dark:text-slate-600">
          <span>POPI COMPLIANT</span>
          <span>ICASA LICENSED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;