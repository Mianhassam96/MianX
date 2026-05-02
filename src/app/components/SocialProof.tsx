"use client";

const transformations = [
  {
    situation: "Texting a crush",
    before: {
      message: "Hey I was just thinking about you and wanted to check in, hope you're doing okay! Let me know if you want to hang out sometime 😊",
      score: 24,
      flags: ["Too available", "Over-explaining", "Weak close"],
    },
    after: {
      message: "You crossed my mind.",
      score: 91,
      result: "She replied in 4 minutes.",
      resultColor: "#22C55E",
    },
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.06)",
    border: "rgba(236, 72, 153, 0.15)",
  },
  {
    situation: "Client negotiation",
    before: {
      message: "I totally understand if the budget is tight, I can definitely work with whatever you have, just let me know what works for you!",
      score: 18,
      flags: ["Signals desperation", "Gives away leverage", "No anchor"],
    },
    after: {
      message: "My rate is $X. Happy to discuss scope.",
      score: 88,
      result: "Client came back with full budget.",
      resultColor: "#22C55E",
    },
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.06)",
    border: "rgba(139, 92, 246, 0.15)",
  },
  {
    situation: "Handling disrespect",
    before: {
      message: "I mean I get what you're saying but I just feel like that wasn't really fair to me and I think we should talk about it more",
      score: 21,
      flags: ["Defensive tone", "Seeking approval", "No boundary set"],
    },
    after: {
      message: "That doesn't work for me.",
      score: 94,
      result: "Tone shifted immediately.",
      resultColor: "#22C55E",
    },
    color: "#FBBF24",
    bg: "rgba(251, 191, 36, 0.06)",
    border: "rgba(251, 191, 36, 0.15)",
  },
];

const testimonials = [
  {
    quote: "I stopped overthinking texts completely.",
    detail: "Now I paste the message, see what's actually happening, and reply with confidence. Takes 10 seconds.",
    initials: "A",
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.15)",
  },
  {
    quote: "It told me I was about to mess it up—and it was right.",
    detail: "I was going to send a long explanation. MianX flagged it as over-explaining. I sent two words instead. It worked.",
    initials: "M",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.15)",
  },
  {
    quote: "Feels like cheating, but in a smart way.",
    detail: "Everyone else is guessing. I actually know what's happening in the conversation before I reply.",
    initials: "J",
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.15)",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #8B5CF6, #EC4899, transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#8B5CF6]" />
          <span className="text-[#8B5CF6] text-sm font-medium tracking-widest uppercase">Real Results</span>
        </div>

        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            Before vs. After.{" "}
            <span className="text-gradient">The difference is brutal.</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg mt-4">
            These are real message transformations. Same situation. Completely different outcome.
          </p>
        </div>

        {/* Before/After transformations */}
        <div className="space-y-6 mb-20">
          {transformations.map((t, index) => (
            <div
              key={index}
              className="rounded-2xl border p-6 md:p-8"
              style={{ background: t.bg, borderColor: t.border }}
            >
              {/* Situation label */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: t.bg, color: t.color, border: `1px solid ${t.border}` }}
                >
                  {t.situation}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#F87171] uppercase tracking-widest">❌ Before MianX</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 font-semibold">
                      Score: {t.before.score}/100
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 mb-3">
                    <p className="text-white/60 text-sm font-mono leading-relaxed">&ldquo;{t.before.message}&rdquo;</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.before.flags.map((flag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400"
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#22C55E] uppercase tracking-widest">✅ After MianX</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-semibold">
                      Score: {t.after.score}/100
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 mb-3">
                    <p className="text-white font-mono text-base leading-relaxed">&ldquo;{t.after.message}&rdquo;</p>
                  </div>
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
                  >
                    <span className="text-sm font-semibold" style={{ color: t.after.resultColor }}>
                      → {t.after.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/5 bg-[#111111] transition-all duration-300 hover:border-white/15 hover:-translate-y-1 cursor-default flex flex-col"
            >
              <div className="text-4xl font-black leading-none mb-4 opacity-40" style={{ color: t.color }}>
                &ldquo;
              </div>
              <p className="text-white font-semibold text-lg leading-snug mb-3 flex-1">{t.quote}</p>
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">{t.detail}</p>
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
                      <svg key={i} className="w-3 h-3" fill={t.color} viewBox="0 0 20 20">
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
