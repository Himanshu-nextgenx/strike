import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Heart, Github, Twitter, Youtube, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 bg-paper-dark text-white pt-16 pb-12 border-t-4 border-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-paper-dark pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow border-2 border-white rounded-full flex items-center justify-center text-ink font-heading text-xl">
                ⚡
              </div>
              <span className="font-heading text-3xl tracking-wider text-yellow">
                STRIKE.IN
              </span>
            </Link>
            <p className="text-gray-300 font-sans text-sm leading-relaxed mb-6">
              Empowering engineers to crack FAANG, master system design, and build production AI engines with interactive learning.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Youtube, label: 'YouTube', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Github, label: 'GitHub', href: '#' }
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="w-9 h-9 bg-paper border-2 border-white rounded-lg flex items-center justify-center text-ink hover:bg-yellow hover:translate-y-0.5 transition-all shadow-brutal-white"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl text-yellow mb-4 tracking-wide border-b-2 border-yellow/30 pb-1 inline-block">
              EXPLORE COURSES
            </h4>
            <ul className="flex flex-col gap-2 font-mono text-xs text-gray-300">
              <li><Link to="/course/thunder-web" className="hover:text-yellow transition-colors">⚡ Thunder: 100 Days of Code</Link></li>
              <li><Link to="/course/devops-full" className="hover:text-yellow transition-colors">🐳 DevOps Full Course</Link></li>
              <li><Link to="/course/dsa-genai-combo" className="hover:text-yellow transition-colors">🧠 DSA + GenAI Combo</Link></li>
              <li><Link to="/course/dsa-mastery" className="hover:text-yellow transition-colors">📊 Data Structures & Algorithms</Link></li>
              <li><Link to="/course/generative-ai" className="hover:text-yellow transition-colors">🤖 Generative AI Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-yellow mb-4 tracking-wide border-b-2 border-yellow/30 pb-1 inline-block">
              PLATFORM FEATURES
            </h4>
            <ul className="flex flex-col gap-2 font-mono text-xs text-gray-300">
              <li><Link to="/practice" className="hover:text-yellow transition-colors">Interactive Practice Arenas</Link></li>
              <li><Link to="/codearena" className="hover:text-yellow transition-colors">CodeArena Multiplayer Battles</Link></li>
              <li><Link to="/quiz" className="hover:text-yellow transition-colors">Daily Tech Quizzes</Link></li>
              <li><Link to="/system-design" className="hover:text-yellow transition-colors">System Design Architectures</Link></li>
              <li><Link to="/contests" className="hover:text-yellow transition-colors">Weekly Live Contests</Link></li>
            </ul>
          </div>

          <div className="bg-emerald-950/80 border-3 border-emerald-400 p-5 rounded-2xl shadow-brutal-white">
            <span className="bg-yellow text-ink border-2 border-ink px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
              PROMO REWARDS
            </span>
            <h5 className="font-heading text-lg text-emerald-300 mb-2">
              SCRATCH CARD COUPONS ⚡
            </h5>
            <p className="text-xs text-emerald-100 leading-relaxed font-sans mb-3">
              Visit any course detail page to scratch for up to 25% instant discounts on your enrollment!
            </p>
            <div className="bg-emerald-900/60 p-2 rounded-lg border border-emerald-500/40 text-center font-mono text-xs text-yellow">
              CODE: STRIKE2026
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
            <span>for Developers worldwide. © 2026 STRIKE.IN</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
