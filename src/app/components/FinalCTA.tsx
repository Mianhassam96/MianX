"use client";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb-purple absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="orb-pink absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8B5CF6, #EC4899, transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#a1a1aa] mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse" />
          Join 10,000+ people already using MianX
        </div>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Stop guessing.</span>
          <br />
          <span className="text-gradient">Start knowing.</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl text-[#a1a1aa] max-w-xl mx-auto mb-10 leading-relaxed">
          Every message has a hidden meaning. Now you can see it.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="#demo"
            className="btn-gradient text-white font-bold px-10 py-5 rounded-full text-lg sm:text-xl inline-block cursor-pointer animate-glow-pulse"
            style={{
              boxShadow:
                "0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(236, 72, 153, 0.2)",
            }}
          >
            Analyze Your First Message →
          </a>

          {/* Trust line */}
          <div className="flex items-center gap-3 text-sm text-[#a1a1aa] flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Free
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#22C55E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Instant results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
