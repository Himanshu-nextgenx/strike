import React from 'react';
import { Zap, Sparkles, Gift, Rocket } from 'lucide-react';

export const MarqueeStrip = () => {
  const items = [
    { text: 'SCRATCH', icon: Gift },
    { text: 'WIN', icon: Sparkles },
    { text: 'ENROLL', icon: Rocket },
    { text: 'STRIKE 2026', icon: Zap }
  ];

  const marqueeList = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative py-4 my-8 overflow-hidden z-20">
      <div className="bg-yellow border-y-4 border-ink py-3 shadow-brutal transform -rotate-1 sm:-rotate-2 scale-105">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-8">
          {marqueeList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 font-heading text-xl sm:text-2xl tracking-wider text-black">
                <Icon className="w-5 h-5 text-black fill-black" />
                <span>{item.text}</span>
                <span className="text-pink-600 font-bold ml-4">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
