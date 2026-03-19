import React from 'react';
import SectionTitle from './SectionTitle';
import { PROJECTS } from '../constants';
import { Github, FolderLock } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Declassified Files" subtitle="Projects & Proof of Concepts" />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="glass-panel group rounded-xl overflow-hidden border border-gray-800 hover:border-cyber-green transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-cyber-green/10 rounded-lg group-hover:bg-cyber-green/20 transition-colors">
                    <FolderLock className="text-cyber-green w-8 h-8" />
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors font-mono">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px] font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-1 rounded border border-cyber-cyan/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-cyber-green to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;