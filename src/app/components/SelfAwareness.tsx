"use client";

const insights = [
  {
    text: "You sound too available here",
    icon: "📡",
    color: "#F87171",
    bg: "rgba(248, 113, 113, 0.1)",
    border: "rgba(248, 113, 113, 0.25)",
  },
  {
    text: "You're over-explaining",
    icon: "💬",
    color: "#FB923C",
    bg: "rgba(251, 146, 60, 0.1)",
    border: "rgba(251, 146, 60, 0.25)",
  },
  {
    text: "This reply reduces attraction",
    icon: "📉",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.1)",
    border: "rgba(236, 72, 153, 0.25)",
  },
];

const selfInsightPoints = [
  {
    title: "Your patterns, revealed",
    body: "MianX tracks how you communicate across conversations—showing you habits you didn't know you had.",
    icon: "🔄",
  },
  {
    title: "Blind spots, exposed",
    body: "See the moments where your tone, pacing, or word choice is working against you.",
    icon: "👁️",
  },
  {
    title: "Growth, measurable",
    body: "Watch your conversation score improve as you apply smarter strategies over time.",
    icon: "📈",
  },
];

export default function SelfAwareness() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#EC4899]" />
          <span className="text-[#EC4899] text-sm font-medium tracking-widest uppercase">
            Self-Awareness
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            You don&apos;t just learn about them.{" "}
            <span className="text-gradient">
              You learn about yourself.
            </span>
          </h2>
        </div>

        <p className="text-[#a1a1aa] text-lg mb-14 max-w-xl">
          MianX holds up a mirror to your own communication style—so you can
          see exactly what you&apos;re projecting.
        </p>

        {/* Insight pills */}
        <div className="flex flex-wrap gap-3 mb-16">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                background: insight.bg,
                borderColor: insight.border,
              }}
            >
              <span className="text-lg">{insight.icon}</span>
              <span
                className="text-sm font-semibold"
                style={{ color: insight.color }}
              >
                {insight.text}
              </span>
            </div>
          ))}
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selfInsightPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/5 bg-[#111111] transition-all duration-300 hover:border-white/15 hover:-translate-y-1 cursor-default"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">
                {point.title}
              </h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
