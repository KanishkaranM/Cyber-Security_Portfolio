import React from 'react';
import { USER_INFO } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-gray-500 text-sm font-mono text-center md:text-left">
          <p>© {new Date().getFullYear()} {USER_INFO.name}. All systems operational.</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 font-mono">
          <span>Built with</span>
          <Heart size={14} className="text-cyber-red animate-pulse" />
          <span>in Cyber Space</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;