"use client";

const products = [
  { name: "MianConvert", url: "https://mianhassam96.github.io/MianConvert/" },
  { name: "MianScan", url: "https://mianhassam96.github.io/MianScan/" },
  { name: "ImageKit", url: "https://mianhassam96.github.io/MultiMian-ImageKit/" },
  { name: "WaqtX", url: "https://mianhassam96.github.io/MultiMian-WaqtX/" },
  { name: "MianPix", url: "https://mianhassam96.github.io/MianPix/" },
  { name: "MianScribe", url: "https://mianscribe.vercel.app/" },
  { name: "MianSnap", url: "https://mianhassam96.github.io/MianSnap/" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #8B5CF6, #EC4899, transparent)" }}
      />

      <div className="max-w-6xl mx-auto">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-black text-gradient">MianX</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">
              AI-powered conversation strategy engine. Built for people who think before they reply.
            </p>
            {/* MultiMian credit */}
            <a
              href="https://multimian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 bg-white/3 hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/5 transition-all duration-300 group"
            >
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-black">M</span>
              </div>
              <div>
                <p className="text-white/80 text-xs font-semibold group-hover:text-white transition-colors">Built by MultiMian</p>
                <p className="text-white/30 text-xs">multimian.com</p>
              </div>
              <svg className="w-3 h-3 text-white/20 group-hover:text-[#8B5CF6] transition-colors ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* More products */}
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">More Products</p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a1a1aa] text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#8B5CF6]/40 group-hover:bg-[#8B5CF6] transition-colors flex-shrink-0" />
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links + contact */}
          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</p>
            <div className="space-y-2.5 mb-6">
              {[
                { label: "Try MianX", href: "#demo" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Privacy Policy", href: "https://multimian.com/privacy-policy" },
                { label: "Terms & Conditions", href: "https://multimian.com/terms-conditions" },
                { label: "Contact / Support", href: "https://multimian.com/contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block text-[#a1a1aa] text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/Mianhassam96" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mianhassam96/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/923258831437" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2026 MianX · A{" "}
            <a href="https://multimian.com" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-[#8B5CF6] transition-colors duration-200 font-semibold">
              MultiMian
            </a>{" "}
            product · Built by{" "}
            <a href="https://multimian.com/about" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-[#8B5CF6] transition-colors duration-200">
              Mian Hassam
            </a>
          </p>
          <p className="text-white/15 text-xs tracking-widest uppercase">
            Know what they mean. Before you reply.
          </p>
        </div>
      </div>
    </footer>
  );
}
