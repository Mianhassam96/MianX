"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl font-black text-gradient">MianX</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a1a1aa]">
          <a href="#demo" className="hover:text-white transition-colors duration-200 cursor-pointer">Demo</a>
          <a href="#use-cases" className="hover:text-white transition-colors duration-200 cursor-pointer">Use Cases</a>
          <a href="#demo" className="hover:text-white transition-colors duration-200 cursor-pointer">Modes</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#demo"
            className="btn-gradient text-white font-semibold px-5 py-2.5 rounded-full text-sm cursor-pointer"
          >
            Try Free →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/5 px-6 py-4 space-y-4"
          style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)" }}
        >
          <a href="#demo" onClick={() => setMenuOpen(false)} className="block text-[#a1a1aa] hover:text-white transition-colors py-2">Demo</a>
          <a href="#use-cases" onClick={() => setMenuOpen(false)} className="block text-[#a1a1aa] hover:text-white transition-colors py-2">Use Cases</a>
          <a href="#demo" onClick={() => setMenuOpen(false)} className="btn-gradient text-white font-semibold px-5 py-3 rounded-full text-sm text-center block mt-2">
            Try Free →
          </a>
        </div>
      )}
    </nav>
  );
}
