import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Star, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/40 to-pink-50 pointer-events-none" />

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="backdrop-blur-sm bg-white/40 border border-white/50 rounded-3xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(148,163,184,0.3)]">
          <p className="inline-flex items-center gap-2 text-sm text-violet-700/80 font-medium">
            <Sparkles className="h-4 w-4" /> dreamy korean-aesthetic portfolio
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800">
            annyeong! i'm <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">your pastel dev</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Soft pastels, chibi vibes, and clean modern UI. Explore my skills, projects, and say hello.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white px-5 py-2.5 shadow-lg shadow-pink-300/40 active:scale-[0.99] transition">
              <Star className="h-4 w-4" /> view projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur text-slate-700 px-5 py-2.5 border border-white/60 hover:bg-white transition">
              <Heart className="h-4 w-4 text-pink-500" /> contact
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white/80" />
    </div>
  );
}
