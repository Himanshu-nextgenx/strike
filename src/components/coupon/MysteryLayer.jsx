import React from 'react';

export const MysteryLayer = () => {
  return (
    <div 
      className="absolute inset-0 bg-emerald-600 w-full h-full flex flex-col items-center justify-center select-none overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(#16a34a 2px, transparent 2px)`,
        backgroundSize: '16px 16px'
      }}
    >
      <div className="absolute inset-0 opacity-10 flex flex-wrap justify-around items-center p-2 text-white font-mono text-xl font-black pointer-events-none">
        <span>%</span><span>%</span><span>%</span><span>%</span>
        <span>%</span><span>%</span><span>%</span><span>%</span>
        <span>%</span><span>%</span><span>%</span><span>%</span>
      </div>

      <div className="z-10 text-center px-4">
        <div className="text-white font-heading text-2xl tracking-wider drop-shadow-md">
          MYSTERY REWARD UNLOCKING...
        </div>
        <p className="text-emerald-100 font-handwriting text-xl mt-1 animate-pulse">
          Keep scratching to clear the foil!
        </p>
      </div>
    </div>
  );
};
