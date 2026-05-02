"use client";

import { useState } from "react";

const identities = [
  {
    icon: "❤️",
    label: "Dating",
    description: "You want to be magnetic, not desperate. MianX detects when you're coming across as too available and rewrites your message to build attraction instead.",
    insights: [
      "Detects when you're coming across as too available",
      "Flags messages that reduce attraction",
      "Suggests replies that build mystery and pull",
    ],
    exampleInput: "Hey I was just thinking about you, hope you're doing okay! Let me know if you want to hang out sometime 😊",
    exampleFlag: "Too available + over-explaining",
    exampleReply: "You crossed my mind.",
    exampleWhy: "Removes neediness. Creates curiosity. Puts the power back in your hands.",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.08)",
    border: "rgba(236, 72, 153, 0.2)",
  },
  {
    icon: "💼",
    label: "Professional",
    description: "You want to command respect in every message. MianX identifies where you're giving away leverage and rewrites your message to project authority.",
    insights: [
      "Identifies where you're giving away leverage",
      "Rewrites messages to sound confident and decisive",
      "Flags over-apologizing and weak language",
    ],
    exampleInput: "I totally understand if the budget is tight, I can definitely work with whatever you have, just let me know!",
    exampleFlag: "Signals desperation + no anchor",
    exampleReply: "My rate is $X. Happy to discuss scope.",
    exampleWhy: "Anchors your value. Stays firm. Opens negotiation on your terms.",
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
    exampleInput: "I know my price might seem high but I can definitely lower it or adjust the scope to fit your budget!",
    exampleFlag: "Undermining your own value",
    exampleReply: "$800 is my rate. I can adjust deliverables if needed.",
    exampleWhy: "Holds the anchor. Offers flexibility without caving. Sounds like someone with options.",
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.08)",
    border: "rgba(96, 165, 250, 0.2)",
  },
  {
    icon: "🎓",
    label: "Student",
    description: "You want to communicate clearly and confidently — with professors, peers, or anyone you're trying to impress. MianX removes the filler and sharpens your message.",
    insights: [
      "Removes over-explaining and filler words",
      "Makes your message direct and clear",
      "Flags passive or uncertain language",
    ],
    exampleInput: "Hi professor, I was just wondering if maybe it would be possible to get an extension? I'm really sorry to ask, I know you're busy...",
    exampleFlag: "Over-apologizing + passive framing",
    exampleReply: "Hi, I'd like to request a 2-day extension on the assignment. Is that possible?",
    exampleWhy: "Direct. Confident. Respectful without being submissive. Gets a faster yes.",
    color: "#34D399",
    bg: "rgba(52, 211, 153, 0.08)",
    border: "rgba(52, 211, 153, 0.2)",
  },
];

export default function IdentitySelector() {
  const [selected, setSelected] = useState(0);

  const id = identities[selected];

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
          Pick your situation. See exactly what MianX catches — and what it gives you instead.
        </p>

        {/* Identity grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {identities.map((identity, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl border font-semibold text-sm transition-all duration-300 cursor-pointer"
              style={
                selected === i
                  ? {
                      background: identity.bg,
                      borderColor: identity.color,
                      color: identity.color,
                      boxShadow: `0 0 20px ${identity.bg}`,
                      transform: "scale(1.03)",
                    }
                  : {
                      background: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "#a1a1aa",
                    }
              }
            >
              <span className="text-2xl">{identity.icon}</span>
              <span>{identity.label}</span>
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div
          className="rounded-2xl border transition-all duration-500 overflow-hidden"
          style={{
            background: id.bg,
            borderColor: id.border,
            boxShadow: `0 0 40px ${id.bg}`,
          }}
        >
          {/* Top: description + insights */}
          <div className="p-8 border-b border-white/5">
            <div className="flex items-start gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                {id.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3" style={{ color: id.color }}>
                  MianX for {id.label}s
                </h3>
                <p className="text-[#a1a1aa] text-base leading-relaxed mb-5">{id.description}</p>
                <div className="space-y-2">
                  {id.insights.map((insight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: id.color }} />
                      <span className="text-sm text-white/70">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: live example */}
          <div className="p-8">
            <p className="text-xs text-white/30 font-mono uppercase tracking-widest mb-5">Live Example</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Before */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#F87171]">❌ Without MianX</span>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 mb-2">
                  <p className="text-white/50 font-mono text-xs leading-relaxed">&ldquo;{id.exampleInput}&rdquo;</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400">
                  {id.exampleFlag}
                </span>
              </div>

              {/* After */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#22C55E]">✅ With MianX</span>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 mb-2">
                  <p className="text-white font-mono text-sm leading-relaxed">&ldquo;{id.exampleReply}&rdquo;</p>
                </div>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  <span className="text-[#22C55E] font-semibold">Why: </span>{id.exampleWhy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
