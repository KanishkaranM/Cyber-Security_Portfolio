'use client';

import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { Mail, Lock, SendHorizontal } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { SOCIAL_LINKS } from '../constants';

export default function Contact() {
  const [msg, setMsg] = useState('');
  const [encryptedMsg, setEncryptedMsg] = useState('');
  const [status, setStatus] = useState('idle'); // idle, encrypting, sent

  useEffect(() => {
    if (status === 'idle') {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
      let result = '';
      for (let i = 0; i < msg.length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setEncryptedMsg(result);
    }
  }, [msg, status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg) return;
    setStatus('encrypting');
    
    // Simulate encryption and sending
    setTimeout(() => {
      setStatus('sent');
      setMsg('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cyber-dark/50 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Establish Link" subtitle="Secure Communication Channel" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <m.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="glass-panel p-8 relative rounded-md border-l border-b border-cyber-green shadow-[0_0_30px_rgba(0,255,65,0.05)]"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-mono text-sm relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-cyber-green uppercase tracking-widest font-bold">Sender ID</label>
                <input type="text" placeholder="Alias or Email" className="bg-transparent border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-cyber-green transition-all duration-300 ease-out focus:bg-cyber-green/5 focus:scale-[1.02] focus:shadow-[0_0_15px_rgba(0,255,65,0.3)]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-cyber-cyan uppercase tracking-widest font-bold">Encrypted Payload</label>
                <textarea 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Enter sensitive transmission..." 
                  className="bg-transparent border border-gray-700 rounded p-4 text-white focus:outline-none focus:border-cyber-cyan transition-all duration-300 ease-out h-32 focus:bg-cyber-cyan/5 focus:scale-[1.02] focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] resize-none" 
                />
              </div>

              <div className="bg-black/50 p-4 border border-dashed border-gray-800 text-gray-500 font-mono text-xs break-words min-h-[4rem] flex flex-col justify-center">
                {status === 'encrypting' && <span className="text-cyber-green animate-pulse flex items-center gap-2"><Lock className="w-3 h-3" /> Encrypting payload with AES-256...</span>}
                {status === 'sent' && <span className="text-cyber-cyan">Transmission successful. Encrypted packet dispatched.</span>}
                {status === 'idle' && (msg ? <span className="text-gray-400 font-bold">{encryptedMsg}</span> : <span>Awaiting input for local encryption simulation...</span>)}
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle' || !msg}
                className={`py-3 px-6 border font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  status !== 'idle' || !msg ? 'border-gray-700 text-gray-600' : 'border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black cursor-pointer shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                }`}
              >
                {status === 'idle' ? <><SendHorizontal className="w-4 h-4" /> Transmit</> : <><Lock className="w-4 h-4" /> Processing</>}
              </button>
            </form>
          </m.div>

          <m.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="flex flex-col justify-center gap-8 pl-0 md:pl-12"
          >
            <div>
              <h3 className="text-2xl font-bold font-mono text-white mb-2 uppercase tracking-widest">Connect</h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
                Available for bug bounties, CTF collaborations, and security research discussions. My comms are always open for cybersecurity enthusiasts.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:kanizero5@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white group transition-colors">
                <div className="p-3 border border-gray-800 group-hover:border-cyber-green transition-colors bg-black">
                  <Mail className="w-5 h-5 group-hover:text-cyber-green transition-colors" />
                </div>
                <span className="font-mono text-sm tracking-wider">kanizero5@gmail.com</span>
              </a>

              {SOCIAL_LINKS.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white group transition-colors">
                  <div className="p-3 border border-gray-800 group-hover:border-cyber-cyan transition-colors bg-black">
                    <link.icon className="w-5 h-5 group-hover:text-cyber-cyan transition-colors" />
                  </div>
                  <span className="font-mono text-sm tracking-wider">{link.platform}</span>
                </a>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
