import React, { useMemo } from 'react';
import { m } from 'framer-motion';

const nodes = [
  { id: 1, x: 10, y: 20 },
  { id: 2, x: 30, y: 35 },
  { id: 3, x: 15, y: 65 },
  { id: 4, x: 40, y: 75 },
  { id: 5, x: 60, y: 25 },
  { id: 6, x: 80, y: 40 },
  { id: 7, x: 75, y: 75 },
  { id: 8, x: 50, y: 10 },
  { id: 9, x: 90, y: 15 },
  { id: 10, x: 95, y: 85 },
  { id: 11, x: 5, y: 90 },
  { id: 12, x: 50, y: 50 },
];

const edges = [
  [1, 2], [1, 8], [2, 3], [2, 5], [2, 12], [3, 4], [3, 11], 
  [4, 12], [4, 7], [5, 6], [5, 8], [5, 9], [6, 7], [6, 10], 
  [7, 12], [8, 9], [10, 7], [11, 4]
];

const NetworkConstellation: React.FC = () => {
  // Memoize random values to prevent hydration mismatches and unnecessary re-renders
  const animatedEdges = useMemo(() => {
    return edges.map(([n1, n2], i) => {
      const node1 = nodes.find(n => n.id === n1)!;
      const node2 = nodes.find(n => n.id === n2)!;
      return {
        id: i,
        node1,
        node2,
        duration: Math.random() * 4 + 3, // 3 to 7 seconds
        delay: Math.random() * 2,
      };
    });
  }, []);

  const animatedNodes = useMemo(() => {
    return nodes.map(node => ({
      ...node,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <svg className="w-full h-full">
        <defs>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {animatedEdges.map((edge) => (
          <g key={`edge-${edge.id}`}>
            {/* Base faint line */}
            <line 
              x1={`${edge.node1.x}%`} y1={`${edge.node1.y}%`} 
              x2={`${edge.node2.x}%`} y2={`${edge.node2.y}%`} 
              stroke="#00ff41" strokeOpacity="0.15" strokeWidth="1" 
            />
            {/* Animated data stream packet */}
            <m.line
              x1={`${edge.node1.x}%`} y1={`${edge.node1.y}%`} 
              x2={`${edge.node2.x}%`} y2={`${edge.node2.y}%`} 
              stroke="#00f3ff" 
              strokeWidth="1.5"
              initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
              animate={{ 
                pathOffset: [0, 1],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: edge.duration, 
                repeat: Infinity, 
                ease: "linear",
                delay: edge.delay
              }}
            />
          </g>
        ))}
        
        {animatedNodes.map((node) => (
          <m.circle
            key={`node-${node.id}`}
            cx={`${node.x}%`} cy={`${node.y}%`} r="2"
            fill="#00ff41"
            filter="url(#node-glow)"
            initial={{ opacity: 0.3, r: 2 }}
            animate={{ 
              r: [2, 3.5, 2],
              opacity: [0.3, 0.9, 0.3]
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NetworkConstellation;
