"use client";

const testimonials = [
  {
    quote: "I stopped overthinking texts completely.",
    detail:
      "Now I just paste the message, see what's actually going on, and reply with confidence.",
    initials: "A",
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.15)",
  },
  {
    quote: "It literally told me I was about to mess it up—and it was right.",
    detail:
      "I was going to send a long explanation. MianX flagged it as over-explaining. I sent two words instead. It worked.",
    initials: "M",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.15)",
  },
  {
    quote: "Feels like cheating, but in a smart way.",
    detail:
      "Everyone else is guessing. I actually know what's happening in the conversation.",
    initials: "J",
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.15)",
  },
];

const stats = [
  { value: "10,000+", label: "Active users" },
  { value: "94%", label: "Report better outcomes" },
  { value: "3.2x", label: "More confident replies" },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8B5CF6, #EC4899, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#8B5CF6]" />
          <span className="text-[#8B5CF6] text-sm font-medium tracking-widest uppercase">
            Social Proof
          </span>
        </div>

        {/* Title */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            Real conversations.{" "}
            <span className="text-gradient">Real outcomes.</span>
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#a1a1aa] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/5 bg-[#111111] transition-all duration-300 hover:border-white/15 hover:-translate-y-1 cursor-default flex flex-col"
            >
              {/* Quote marks */}
              <div
                className="text-4xl font-black leading-none mb-4 opacity-40"
                style={{ color: t.color }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-white font-semibold text-lg leading-snug mb-3 flex-1">
                {t.quote}
              </p>

              {/* Detail */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                {t.detail}
              </p>

              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: t.bg, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white/40 text-xs">Verified user</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3"
                        fill={t.color}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
