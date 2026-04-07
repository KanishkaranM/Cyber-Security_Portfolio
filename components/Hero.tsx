import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal as TerminalIcon, Shield, Bug, Code, Radar, Target, Brain, Bot, Cpu } from 'lucide-react';
import { m } from 'framer-motion';
import MatrixBackground from './MatrixBackground';
import NetworkConstellation from './NetworkConstellation';
import { USER_INFO } from '../constants';

const Hero: React.FC = () => {
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentText = USER_INFO.role;

      if (isDeleting) {
        setTypedRole(currentText.substring(0, typedRole.length - 1));
      } else {
        setTypedRole(currentText.substring(0, typedRole.length + 1));
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && typedRole === currentText) {
        typeSpeed = 2000; // Pause at the end
        setIsDeleting(true);
      } else if (isDeleting && typedRole === '') {
        setIsDeleting(false);
        typeSpeed = 500; // Pause before typing again
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <MatrixBackground />
      <NetworkConstellation />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-green/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center md:text-left"
        >
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-3 py-1 border border-cyber-green/50 rounded-full bg-cyber-green/10 mb-4"
          >
            <span className="text-cyber-green text-sm font-bold animate-pulse">● System Online</span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Hello, I'm <br />
            <span className="text-cyber-green text-shadow-neon font-serif">{USER_INFO.name}</span>
          </m.h1>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-cyber-cyan font-mono min-h-[32px]"
          >
            {typedRole}<span className="animate-blink">_</span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-mono text-sm"
          >
            {USER_INFO.subRole} at {USER_INFO.university}.
            Exploring the depths of cyberspace, securing systems, and building robust digital fortresses.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 font-mono"
          >
            <a
              href="#labs"
              className="px-8 py-3 bg-cyber-green text-black font-bold rounded-sm hover:bg-green-400 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,65,0.4)]"
            >
              <TerminalIcon size={18} />
              View Labs
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-cyber-green text-cyber-green font-bold rounded-sm hover:bg-cyber-green/10 transition-colors flex items-center justify-center gap-2"
            >
              Contact Me
              <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1-niz_JXXkokVrg_0q5knwzycKtBh424-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-700 text-gray-300 font-bold rounded-sm hover:border-gray-500 hover:bg-gray-800/50 transition-colors flex items-center justify-center gap-2"
              aria-label="Download CV"
            >
              <Download size={18} />
              Resume
            </a>
          </m.div>
        </m.div>

        {/* Visual Content (Profile Image) */}
        <div className="flex justify-center md:justify-end relative">
          <m.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyber-green via-transparent to-cyber-cyan shadow-[0_0_40px_rgba(0,255,65,0.3)]"
          >
            <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center overflow-hidden border-4 border-cyber-black">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                width="400"
                height="400"
              />
            </div>
          </m.div>
          {/* Floating decorative elements */}
          {/* OWASP */}
          <m.div
            animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 -right-4 bg-cyber-dark border border-cyber-green p-3 rounded-full shadow-[0_0_15px_rgba(0,255,65,0.3)] text-cyber-green z-20"
            title="OWASP"
          >
            <Shield size={24} />
          </m.div>

          {/* Linux */}
          <m.div
            animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 right-1/4 transform translate-x-1/5  bg-cyber-dark border border-cyber-cyan p-3 rounded-full shadow-[0_0_15px_rgba(0,243,255,0.3)] text-cyber-cyan z-20"
            title="Linux"
          >
            <TerminalIcon size={24} />
          </m.div>

          {/* Python */}
          <m.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-3 right-1/6 transform translate-x-1/3  bg-cyber-dark border border-yellow-400 p-2 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.3)] text-yellow-400 z-20"
            title="Python"
          >
            <Code size={20} />
          </m.div>

          {/* HackerOne */}
          <m.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-4 right-12 bg-cyber-dark border border-white p-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-white z-20"
            title="HackerOne"
          >
            <Bug size={20} />
          </m.div>

          {/* Nmap */}
          <m.div
            animate={{ x: [-5, 5, -5], rotate: [0, -15, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-1/3  -left-3 transform -translate-y-1/3 bg-cyber-dark border border-blue-500 p-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] text-blue-500 z-20"
            title="Nmap"
          >
            <Radar size={22} />
          </m.div>

          {/* Metasploit */}
          <m.div
            animate={{ x: [5, -5, 5], rotate: [0, 15, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-cyber-dark border border-red-500 p-2 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.3)] text-red-500 z-20"
            title="Metasploit"
          >
            <Target size={22} />
          </m.div>

          {/* AI Analysis */}
          <m.div
            animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute top-3/4 -left-9 transform -translate-y-1/2 bg-cyber-dark border border-fuchsia-500 p-2 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.3)] text-fuchsia-500 z-20"
            title="AI Analysis"
          >
            <Brain size={22} />
          </m.div>

          {/* AI Assistant */}
          <m.div
            animate={{ x: [-5, 5, -5], rotate: [0, 10, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-1/4 -right-8 transform translate-y-1/4 bg-cyber-dark border border-teal-400 p-2 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.3)] text-teal-400 z-20"
            title="AI Defense System"
          >
            <Bot size={22} />
          </m.div>

          {/* Neural Engine */}
          <m.div
            animate={{ y: [-5, 5, -5], rotate: [0, -20, 0] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute -top-3 right-1/2 transform translate-x-1/2 bg-cyber-dark border border-indigo-400 p-2 rounded-full shadow-[0_0_15px_rgba(129,140,248,0.3)] text-indigo-400 z-20"
            title="Neural Engine"
          >
            <Cpu size={20} />
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
