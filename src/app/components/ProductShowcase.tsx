"use client";

const replies = [
  {
    label: "Reply A",
    preview: "\"Yeah, I've been thinking about that too…\"",
    outcome: "Conversation fades",
    outcomeDetail: "Low engagement, signals weakness",
    indicator: "red",
    indicatorColor: "#EF4444",
    indicatorBg: "rgba(239, 68, 68, 0.1)",
    indicatorBorder: "rgba(239, 68, 68, 0.2)",
    score: "32",
    scoreLabel: "Weak",
  },
  {
    label: "Reply B",
    preview: "\"Interesting. What made you notice that?\"",
    outcome: "They engage more",
    outcomeDetail: "Curiosity loop, keeps them talking",
    indicator: "green",
    indicatorColor: "#22C55E",
    indicatorBg: "rgba(34, 197, 94, 0.1)",
    indicatorBorder: "rgba(34, 197, 94, 0.2)",
    score: "78",
    scoreLabel: "Strong",
  },
  {
    label: "Reply C",
    preview: "\"Maybe. Depends on what you're looking for.\"",
    outcome: "You gain control",
    outcomeDetail: "Mystery + power shift in your favor",
    indicator: "purple",
    indicatorColor: "#8B5CF6",
    indicatorBg: "rgba(139, 92, 246, 0.1)",
    indicatorBorder: "rgba(139, 92, 246, 0.2)",
    score: "94",
    scoreLabel: "Optimal",
  },
];

export default function ProductShowcase() {
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

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#8B5CF6]" />
          <span className="text-[#8B5CF6] text-sm font-medium tracking-widest uppercase">
            Outcome Preview
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            One message.{" "}
            <span className="text-gradient">Multiple futures.</span>
          </h2>
        </div>
        <p className="text-[#a1a1aa] text-lg mb-14 max-w-xl">
          MianX shows you what happens next—before it actually does.
        </p>

        {/* Reply cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {replies.map((reply, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border transition-all duration-300 cursor-default group"
              style={{
                background: reply.indicatorBg,
                borderColor: reply.indicatorBorder,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = reply.indicatorColor;
                el.style.boxShadow = `0 0 30px ${reply.indicatorBg}`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = reply.indicatorBorder;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    color: reply.indicatorColor,
                    background: reply.indicatorBg,
                    border: `1px solid ${reply.indicatorBorder}`,
                  }}
                >
                  {reply.label}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: reply.indicatorColor }}
                  >
                    {reply.scoreLabel}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: reply.indicatorColor,
                      boxShadow: `0 0 8px ${reply.indicatorColor}`,
                    }}
                  />
                </div>
              </div>

              {/* Score bar */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-[#a1a1aa]">
                    Conversation Score
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: reply.indicatorColor }}
                  >
                    {reply.score}/100
                  </span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${reply.score}%`,
                      background: reply.indicatorColor,
                      boxShadow: `0 0 8px ${reply.indicatorColor}`,
                    }}
                  />
                </div>
              </div>

              {/* Preview message */}
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 mb-5">
                <p className="text-white/70 text-sm font-mono leading-relaxed">
                  {reply.preview}
                </p>
              </div>

              {/* Outcome */}
              <div>
                <p
                  className="text-base font-bold mb-1"
                  style={{ color: reply.indicatorColor }}
                >
                  → {reply.outcome}
                </p>
                <p className="text-[#a1a1aa] text-xs leading-relaxed">
                  {reply.outcomeDetail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-[#a1a1aa] text-sm">
            MianX ranks every possible reply by outcome—so you always pick the
            one that moves things forward.
          </p>
        </div>
      </div>
    </section>
  );
}
