import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Home as HomeIcon } from 'lucide-react';
import { Footer } from '../components/common/Footer';

export const NotFound = () => {
  const navigate = useNavigate();

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
        <div className="w-24 h-24 bg-red-500 border-4 border-ink rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-brutal text-white">
          <AlertTriangle className="w-12 h-12" />
        </div>

        <span className="bg-ink text-yellow border-2 border-ink px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider mb-4 inline-block">
          ERROR 404
        </span>

        <h1 className="font-heading text-6xl sm:text-8xl text-ink uppercase tracking-wider mb-4">
          PAGE NOT <span className="text-red-500">FOUND</span>
        </h1>

        <p className="font-sans text-lg text-gray-700 max-w-xl mx-auto mb-8 font-semibold">
          Oops! The paper snippet you are looking for has been torn away or moved.
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
