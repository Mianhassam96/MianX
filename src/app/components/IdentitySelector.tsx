"use client";

import { useState } from "react";

const identities = [
  {
    icon: "❤️",
    label: "Dating",
    description: "You want to be magnetic, not desperate. MianX helps you reply with confidence, create tension, and stop over-explaining your feelings.",
    insights: [
      "Detects when you're coming across as too available",
      "Flags messages that reduce attraction",
      "Suggests replies that build mystery and pull",
    ],
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.08)",
    border: "rgba(236, 72, 153, 0.2)",
  },
  {
    icon: "💼",
    label: "Professional",
    description: "You want to command respect in every message. MianX helps you project authority, close faster, and never sound uncertain.",
    insights: [
      "Identifies where you're giving away leverage",
      "Rewrites messages to sound confident and decisive",
      "Flags over-apologizing and weak language",
    ],
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.2)",
  },
  {
    icon: "💻",
    label: "Freelancer",
    description: "You want clients to respect your rates and stop ghosting. MianX helps you negotiate without folding and follow up without looking desperate.",
    insights: [
      "Detects when you're underselling yourself",
      "Rewrites proposals to anchor higher",
      "Flags messages that signal desperation",
    ],
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.08)",
    border: "rgba(96, 165, 250, 0.2)",
  },
  {
    icon: "🎓",
    label: "Student",
    description: "You want to communicate clearly and confidently—with professors, peers, or anyone you're trying to impress. MianX removes the filler and sharpens your message.",
    insights: [
      "Removes over-explaining and filler words",
      "Makes your message direct and clear",
      "Flags passive or uncertain language",
    ],
    color: "#34D399",
    bg: "rgba(52, 211, 153, 0.08)",
    border: "rgba(52, 211, 153, 0.2)",
  },
];

export default function IdentitySelector() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #EC4899, #8B5CF6, transparent)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#8B5CF6]" />
          <span className="text-[#8B5CF6] text-sm font-medium tracking-widest uppercase">Built For You</span>
        </div>

        <div className="max-w-2xl mb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            This is for you.{" "}
            <span className="text-gradient">Specifically.</span>
          </h2>
        </div>
        <p className="text-[#a1a1aa] text-lg mb-10 max-w-xl">
          MianX adapts to your context. Pick who you are and see exactly how it works for your situation.
        </p>

        {/* Identity grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {identities.map((id, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border font-semibold text-sm transition-all duration-300 cursor-pointer"
              style={
                selected === i
                  ? {
                      background: id.bg,
                      borderColor: id.color,
                      color: id.color,
                      boxShadow: `0 0 20px ${id.bg}`,
                      transform: "scale(1.03)",
                    }
                  : {
                      background: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "#a1a1aa",
                    }
              }
            >
              <span className="text-2xl">{id.icon}</span>
              <span>{id.label}</span>
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div
          className="p-8 rounded-2xl border transition-all duration-500"
          style={{
            background: identities[selected].bg,
            borderColor: identities[selected].border,
            boxShadow: `0 0 40px ${identities[selected].bg}`,
          }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              {identities[selected].icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3" style={{ color: identities[selected].color }}>
                MianX for {identities[selected].label}s
              </h3>
              <p className="text-[#a1a1aa] text-base leading-relaxed mb-6">
                {identities[selected].description}
              </p>
              <div className="space-y-2">
                {identities[selected].insights.map((insight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: identities[selected].color }}
                    />
                    <span className="text-sm text-white/70">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
