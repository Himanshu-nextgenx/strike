import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rocket, ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { Footer } from '../components/common/Footer';

export const ComingSoon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = location.pathname.replace('/', '').toUpperCase() || 'MODULE';

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-grid-paper flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-yellow border-4 border-ink rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-brutal animate-bounce">
          <Rocket className="w-12 h-12 text-black" />
        </div>

        <span className="bg-pink-500 text-white border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider mb-4 inline-block">
          IN ACTIVE DEVELOPMENT
        </span>

        <h1 className="font-heading text-5xl sm:text-7xl text-ink uppercase tracking-wider mb-4">
          {pageTitle} <span className="marker-highlight px-3">COMING SOON!</span>
        </h1>

        <p className="font-sans text-lg text-gray-700 max-w-xl mx-auto mb-8 font-semibold">
          We are building an ultra-interactive neo-brutalist arena for {pageTitle.toLowerCase()}. Scratch cards, live leaderboards, and interactive coding challenges are arriving shortly!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleBack}
            className="btn-brutal bg-white text-ink border-4 border-ink px-6 py-3 rounded-2xl font-heading text-lg tracking-wider shadow-brutal inline-flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>GO BACK</span>
          </button>

          <Link
            to="/"
            className="btn-brutal bg-yellow text-black border-4 border-ink px-6 py-3 rounded-2xl font-heading text-lg tracking-wider shadow-brutal inline-flex items-center gap-2 hover:bg-yellow-300"
          >
            <HomeIcon className="w-5 h-5" />
            <span>BACK TO HOME</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
