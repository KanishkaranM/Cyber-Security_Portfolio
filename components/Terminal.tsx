import React, { useState, useEffect } from 'react';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const bootSequence = [
    "Initializing kernel...",
    "Loading security modules...",
    "Bypassing firewalls...",
    "Accessing mainframe...",
    "User: Kanishkaran detected.",
    "System Ready.",
    "Listening on port 8080...",
  ];

  useEffect(() => {
    let delay = 0;
    const timeouts: NodeJS.Timeout[] = [];
    
    // Clear lines on mount to prevent duplicates in strict mode
    setLines([]);

    bootSequence.forEach((line, index) => {
      delay += Math.random() * 500 + 200;
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-lg bg-cyber-dark border border-cyber-green rounded-md overflow-hidden shadow-[0_0_15px_rgba(0,255,65,0.2)] font-mono text-sm sm:text-base relative group">
      <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="bg-cyber-gray px-4 py-2 flex items-center justify-between border-b border-cyber-green/30">
        <span className="text-gray-400 text-xs">root@kali:~</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4 h-64 overflow-y-auto flex flex-col gap-1 text-cyber-green">
        {lines.map((line, i) => (
          <div key={i} className="break-words">
            <span className="text-cyber-cyan mr-2">$</span>
            {line}
          </div>
        ))}
        <div className="animate-pulse">
          <span className="text-cyber-cyan mr-2">$</span>
          <span className="w-2 h-4 bg-cyber-green inline-block align-middle"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;