import React from 'react';
import { Code2, Palette, Rocket, Sparkles } from 'lucide-react';

const skills = [
  {
    title: 'Frontend',
    icon: <Palette className="h-6 w-6 text-pink-500" />,
    items: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
    color: 'from-pink-100 to-rose-100',
    chibi: '🩷',
  },
  {
    title: 'Engineering',
    icon: <Code2 className="h-6 w-6 text-violet-500" />,
    items: ['TypeScript', 'API Design', 'Testing'],
    color: 'from-violet-100 to-fuchsia-100',
    chibi: '💜',
  },
  {
    title: 'Product',
    icon: <Rocket className="h-6 w-6 text-sky-500" />,
    items: ['UX Patterns', 'Accessibility', 'Perf'],
    color: 'from-sky-100 to-cyan-100',
    chibi: '💙',
  },
];

export default function Skills() {
  return (
    <section className="py-16">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1 border border-white/60 text-sm text-slate-600">
          <Sparkles className="h-4 w-4 text-fuchsia-500" /> my skills
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-800">soft skills & sharp code</h2>
        <p className="mt-2 text-slate-600">A cute mix of design sense and engineering rigor.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div key={s.title} className={`relative rounded-3xl p-6 shadow-[0_8px_40px_rgba(148,163,184,0.25)] bg-gradient-to-b ${s.color} border border-white/70`}>
            <div className="flex items-center gap-3">
              <div className="text-2xl" aria-hidden>{s.chibi}</div>
              <div className="inline-flex items-center gap-2">
                {s.icon}
                <h3 className="text-lg font-semibold text-slate-800">{s.title}</h3>
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-full bg-white/70 border border-white/60 px-3 py-1 text-sm text-slate-700">{item}</li>
              ))}
            </ul>
            <div className="absolute -right-3 -top-3 text-xl select-none" aria-hidden>✨</div>
          </div>
        ))}
      </div>
    </section>
  );
}
