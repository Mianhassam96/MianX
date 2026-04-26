"use client";

const bullets = [
  {
    icon: "📉",
    text: "Are they losing interest?",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  {
    icon: "🎭",
    text: "Are they testing you?",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: "📡",
    text: "Did you sound too available?",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: "⚡",
    text: "Did you just lose control?",
    color: "text-red-500",
    bg: "bg-red-600/10",
    border: "border-red-600/20",
  },
];

export default function HookSection() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8B5CF6, #EC4899, transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#8B5CF6]" />
          <span className="text-[#8B5CF6] text-sm font-medium tracking-widest uppercase">
            The Problem
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-8 text-white">
          Most conversations fail…{" "}
          <span className="text-gradient">before you even notice.</span>
        </h2>

        {/* Body text */}
        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl text-[#a1a1aa] font-light leading-relaxed">
            You send a message. They reply differently. Something shifts.
          </p>
          <p className="text-lg md:text-xl text-white/70 font-medium">
            MianX shows you what actually happened:
          </p>
        </div>

        {/* Bullet list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 rounded-2xl border ${bullet.bg} ${bullet.border} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-default`}
            >
              <span className="text-2xl flex-shrink-0">{bullet.icon}</span>
              <span className={`text-base font-semibold ${bullet.color}`}>
                {bullet.text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
          <p className="text-[#a1a1aa] text-base leading-relaxed">
            <span className="text-white font-semibold">
              The problem isn&apos;t what you said.
            </span>{" "}
            It&apos;s that you didn&apos;t know what they meant—and you replied
            without that information. MianX gives you that information.
          </p>
        </div>
      </div>
    </section>
  );
}
