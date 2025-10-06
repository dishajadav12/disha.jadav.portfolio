'use client';

import React, { useEffect, useState } from 'react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: "Let's Contact" },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Custom smooth scroll with slower duration
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const start = window.scrollY;
    const rect = el.getBoundingClientRect();
    const target = start + rect.top;
    const duration = 900; // ms — increase to make scrolling slower

    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, Math.round(start + (target - start) * eased));
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isSticky ? 'top-4 backdrop-blur-lg bg-white/10 shadow-lg' : 'top-8 bg-white/5'
      } rounded-full px-4 py-2`}
    >
      <ul className="flex gap-4 items-center">
        {links.map((l) => (
          <li key={l.id}>
            <button
              onClick={() => handleClick(l.id)}
              className="px-3 py-2 rounded hover:bg-white/10 hover:rounded-3xl focus:outline-none"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
