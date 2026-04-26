"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8B5CF6, #EC4899, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-gradient">MianX</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            </div>
            <p className="text-[#a1a1aa] text-sm">
              Built for people who think before they reply.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#a1a1aa]">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="#demo"
              className="hover:text-white transition-colors duration-200"
            >
              Try MianX
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[#a1a1aa] text-sm text-center md:text-right">
            © 2026 MianX. All rights reserved.
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-white/15 text-xs tracking-widest uppercase">
            Know what they mean. Before you reply.
          </p>
        </div>
      </div>
    </footer>
  );
}
