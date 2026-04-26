"use client";

import { useState } from "react";

const demoOutput = [
  {
    label: "Hidden Intent",
    value: "Emotional distance",
    indicator: "red",
    icon: "🔍",
  },
  {
    label: "Tone",
    value: "Passive-aggressive",
    indicator: "red",
    icon: "🎭",
  },
  {
    label: "Risk",
    value: "Conversation weakening",
    indicator: "yellow",
    icon: "⚠️",
  },
  {
    label: "Power Shift",
    value: "You're losing control",
    indicator: "red",
    icon: "⚡",
  },
];

const indicatorColors: Record<string, string> = {
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  green: "bg-green-400",
};

const indicatorGlow: Record<string, string> = {
  red: "shadow-[0_0_8px_rgba(239,68,68,0.8)]",
  yellow: "shadow-[0_0_8px_rgba(250,204,21,0.8)]",
  green: "shadow-[0_0_8px_rgba(74,222,128,0.8)]",
};

export default function InteractiveDemo() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = () => {
    if (!message.trim()) return;
    setIsLoading(true);
    setShowResult(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 1800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <section id="demo" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#EC4899]" />
          <span className="text-[#EC4899] text-sm font-medium tracking-widest uppercase">
            Live Demo
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4 text-white">
          Paste a message.{" "}
          <span className="text-gradient">See the truth.</span>
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-10">
          Type any message you received and watch MianX decode it instantly.
        </p>

        {/* Terminal card */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-white/30 font-mono">
              mianx — message analyzer
            </span>
          </div>

          {/* Input area */}
          <div className="p-6">
            <div className="mb-2 text-xs text-[#a1a1aa] font-mono">
              $ paste_message
            </div>
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="You've changed a lot lately…"
                rows={3}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-base font-mono resize-none focus:outline-none focus:border-[#8B5CF6]/50 focus:shadow-[0_0_0_1px_rgba(139,92,246,0.3)] transition-all duration-200"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!message.trim() || isLoading}
              className="mt-4 w-full btn-gradient text-white font-semibold py-3.5 rounded-xl text-base disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none transition-all duration-300"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Analyzing hidden intent…
                </span>
              ) : (
                "Analyze My Message →"
              )}
            </button>
          </div>

          {/* Output area */}
          {(showResult || (!message && !isLoading)) && (
            <div
              className={`border-t border-white/5 p-6 transition-all duration-500 ${
                showResult ? "opacity-100" : "opacity-60"
              }`}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                <span className="text-xs text-[#a1a1aa] font-mono uppercase tracking-widest">
                  Analysis Output
                </span>
              </div>

              <div className="space-y-3">
                {demoOutput.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl bg-[#0d0d0d] border border-white/5 transition-all duration-300 ${
                      showResult
                        ? "translate-x-0 opacity-100"
                        : "translate-x-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: showResult
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-[#a1a1aa] text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white text-sm font-semibold">
                        {item.value}
                      </span>
                      <div
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                          indicatorColors[item.indicator]
                        } ${indicatorGlow[item.indicator]}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {showResult && (
                <div
                  className="mt-4 p-4 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 transition-all duration-500"
                  style={{ transitionDelay: "400ms" }}
                >
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    <span className="text-[#8B5CF6] font-semibold">
                      MianX Insight:
                    </span>{" "}
                    This message signals emotional withdrawal. The sender is
                    creating distance while testing your reaction. Responding
                    defensively will accelerate the power shift.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-white/25 mt-4 font-mono">
          Press Enter or click the button to analyze
        </p>
      </div>
    </section>
  );
}
