"use client";

import { useState } from "react";

const modes = [
  {
    icon: "🧊",
    label: "Cold Control",
    tagline: "They chase. You decide.",
    description: "Minimal. Measured. Magnetic. Every word is deliberate—nothing is given away for free.",
    example: "They said: 'Are you mad at me?' → You reply: 'No.' (full stop)",
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.1)",
    border: "rgba(96, 165, 250, 0.3)",
    glow: "rgba(96, 165, 250, 0.4)",
  },
  {
    icon: "🔥",
    label: "High Attraction",
    tagline: "Pull them in. Keep them there.",
    description: "Emotionally intelligent replies that build tension, deepen connection, and make them think about you after.",
    example: "They said: 'I miss you' → You reply: 'Tell me more about that.'",
    color: "#F87171",
    bg: "rgba(248, 113, 113, 0.1)",
    border: "rgba(248, 113, 113, 0.3)",
    glow: "rgba(248, 113, 113, 0.4)",
  },
  {
    icon: "🧠",
    label: "Strategic Dominance",
    tagline: "Always three moves ahead.",
    description: "Analytical, precise, and always in control. You see the subtext. You respond to the real message.",
    example: "They said: 'Whatever you think is fine' → You reply: 'What do you actually want?'",
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.1)",
    border: "rgba(139, 92, 246, 0.3)",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: "😌",
    label: "Effortless Presence",
    tagline: "Calm. Grounded. Unshakeable.",
    description: "You don't react—you respond. Relaxed confidence that signals you have options and aren't desperate for any outcome.",
    example: "They said: 'I've been busy' → You reply: 'No worries, same here.'",
    color: "#34D399",
    bg: "rgba(52, 211, 153, 0.1)",
    border: "rgba(52, 211, 153, 0.3)",
    glow: "rgba(52, 211, 153, 0.4)",
  },
  {
    icon: "⚡",
    label: "Instant Impact",
    tagline: "One reply. Maximum effect.",
    description: "When you need to flip the dynamic fast. Sharp, unexpected, and impossible to ignore.",
    example: "They said: 'I don't know what I want' → You reply: 'Let me know when you do.'",
    color: "#FBBF24",
    bg: "rgba(251, 191, 36, 0.1)",
    border: "rgba(251, 191, 36, 0.3)",
    glow: "rgba(251, 191, 36, 0.4)",
  },
];

export default function ModeSystem() {
  const [selected, setSelected] = useState(2);

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#EC4899]" />
          <span className="text-[#EC4899] text-sm font-medium tracking-widest uppercase">Mode System</span>
        </div>

        <div className="max-w-2xl mb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            Choose how you want to{" "}
            <span className="text-gradient">play it.</span>
          </h2>
        </div>
        <p className="text-[#a1a1aa] text-lg mb-10 max-w-xl">
          Same message. Five completely different outcomes. Pick your mode before you reply.
        </p>

        {/* Mode pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {modes.map((mode, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full border font-semibold text-sm transition-all duration-300 cursor-pointer"
              style={
                selected === index
                  ? {
                      background: mode.bg,
                      borderColor: mode.color,
                      color: mode.color,
                      boxShadow: `0 0 20px ${mode.glow}, 0 0 40px ${mode.bg}`,
                      transform: "scale(1.05)",
                    }
                  : {
                      background: "transparent",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#a1a1aa",
                    }
              }
            >
              <span className="text-base">{mode.icon}</span>
              <span>{mode.label}</span>
            </button>
          ))}
        </div>

        {/* Selected mode detail */}
        <div
          className="p-8 rounded-2xl border transition-all duration-500"
          style={{
            background: modes[selected].bg,
            borderColor: modes[selected].border,
            boxShadow: `0 0 40px ${modes[selected].bg}`,
          }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: "rgba(0,0,0,0.3)" }}
            >
              {modes[selected].icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-bold" style={{ color: modes[selected].color }}>
                  {modes[selected].label}
                </h3>
              </div>
              <p className="text-white/50 text-sm italic mb-3">{modes[selected].tagline}</p>
              <p className="text-[#a1a1aa] text-base leading-relaxed mb-5">
                {modes[selected].description}
              </p>
              {/* Example */}
              <div
                className="p-4 rounded-xl border"
                style={{ background: "rgba(0,0,0,0.3)", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <p className="text-xs text-white/30 font-mono uppercase tracking-widest mb-2">Example</p>
                <p className="text-sm text-white/70 font-mono leading-relaxed">{modes[selected].example}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-2xl font-bold text-white/80">
            Same message.{" "}
            <span className="text-gradient font-black">Different outcome.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
