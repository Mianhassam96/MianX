"use client";

import { useState } from "react";

const cases = [
  {
    icon: "❤️",
    title: "Texting a crush",
    subtitle: "Stop looking too eager. Start being magnetic.",
    problem: "You're overthinking every reply. You send too much, too fast. They pull back. You panic.",
    mianxDoes: "MianX reads their message, detects the power dynamic, and gives you the reply that creates curiosity—not desperation.",
    example: {
      their: "I've been really busy lately",
      bad: "Oh no worries at all! I totally get it, let me know whenever you're free 😊",
      good: "Same. Let me know when things clear up.",
      badLabel: "Signals: low value, too available",
      goodLabel: "Signals: confident, has options",
    },
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.06)",
    border: "rgba(236, 72, 153, 0.15)",
  },
  {
    icon: "💼",
    title: "Talking to a client",
    subtitle: "Command respect. Close faster.",
    problem: "You over-explain your pricing. You apologize for your rates. You lose deals you should have won.",
    mianxDoes: "MianX identifies where you're giving away leverage and rewrites your message to project confidence and authority.",
    example: {
      their: "Your price seems a bit high for us",
      bad: "I totally understand, I can definitely lower it or adjust the scope to fit your budget!",
      good: "My rate reflects the outcome you're getting. Happy to talk scope.",
      badLabel: "Signals: desperate, negotiable on everything",
      goodLabel: "Signals: confident, outcome-focused",
    },
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.06)",
    border: "rgba(139, 92, 246, 0.15)",
  },
  {
    icon: "🛡️",
    title: "Handling disrespect",
    subtitle: "Set the boundary. Keep the power.",
    problem: "Someone crosses a line. You either explode or say nothing. Both lose.",
    mianxDoes: "MianX shows you the calm, firm reply that sets the boundary without drama—and makes them respect you more.",
    example: {
      their: "You're being way too sensitive about this",
      bad: "I'm not being sensitive, I just feel like you don't understand where I'm coming from and it's frustrating",
      good: "That's not how I see it.",
      badLabel: "Signals: defensive, seeking validation",
      goodLabel: "Signals: grounded, unshakeable",
    },
    color: "#FBBF24",
    bg: "rgba(251, 191, 36, 0.06)",
    border: "rgba(251, 191, 36, 0.15)",
  },
  {
    icon: "🤝",
    title: "Negotiating price",
    subtitle: "Know when to hold. Know when to move.",
    problem: "You fold too early. You accept less than you're worth because silence feels uncomfortable.",
    mianxDoes: "MianX reads the negotiation dynamic and tells you exactly when to hold firm, when to counter, and what to say.",
    example: {
      their: "Can you do $500 instead of $800?",
      bad: "Hmm yeah I think I could probably make that work, let me see what I can do",
      good: "$800 is my rate. I can adjust the deliverables if needed.",
      badLabel: "Signals: uncertain, easily pressured",
      goodLabel: "Signals: firm, professional, in control",
    },
    color: "#34D399",
    bg: "rgba(52, 211, 153, 0.06)",
    border: "rgba(52, 211, 153, 0.15)",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);

  return (
    <section id="use-cases" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#EC4899]" />
          <span className="text-[#EC4899] text-sm font-medium tracking-widest uppercase">Real Situations</span>
        </div>

        <div className="max-w-3xl mb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            People don&apos;t think in features.{" "}
            <span className="text-gradient">They think in situations.</span>
          </h2>
        </div>
        <p className="text-[#a1a1aa] text-lg mb-12 max-w-xl">
          Pick your situation. See exactly how MianX changes the outcome.
        </p>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-3 mb-10">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-5 py-3 rounded-full border font-semibold text-sm transition-all duration-300 cursor-pointer"
              style={
                active === i
                  ? {
                      background: c.bg,
                      borderColor: c.color,
                      color: c.color,
                      boxShadow: `0 0 16px ${c.bg}`,
                    }
                  : {
                      background: "transparent",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#a1a1aa",
                    }
              }
            >
              <span>{c.icon}</span>
              <span>{c.title}</span>
            </button>
          ))}
        </div>

        {/* Active case detail */}
        <div
          className="rounded-2xl border p-8 transition-all duration-500"
          style={{ background: cases[active].bg, borderColor: cases[active].border }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-1" style={{ color: cases[active].color }}>
              {cases[active].icon} {cases[active].title}
            </h3>
            <p className="text-white/50 text-sm italic">{cases[active].subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xs text-[#a1a1aa] uppercase tracking-widest font-semibold mb-2">The Problem</p>
              <p className="text-white/70 text-sm leading-relaxed">{cases[active].problem}</p>
            </div>
            <div>
              <p className="text-xs text-[#a1a1aa] uppercase tracking-widest font-semibold mb-2">What MianX Does</p>
              <p className="text-white/70 text-sm leading-relaxed">{cases[active].mianxDoes}</p>
            </div>
          </div>

          {/* Message example */}
          <div className="rounded-xl border border-white/5 bg-black/30 p-5">
            <p className="text-xs text-white/30 font-mono uppercase tracking-widest mb-4">Live Example</p>

            {/* Their message */}
            <div className="mb-4">
              <p className="text-xs text-[#a1a1aa] mb-1">They said:</p>
              <p className="text-white/80 font-mono text-sm px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                &ldquo;{cases[active].example.their}&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bad reply */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F87171]">❌ Without MianX</span>
                </div>
                <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/15 mb-2">
                  <p className="text-white/50 font-mono text-xs leading-relaxed">&ldquo;{cases[active].example.bad}&rdquo;</p>
                </div>
                <p className="text-xs text-[#F87171]">{cases[active].example.badLabel}</p>
              </div>

              {/* Good reply */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#22C55E]">✅ With MianX</span>
                </div>
                <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/15 mb-2">
                  <p className="text-white font-mono text-sm leading-relaxed">&ldquo;{cases[active].example.good}&rdquo;</p>
                </div>
                <p className="text-xs text-[#22C55E]">{cases[active].example.goodLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
