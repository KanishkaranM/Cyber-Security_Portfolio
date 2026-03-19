import React from 'react';
import SectionTitle from './SectionTitle';
import { USER_INFO } from '../constants';
import { ExternalLink } from 'lucide-react';

const Labs: React.FC = () => {
  return (
    <section id="labs" className="py-20 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Live Operations" subtitle="Continuous Learning & Practical Labs" />

        <div className="glass-panel p-2 md:p-4 rounded-xl border border-cyber-cyan/20 shadow-[0_0_20px_rgba(0,243,255,0.05)]">
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <a 
              href={`https://tryhackme.com/p/${USER_INFO.tryHackMeUsername}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm text-cyber-cyan flex items-center gap-1 hover:underline font-mono"
            >
              Open Externally <ExternalLink size={12} />
            </a>
          </div>
          
          <div className="w-full overflow-hidden rounded-lg bg-white">
            <iframe 
              src={`https://tryhackme.com/p/${USER_INFO.tryHackMeUsername}`}
              width="100%" 
              height="600" 
              title="TryHackMe Profile"
              style={{ border: 'none', borderRadius: '8px' }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labs;