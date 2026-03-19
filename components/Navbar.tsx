import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-black/90 backdrop-blur-md border-b border-cyber-green/20 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home"
            className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
          >
            <ShieldCheck className="h-8 w-8 text-cyber-green group-hover:animate-pulse" />
            <span className="font-bold text-xl tracking-tighter text-white font-serif">
              KANISH<span className="text-cyber-green">KARAN</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-cyber-green hover:text-shadow-neon px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  <span className="text-cyber-cyan mr-1 opacity-0 hover:opacity-100 transition-opacity">./</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyber-green hover:text-white hover:bg-cyber-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyber-green"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-cyber-green/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyber-green block px-3 py-2 rounded-md text-base font-medium"
              >
                {`> ${item.label}`}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;