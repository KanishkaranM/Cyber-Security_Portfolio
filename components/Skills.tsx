import React from 'react';
import { m } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="System Capabilities" subtitle="Arsenal & Technical Proficiencies" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name} 
              className="glass-panel p-6 rounded-lg hover:bg-gray-900 transition-all duration-300 group"
            >
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-white font-bold group-hover:text-cyber-green transition-colors font-mono">
                  {skill.name}
                </h3>
                <span className="text-cyber-cyan font-mono text-sm">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <m.div 
                  className="bg-gradient-to-r from-cyber-green to-cyber-cyan h-2 rounded-full group-hover:shadow-[0_0_10px_#00ff41]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                />
              </div>
              
              <div className="mt-2 text-right">
                <span className="text-xs text-gray-500 uppercase tracking-wider border border-gray-700 px-2 py-0.5 rounded">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;