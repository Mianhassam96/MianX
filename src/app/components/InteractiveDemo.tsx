"use client";

import { useState, useEffect } from "react";

interface AnalysisResult {
  message: string;
  timestamp: number;
  score: number;
  label: string;
  labelColor: string;
}

const demoOutput = [
  { label: "Hidden Intent", value: "Emotional distance", indicator: "red", icon: "🔍" },
  { label: "Tone", value: "Passive-aggressive", indicator: "red", icon: "🎭" },
  { label: "Risk", value: "Conversation weakening", indicator: "yellow", icon: "⚠️" },
  { label: "Power Shift", value: "You're losing control", indicator: "red", icon: "⚡" },
];

const warningFlags = [
  { icon: "⚠️", text: "This message makes you look: too available", color: "#F87171" },
  { icon: "📉", text: "Likely outcome: Delayed reply or ignored", color: "#FB923C" },
];

const betterReply = {
  text: "Interesting. What made you say that?",
  why: "This works because it removes emotional neediness, creates curiosity, and puts the power back in your hands.",
  score: 87,
};

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

const STORAGE_KEY = "mianx_history";

export default function InteractiveDemo() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setHistory(JSON.parse(stored));
    } catch {}
  }, []);

  const handleAnalyze = () => {
    if (!message.trim()) return;
    setIsLoading(true);
    setShowResult(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);

      // Save to localStorage history
      const newEntry: AnalysisResult = {
        message: message.slice(0, 60) + (message.length > 60 ? "…" : ""),
        timestamp: Date.now(),
        score: Math.floor(Math.random() * 30) + 20, // 20–50 (bad score for demo)
        label: "Needs work",
        labelColor: "#F87171",
      };
      const updated = [newEntry, ...history].slice(0, 5);
      setHistory(updated);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
    }, 1800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  const avgScore =
    history.length > 0
      ? Math.round(history.reduce((a, b) => a + b.score, 0) / history.length)
      : null;

  return (
    <section id="demo" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
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

        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4 text-white">
          Paste a message.{" "}
          <span className="text-gradient">See the truth.</span>
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-10">
          Type any message you received. MianX decodes the intent, flags the risk, and gives you the reply that actually works.
        </p>

        {/* Terminal card */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-white/30 font-mono">mianx — message analyzer</span>
          </div>

          {/* Input */}
          <div className="p-6">
            <div className="mb-2 text-xs text-[#a1a1aa] font-mono">$ paste_message</div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="You've changed a lot lately…"
              rows={3}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-base font-mono resize-none focus:outline-none focus:border-[#8B5CF6]/50 focus:shadow-[0_0_0_1px_rgba(139,92,246,0.3)] transition-all duration-200"
            />
            <button
              onClick={handleAnalyze}
              disabled={!message.trim() || isLoading}
              className="mt-4 w-full btn-gradient text-white font-semibold py-3.5 rounded-xl text-base disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none transition-all duration-300"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Analyzing hidden intent…
                </span>
              ) : (
                "Analyze My Message →"
              )}
            </button>
          </div>

          {/* Output */}
          {(showResult || (!message && !isLoading)) && (
            <div className={`border-t border-white/5 p-6 transition-all duration-500 ${showResult ? "opacity-100" : "opacity-60"}`}>
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                <span className="text-xs text-[#a1a1aa] font-mono uppercase tracking-widest">Analysis Output</span>
              </div>

              {/* Analysis rows */}
              <div className="space-y-3 mb-5">
                {demoOutput.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl bg-[#0d0d0d] border border-white/5 transition-all duration-300 ${showResult ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"}`}
                    style={{ transitionDelay: showResult ? `${index * 100}ms` : "0ms" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-[#a1a1aa] text-sm font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white text-sm font-semibold">{item.value}</span>
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${indicatorColors[item.indicator]} ${indicatorGlow[item.indicator]}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning flags — emotional impact */}
              {showResult && (
                <div
                  className="mb-5 space-y-2 transition-all duration-500"
                  style={{ transitionDelay: "450ms" }}
                >
                  {warningFlags.map((flag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                      style={{
                        background: "rgba(248,113,113,0.05)",
                        borderColor: "rgba(248,113,113,0.2)",
                      }}
                    >
                      <span>{flag.icon}</span>
                      <span className="text-sm font-semibold" style={{ color: flag.color }}>
                        {flag.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Better reply suggestion */}
              {showResult && (
                <div
                  className="mb-5 p-5 rounded-xl border transition-all duration-500"
                  style={{
                    background: "rgba(34,197,94,0.05)",
                    borderColor: "rgba(34,197,94,0.2)",
                    transitionDelay: "600ms",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-bold text-[#22C55E]">✅ Better Reply</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E" }}>
                      Score: {betterReply.score}/100
                    </span>
                  </div>
                  <p className="text-white font-mono text-base mb-3 px-3 py-2 rounded-lg bg-black/30 border border-white/5">
                    &ldquo;{betterReply.text}&rdquo;
                  </p>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    <span className="text-[#22C55E] font-semibold">Why this works: </span>
                    {betterReply.why}
                  </p>
                </div>
              )}

              {/* MianX Insight */}
              {showResult && (
                <div
                  className="p-4 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 transition-all duration-500"
                  style={{ transitionDelay: "750ms" }}
                >
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    <span className="text-[#8B5CF6] font-semibold">MianX Insight: </span>
                    This message signals emotional withdrawal. The sender is creating distance while testing your reaction. Responding defensively will accelerate the power shift against you.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-white/25 mt-4 font-mono">
          Press Enter or click the button to analyze
        </p>

        {/* Return loop — history */}
        {history.length > 0 && (
          <div className="mt-8 rounded-2xl border border-white/8 bg-[#111111] overflow-hidden">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/3 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#8B5CF6] text-sm font-semibold">🔁 Your Recent Analyses</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] font-medium">
                  {history.length} saved
                </span>
                {avgScore !== null && (
                  <span className="text-xs text-[#a1a1aa]">
                    Avg score: <span className="text-[#F87171] font-semibold">{avgScore}/100</span>
                  </span>
                )}
              </div>
              <span className="text-white/30 text-xs">{showHistory ? "▲ hide" : "▼ show"}</span>
            </button>

            {showHistory && (
              <div className="border-t border-white/5 px-6 py-4 space-y-3">
                {history.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                    <span className="text-[#a1a1aa] text-sm font-mono truncate flex-1">
                      &ldquo;{item.message}&rdquo;
                    </span>
                    <span className="text-xs font-semibold flex-shrink-0" style={{ color: item.labelColor }}>
                      {item.score}/100
                    </span>
                  </div>
                ))}
                <p className="text-xs text-white/25 pt-1">
                  Your biggest pattern: <span className="text-[#F87171]">Responding too quickly</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
