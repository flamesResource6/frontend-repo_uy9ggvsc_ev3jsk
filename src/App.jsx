import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-pink-50 to-sky-50 text-slate-800">
      <Hero />

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24 pb-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}
