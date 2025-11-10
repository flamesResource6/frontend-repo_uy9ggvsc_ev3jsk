import React from 'react';
import { Mail, MessageCircleHeart, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1 border border-white/60 text-sm text-slate-600">
          <Sparkles className="h-4 w-4 text-violet-500" /> say hello
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-800">let's collab ✨</h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">I love building playful, minimal experiences with a soft color palette and whimsical motion. Drop a line and let's make something cute and useful.</p>
      </div>

      <form className="mt-10 max-w-2xl mx-auto bg-white/70 backdrop-blur rounded-3xl p-6 border border-white/60 shadow-[0_8px_40px_rgba(148,163,184,0.25)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="your name" className="rounded-2xl px-4 py-3 border border-slate-200/70 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder-slate-400" />
          <input type="email" placeholder="email address" className="rounded-2xl px-4 py-3 border border-slate-200/70 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder-slate-400" />
        </div>
        <textarea rows="4" placeholder="your message" className="mt-4 w-full rounded-2xl px-4 py-3 border border-slate-200/70 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder-slate-400"></textarea>
        <div className="mt-4 flex justify-center">
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 text-white px-6 py-3 shadow-lg shadow-violet-300/40">
            <MessageCircleHeart className="h-5 w-5" /> send a cute note
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">No backend connected yet — this is a demo UI.</p>
      </form>

      <div className="mt-10 text-center text-xs text-slate-500">
        made with love • soft gradients • round corners • sparkles everywhere ✨
      </div>
    </section>
  );
}
