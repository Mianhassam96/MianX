"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb-purple absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="orb-pink absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
            transform: "translate(50%, 50%)",
          }}
        />
        <div
          className="orb-purple absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 60%)",
            transform: "translate(-50%, -50%)",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#a1a1aa] mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse" />
          AI-Powered Conversation Strategy Engine
        </div>

        {/* Main headline — tension + curiosity */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Before you reply…</span>
          <br />
          <span className="text-gradient">know exactly what it will cost you.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#a1a1aa] max-w-2xl mx-auto mb-4 leading-relaxed font-light">
          Every message you send shifts the dynamic. MianX shows you the hidden intent, the power shift, and the reply that actually wins—before you hit send.
        </p>

        {/* Tension line */}
        <p className="text-base text-white/40 max-w-xl mx-auto mb-10 italic">
          Most people reply on instinct. That&apos;s why they lose.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#demo"
            className="btn-gradient text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg w-full sm:w-auto text-center cursor-pointer"
            style={{ boxShadow: "0 0 30px rgba(139,92,246,0.4), 0 0 60px rgba(236,72,153,0.15)" }}
          >
            Analyze My Next Reply →
          </a>
          <a
            href="#use-cases"
            className="border border-white/15 hover:border-white/30 text-white font-medium px-8 py-4 rounded-full text-base sm:text-lg w-full sm:w-auto text-center transition-all duration-300 hover:bg-white/5 cursor-pointer"
          >
            See Real Situations
          </a>
        </div>

        {/* Trust signals — specific, not generic */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#a1a1aa]">
          <span className="flex items-center gap-2">
            <span className="text-[#8B5CF6]">✓</span> Free to try
          </span>
          <span className="text-white/15">|</span>
          <span className="flex items-center gap-2">
            <span className="text-[#8B5CF6]">✓</span> No account needed
          </span>
          <span className="text-white/15">|</span>
          <span className="flex items-center gap-2">
            <span className="text-[#8B5CF6]">✓</span> Results in seconds
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
