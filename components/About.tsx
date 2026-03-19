import React from 'react';
import { m } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { USER_INFO, SOCIAL_LINKS } from '../constants';
import { User, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Who am I behind the terminal?" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Bio */}
          <div className="col-span-1 md:col-span-2 glass-panel p-8 rounded-xl border border-gray-800 hover:border-cyber-cyan/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyber-cyan/10 rounded-lg">
                <User className="text-cyber-cyan w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Bio</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
              {USER_INFO.bio}
            </p>
            <p className="text-gray-300 leading-relaxed font-mono text-sm">
              Currently pursuing my B.Voc in Software Development, I combine theoretical knowledge with hands-on practice in CTFs and labs. I am constantly updating my arsenal with the latest tools and techniques in ethical hacking and secure coding practices.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link, index) => {
                let hoverClass = "hover:text-cyber-green hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:border-cyber-green";
                if (link.platform === 'GitHub') {
                  hoverClass = "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:border-white";
                } else if (link.platform === 'LinkedIn') {
                  hoverClass = "hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] hover:border-[#0A66C2]";
                } else if (link.platform === 'TryHackMe') {
                  hoverClass = "hover:text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:border-red-500";
                }

                return (
                  <m.a 
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center gap-3 px-5 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 transition-all duration-300 ${hoverClass}`}
                    aria-label={link.platform}
                  >
                    <link.icon size={20} className="transition-transform group-hover:scale-110" />
                    <span className="font-mono text-sm font-medium">{link.platform}</span>
                    
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-current pointer-events-none"></div>
                  </m.a>
                );
              })}
            </div>
          </div>

          {/* Card 2: Education & Details */}
          <div className="col-span-1 glass-panel p-8 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyber-green/10 rounded-lg">
                  <GraduationCap className="text-cyber-green w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <ul className="space-y-6">
                <li className="relative pl-6 border-l-2 border-cyber-green">
                  <div className="absolute w-3 h-3 bg-cyber-green rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-white font-bold">{USER_INFO.university}</h4>
                  <p className="text-cyber-cyan text-sm">B.Voc Software Development</p>
                  <p className="text-gray-500 text-xs mt-1">Current</p>
                </li>
                <li className="relative pl-6 border-l-2 border-cyber-green">
                  <div className="absolute w-3 h-3 bg-cyber-green rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-white font-bold">The Gandhigram Rural Institute - Deemed to be University</h4>
                  <p className="text-cyber-cyan text-sm">D.Voc Software Development</p>
                  <p className="text-gray-500 text-xs mt-1">2021 - 2022</p>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
               <div className="flex items-center gap-3 text-gray-400">
                 <MapPin size={18} className="text-cyber-red" />
                 <span>Tamil Nadu, India</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;