import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 
        className="text-3xl md:text-4xl font-bold text-cyber-green text-shadow-neon uppercase tracking-widest mb-4 glitch inline-block"
        data-text={`< ${title} />`}
      >
        {`< ${title} />`}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-24 bg-cyber-cyan mx-auto mt-4 rounded-full shadow-[0_0_8px_#00f3ff]"></div>
    </div>
  );
};

export default SectionTitle;