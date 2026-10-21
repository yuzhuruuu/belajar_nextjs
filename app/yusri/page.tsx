"use client";

import { useEffect, useState } from "react";

export default function Yusri() {
  const accent = '#be46ff';
  const primary = '#4845f7';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <nav className={`sticky top-0 z-50 w-full ${scrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="text-sm font-semibold" style={{ color: primary }}>Yusri</div>
          <div className="flex gap-6 text-sm">
            <a href="#intro" className="text-gray-300 hover:text-white no-underline">Intro</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white no-underline">Port</a>
            <a href="#fun" className="text-gray-300 hover:text-white no-underline">Fun</a>
            <a href="#education" className="text-gray-300 hover:text-white no-underline">Edu</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-8 lg:px-12 lg:py-12">
        <section id="intro" className="py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight" style={{ color: primary }}>Yusri</h1>
            <p className="mt-3 text-sm md:text-base" style={{ color: accent }}>Information Systems student who curious about web development</p>
          </div>
        </section>

        <section id="about" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
              <h2 className="font-semibold text-lg" style={{ color: primary }}>About</h2>
              <p className="mt-3 text-gray-300">Hello, I'm Yusri, a student of Information Systems who is curious about web development. I'm building small projects to practice my skills and prefer simple, functional UIs.</p>
            </div>

            <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
              <h2 className="font-semibold text-lg" style={{ color: primary }}>Contact & Hobbies</h2>
              <p className="mt-3 text-gray-300">Hobbies: playing guitar, listening to music, running, watching movies. Contact: annisayusri59@gmail.com</p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mt-8">
          <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: primary }}>Mini Portfolio</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-gray-800/60 rounded">
                <strong className="block text-lg">Washly</strong>
                <p className="text-sm text-gray-300 mt-2">A loundry management app.</p>
              </div>
              <div className="p-4 bg-gray-800/60 rounded">
                <strong className="block text-lg">ABSA Shopee</strong>
                <p className="text-sm text-gray-300 mt-2">ML project for e-commerce ABSA analysis.</p>
              </div>
              <div className="p-4 bg-gray-800/60 rounded">
                <strong className="block text-lg">Ambaness</strong>
                <p className="text-sm text-gray-300 mt-2">UI/UX prototype.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="fun" className="mt-8">
          <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold" style={{ color: primary }}>Quick Facts & Jokes</h3>
            <ul className="mt-3 list-inside list-decimal text-gray-300 space-y-2">
              <li>I prefer the terminal over GUI when I need speed.</li>
              <li>One coffee before coding, two if errors persist.</li>
              <li>I try new layouts even if they sometimes break.</li>
              <li>Learning TypeScript slowly — not an expert yet, but trying.</li>
              <li>I once made a CSS loader that was too proud of itself.</li>
            </ul>
            <p className="mt-3 text-gray-400">Joke: Debugging — the art of finding mistakes we made last night.</p>
          </div>
        </section>

        <section id="education" className="mt-8">
          <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
            <h3 className="text-xl font-semibold" style={{ color: primary }}>Education & Goals</h3>
            <p className="mt-2 text-gray-300">Major: Information Systems — semester: 5.</p>
            <ul className="mt-2 list-disc list-inside text-gray-300">
              <li>Improve React and Next.js skills.</li>
              <li>Learn backend basics (simple APIs).</li>
              <li>Build a polished portfolio project.</li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <span style={{ color: accent }}>Built by Yusri</span> — simple practice page.
        </footer>
      </main>
    </div>
  );
}