import React from 'react';

export const TornEdge = ({ color = '#0a0a0a', flip = false }) => {
  return (
    <div className={`w-full overflow-hidden leading-none select-none ${flip ? 'transform rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        className="w-full h-6 sm:h-8 block"
        fill={color}
      >
        <path d="M0,0 L0,15 L40,5 L80,25 L120,8 L160,28 L200,10 L240,24 L280,6 L320,26 L360,12 L400,28 L440,8 L480,22 L520,4 L560,26 L600,10 L640,28 L680,8 L720,24 L760,12 L800,28 L840,6 L880,24 L920,10 L960,26 L1000,8 L1040,24 L1080,12 L1120,28 L1160,10 L1200,20 L1200,0 Z" />
      </svg>
    </div>
  );
};
