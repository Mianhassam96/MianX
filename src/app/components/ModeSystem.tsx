"use client";

import { useState } from "react";

const modes = [
  {
    icon: "🧊",
    label: "Stay Mysterious",
    description: "Keep them guessing. Less is more.",
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.1)",
    border: "rgba(96, 165, 250, 0.3)",
    glow: "rgba(96, 165, 250, 0.4)",
  },
  {
    icon: "❤️",
    label: "Build Attraction",
    description: "Deepen the connection intentionally.",
    color: "#F87171",
    bg: "rgba(248, 113, 113, 0.1)",
    border: "rgba(248, 113, 113, 0.3)",
    glow: "rgba(248, 113, 113, 0.4)",
  },
  {
    icon: "🧠",
    label: "Stay Smart",
    description: "Respond with clarity and confidence.",
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.1)",
    border: "rgba(139, 92, 246, 0.3)",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: "🔥",
    label: "Win the Moment",
    description: "Take control of the conversation.",
    color: "#FB923C",
    bg: "rgba(251, 146, 60, 0.1)",
    border: "rgba(251, 146, 60, 0.3)",
    glow: "rgba(251, 146, 60, 0.4)",
  },
  {
    icon: "😌",
    label: "Keep It Casual",
    description: "Relaxed, natural, no pressure.",
    color: "#34D399",
    bg: "rgba(52, 211, 153, 0.1)",
    border: "rgba(52, 211, 153, 0.3)",
    glow: "rgba(52, 211, 153, 0.4)",
  },
];

export default function ModeSystem() {
  const [selected, setSelected] = useState(2); // Default: Stay Smart

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#EC4899]" />
          <span className="text-[#EC4899] text-sm font-medium tracking-widest uppercase">
            Mode System
          </span>
        </div>

        {/* Title */}
        <div className="max-w-2xl mb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            Choose how you want to{" "}
            <span className="text-gradient">play it.</span>
          </h2>
        </div>

        {/* Mode pills */}
        <div className="flex flex-wrap gap-3 mb-12">
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

        {/* Selected mode detail card */}
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
            <div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: modes[selected].color }}
              >
                {modes[selected].label}
              </h3>
              <p className="text-[#a1a1aa] text-base leading-relaxed mb-4">
                {modes[selected].description}
              </p>
              <p className="text-white/60 text-sm">
                MianX will tailor every analysis and reply suggestion to match
                this mode—giving you responses that align with your exact
                intention.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
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
