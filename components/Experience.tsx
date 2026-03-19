import React from 'react';
import SectionTitle from './SectionTitle';
import { Briefcase, Award, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience & Activities" subtitle="My professional journey and achievements" />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Internship Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyber-green/10 rounded-lg">
                <Briefcase className="text-cyber-green w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Internship</h3>
            </div>
            
            <div className="glass-panel p-8 rounded-xl border border-gray-800 hover:border-cyber-green/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyber-green"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://img.icons8.com/color/96/000000/maple-leaf.png" 
                  alt="Prompt Infotech Logo" 
                  className="w-12 h-12 rounded-full border border-cyber-green/30 shadow-[0_0_10px_rgba(0,255,65,0.2)] p-1 bg-white object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <h4 className="text-xl font-bold text-white">PROMPT INFOTECH</h4>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 font-mono">
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-cyber-cyan" />
                  Coimbatore (Offline)
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-cyber-cyan" />
                  Dec 2025 – Jan 2026
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-cyber-green font-bold mb-1 font-mono">Vulnerability Assessment & Penetration Testing (VAPT):</h5>
                  <p className="text-gray-300 text-sm leading-relaxed font-mono">Executed comprehensive network security scans using Nmap and OpenVAS to identify and categorize infrastructure weaknesses.</p>
                </div>
                <div>
                  <h5 className="text-cyber-green font-bold mb-1 font-mono">Threat Documentation:</h5>
                  <p className="text-gray-300 text-sm leading-relaxed font-mono">Authored detailed weekly security posture reports, successfully documenting and prioritizing 5+ critical vulnerabilities for senior engineering review.</p>
                </div>
                <div>
                  <h5 className="text-cyber-green font-bold mb-1 font-mono">Cross-Functional Remediation:</h5>
                  <p className="text-gray-300 text-sm leading-relaxed font-mono">Partnered with the Web Development team to remediate SQL Injection and XSS flaws, ensuring secure coding practices were integrated into the development lifecycle.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Extracurricular Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyber-cyan/10 rounded-lg">
                <Award className="text-cyber-cyan w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Extracurricular Activities</h3>
            </div>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-cyber-cyan/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyber-cyan"></div>
                <h4 className="text-lg font-bold text-white mb-2">Student Coordinator – Tech Fest</h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3 font-mono">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-cyber-green" />
                    Alagappa University Skill Development
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-cyber-green" />
                    2026
                  </div>
                </div>
                <p className="text-gray-300">• Assisted in technical challenge preparation</p>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-cyber-cyan/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyber-cyan"></div>
                <h4 className="text-lg font-bold text-white mb-2">SRM University Symposium</h4>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 font-mono">
                  <Calendar size={14} className="text-cyber-green" />
                  Feb 2024
                </div>
                <p className="text-gray-300">Participated in Debug the Coding.</p>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-cyber-cyan/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyber-cyan"></div>
                <h4 className="text-lg font-bold text-white mb-2">Alagappa University Science Campus Cyber Fest</h4>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 font-mono">
                  <Calendar size={14} className="text-cyber-green" />
                  2025
                </div>
                <p className="text-gray-300">Runner in Web Pizzas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
