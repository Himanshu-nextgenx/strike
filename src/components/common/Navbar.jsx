import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = ({ onOpenGetStarted }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/#courses' },
    { label: 'Practice', path: '/practice' },
    { label: 'CodeArena', path: '/codearena' },
    { label: 'Quiz', path: '/quiz' },
    { label: 'System Design', path: '/system-design' },
    { label: 'Contests', path: '/contests' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.substring(1);
    return location.pathname === path;
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none mb-6">
      <nav className="pointer-events-auto bg-paper border-4 border-ink rounded-full shadow-brutal px-4 sm:px-6 py-3 flex items-center justify-between transition-all">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-yellow border-3 border-ink rounded-full flex items-center justify-center shadow-brutal-sm group-hover:rotate-12 transition-transform">
            <Zap className="w-6 h-6 text-black fill-black" />
          </div>
          <span className="font-heading text-2xl sm:text-3xl tracking-wider text-ink">
            STRIKE<span className="text-pink-500">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 font-mono-custom text-sm font-bold">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  active
                    ? 'marker-highlight text-black font-bold shadow-brutal-sm border-2 border-ink'
                    : 'text-ink hover:bg-yellow/40'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            className="btn-brutal bg-purple text-black border-3 border-ink p-2 sm:px-3 sm:py-2 rounded-full font-mono text-xs font-bold shadow-brutal-sm flex items-center gap-1.5 cursor-pointer"
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-4 h-4 fill-black text-black" />
                <span className="hidden sm:inline font-mono">DARK</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 fill-yellow text-yellow" />
                <span className="hidden sm:inline font-mono text-black">LIGHT</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenGetStarted}
            className="btn-brutal bg-yellow text-black border-3 border-ink px-4 py-2 rounded-full font-heading tracking-wide text-base shadow-brutal-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span className="hidden sm:inline">GET STARTED</span>
            <span className="sm:hidden">START</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-paper border-3 border-ink rounded-xl shadow-brutal-sm text-ink cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-3 bg-paper border-4 border-ink rounded-2xl shadow-brutal p-4 flex flex-col gap-2 font-mono-custom font-bold">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl border-2 border-ink text-center ${
                isActive(item.path) ? 'bg-yellow text-black shadow-brutal-sm' : 'bg-paper text-ink hover:bg-yellow/30'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
