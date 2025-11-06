'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: "Let's Contact" },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Focus first link when drawer opens
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  // Custom smooth scroll with slower duration
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const start = window.scrollY;
    const rect = el.getBoundingClientRect();
    const target = start + rect.top;
    const duration = 900;

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

  const onNavClick = (id: string) => {
    handleClick(id);
    setOpen(false);
  };

  return (
    <>
      {/* Desktop pill navbar (md and up) */}
      <nav
        className={`hidden md:block fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          isSticky ? 'top-4 backdrop-blur-lg bg-white/10 shadow-lg' : 'top-8 bg-white/5'
        } rounded-full px-4 py-2`}
        aria-label="Primary"
      >
        {/* Fixed row height and centered items for perfect vertical alignment */}
        <ul className="flex h-10 items-center justify-center gap-4 px-4">
          {/* Make the logo a flex item and remove baseline gap */}
          <li className="flex items-center pr-10 pb-1">
            <Image
              src="/images/DJ_icon_WHITE.png"
              alt="Disha Jadav Logo"
              width={20}
              height={20}
              priority
              className="block"
            />
          </li>

          {links.map((l) => (
            <li key={l.id}>
              {/* inline-flex + h-10 + leading-none keeps text centered with the logo */}
              <button
                onClick={() => onNavClick(l.id)}
                className="inline-flex h-10 items-center rounded px-3 py-0 leading-none hover:bg-white/10 hover:rounded-3xl focus:outline-none focus-visible:ring focus-visible:ring-white/30"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="md:hidden fixed top-4 right-4 z-50 inline-flex items-center justify-center rounded-xl p-2
                   backdrop-blur bg-white/10 border border-white/20 shadow
                   focus:outline-none focus-visible:ring focus-visible:ring-white/40"
        aria-label="Open menu"
        aria-controls="mobile-drawer"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        {/* Hamburger icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Transparent blocker from mt-10 downward (no color), so content doesn’t show/click */}
      <AnimatePresence>
        {open && (
          <motion.button
            key="transparent-blocker"
            aria-label="Close menu"
            className="md:hidden fixed left-0 right-0 top-10 bottom-0 z-40
                       bg-transparent supports-[backdrop-filter]:backdrop-blur-2xl
                       backdrop-brightness-75 backdrop-saturate-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer (FULL WIDTH) — glass effect */}
      <AnimatePresence>
        {open && (
          <motion.aside
            id="mobile-drawer"
            key="drawer"
            className="fixed top-0 left-0 z-50 h-screen w-full
                       bg-white/5 supports-[backdrop-filter]:backdrop-blur-2xl
                       backdrop-saturate-150 ring-1 ring-inset ring-white/10
                       shadow-2xl overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-lg font-semibold ml-2"> <Image
              src="/images/DJ_icon_WHITE.png"
              alt="Disha Jadav Logo"
              width={20}
              height={20}
              priority
              className="block"
            /></span>
              <button
                type="button"
                className="rounded-lg p-2 hover:bg-white/10 focus:outline-none focus-visible:ring focus-visible:ring-white/30"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-1 p-2">
              {links.map((l, i) => (
                <li key={l.id}>
                  <button
                    ref={i === 0 ? firstLinkRef : undefined}
                    onClick={() => onNavClick(l.id)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10
                               focus:outline-none focus-visible:ring focus-visible:ring-white/20"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
