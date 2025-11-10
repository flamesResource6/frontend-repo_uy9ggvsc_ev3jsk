import React from 'react';
import { FolderGit2, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    name: 'Pastel UI Kit',
    desc: 'A dreamy component set with gradients, rounded corners, and sparkles.',
    link: '#',
    tag: 'design',
    color: 'from-rose-100 via-pink-100 to-fuchsia-100',
    chibi: '🌸',
  },
  {
    name: 'Chibi Portfolio',
    desc: 'A kawaii personal site with animated stickers and smooth scroll.',
    link: '#',
    tag: 'website',
    color: 'from-violet-100 via-fuchsia-100 to-pink-100',
    chibi: '👻',
  },
  {
    name: 'Boba Tracker',
    desc: 'Track your favorite drinks with sweet charts and pastel badges.',
    link: '#',
    tag: 'app',
    color: 'from-sky-100 via-cyan-100 to-teal-100',
    chibi: '🧋',
  },
];

export default function Projects() {
  return (
    <section className="py-16">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1 border border-white/60 text-sm text-slate-600">
          <Sparkles className="h-4 w-4 text-pink-500" /> featured projects
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-800">cute builds, clean code</h2>
        <p className="mt-2 text-slate-600">A selection of pastel-flavored creations.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a key={p.name} href={p.link} className={`group relative rounded-3xl p-6 bg-gradient-to-br ${p.color} border border-white/70 shadow-[0_8px_40px_rgba(148,163,184,0.25)] transition-transform hover:-translate-y-0.5`}> 
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl" aria-hidden>{p.chibi}</div>
                <h3 className="text-lg font-semibold text-slate-800">{p.name}</h3>
              </div>
              <FolderGit2 className="h-5 w-5 text-slate-700/70" />
            </div>
            <p className="mt-3 text-slate-700/90 text-sm">{p.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-fuchsia-600">
              visit <ExternalLink className="h-4 w-4" />
            </div>
            <div className="absolute -left-2 -top-2 text-xl select-none" aria-hidden>✨</div>
          </a>
        ))}
      </div>
    </section>
  );
}
