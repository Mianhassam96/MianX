"use client";

import { useState, useEffect } from "react";

interface AnalysisResult {
  message: string;
  timestamp: number;
  score: number;
  label: string;
  labelColor: string;
}

interface Analysis {
  rows: { label: string; value: string; indicator: string; icon: string }[];
  warnings: { icon: string; text: string; color: string }[];
  insight: string;
  replies: { label: string; labelColor: string; labelBg: string; text: string; score: number; why: string }[];
  pattern: string;
  inputScore: number;
}

// Keyword-based intelligence layer — same input = consistent output
function analyzeMessage(msg: string): Analysis {
  const lower = msg.toLowerCase();

  const isNeedy =
    /sorry|just checking|did i|are you mad|did you get|you there|hello\?|hey\?|\?\?\?|please|i hope/.test(lower);
  const isTooAvailable =
    /whenever you|let me know|no worries|totally fine|i understand|i get it|busy|i can wait/.test(lower);
  const isOverExplaining =
    msg.length > 120 || /because|i just|i mean|i think|i feel like|i wanted to|i was just/.test(lower);
  const isPassiveAggressive =
    /fine|whatever|sure|ok then|if you say so|i guess|never mind|forget it/.test(lower);
  const isDistancing =
    /changed|different|not sure|i don't know|maybe|we'll see|busy lately|a lot going on/.test(lower);
  const isLowValue =
    /i'm sorry|my fault|i apologize|i was wrong|i messed up|i failed/.test(lower);
  const isStrong =
    /no\.|done\.|understood\.|noted\.|let me know when|depends\.|we'll see\./.test(lower);

  // Build rows based on detected patterns
  const rows = [];
  if (isDistancing || isPassiveAggressive) {
    rows.push({ label: "Hidden Intent", value: isDistancing ? "Creating distance" : "Testing your reaction", indicator: "red", icon: "🔍" });
  } else if (isNeedy) {
    rows.push({ label: "Hidden Intent", value: "Seeking reassurance", indicator: "red", icon: "🔍" });
  } else {
    rows.push({ label: "Hidden Intent", value: "Neutral / unclear", indicator: "yellow", icon: "🔍" });
  }

  if (isPassiveAggressive) {
    rows.push({ label: "Tone", value: "Passive-aggressive", indicator: "red", icon: "🎭" });
  } else if (isDistancing) {
    rows.push({ label: "Tone", value: "Cold / withdrawing", indicator: "red", icon: "🎭" });
  } else if (isNeedy) {
    rows.push({ label: "Tone", value: "Anxious / over-invested", indicator: "yellow", icon: "🎭" });
  } else {
    rows.push({ label: "Tone", value: "Neutral", indicator: "yellow", icon: "🎭" });
  }

  const riskHigh = isNeedy || isOverExplaining || isTooAvailable || isLowValue;
  rows.push({
    label: "Risk",
    value: riskHigh ? "Conversation weakening" : isDistancing ? "Power shift incoming" : "Low risk",
    indicator: riskHigh ? "red" : isDistancing ? "yellow" : "green",
    icon: "⚠️",
  });

  const losingControl = isNeedy || isTooAvailable || isLowValue || isOverExplaining;
  rows.push({
    label: "Power Shift",
    value: losingControl ? "You're losing control" : isStrong ? "You hold the frame" : "Neutral",
    indicator: losingControl ? "red" : isStrong ? "green" : "yellow",
    icon: "⚡",
  });

  // Warnings
  const warnings: { icon: string; text: string; color: string }[] = [];
  if (isTooAvailable) warnings.push({ icon: "⚠️", text: "This message makes you look: too available", color: "#F87171" });
  if (isOverExplaining) warnings.push({ icon: "💬", text: "You're over-explaining — it signals insecurity", color: "#FB923C" });
  if (isNeedy) warnings.push({ icon: "📉", text: "Likely outcome: Delayed reply or ignored", color: "#F87171" });
  if (isLowValue) warnings.push({ icon: "🔻", text: "Apologizing here reduces your perceived value", color: "#FB923C" });
  if (isPassiveAggressive) warnings.push({ icon: "📉", text: "Likely outcome: Escalation or cold response", color: "#F87171" });
  if (warnings.length === 0) warnings.push({ icon: "✓", text: "No major red flags detected in this message", color: "#34D399" });

  // Insight
  let insight = "";
  if (isDistancing) insight = "This message signals emotional withdrawal. The sender is creating distance while testing your reaction. Responding defensively will accelerate the power shift against you.";
  else if (isNeedy) insight = "This message projects anxiety and over-investment. The recipient will sense the neediness before they even finish reading. Silence or a short reply would serve you better here.";
  else if (isOverExplaining) insight = "Long messages signal that you feel the need to justify yourself. That's a power leak. The more you explain, the less confident you appear. Cut it in half.";
  else if (isTooAvailable) insight = "Phrases like 'whenever you're free' and 'no worries' signal that you have no competing priorities. That removes your value. Be less available in your language.";
  else if (isPassiveAggressive) insight = "This message is designed to provoke a reaction. Engaging directly gives them what they want. The strongest response is calm indifference.";
  else insight = "This message reads as relatively neutral. The key is your reply — use it to set the tone you want for the rest of the conversation.";

  // Input score (how bad the original message is)
  let inputScore = 60;
  if (isNeedy) inputScore -= 20;
  if (isTooAvailable) inputScore -= 15;
  if (isOverExplaining) inputScore -= 15;
  if (isLowValue) inputScore -= 20;
  if (isPassiveAggressive) inputScore -= 10;
  if (isStrong) inputScore += 20;
  inputScore = Math.max(10, Math.min(85, inputScore));

  // 3 reply variants
  const replies = [
    {
      label: "Safe",
      labelColor: "#60A5FA",
      labelBg: "rgba(96,165,250,0.1)",
      text: isDistancing ? "Interesting. What made you say that?" : isNeedy ? "I'm good." : isPassiveAggressive ? "Noted." : "Got it.",
      score: 72,
      why: "Neutral and non-reactive. Doesn't give them what they're fishing for. Keeps you in control without escalating.",
    },
    {
      label: "Bold",
      labelColor: "#EC4899",
      labelBg: "rgba(236,72,153,0.1)",
      text: isDistancing ? "Tell me more." : isNeedy ? "You're fine." : isPassiveAggressive ? "Let me know when you're ready to talk properly." : "Works for me.",
      score: 88,
      why: "Confident and slightly unexpected. Creates a pause in their mind. They'll think about this reply longer than yours.",
    },
    {
      label: "High-Status",
      labelColor: "#FBBF24",
      labelBg: "rgba(251,191,36,0.1)",
      text: isDistancing ? "You crossed my mind." : isNeedy ? "." : isPassiveAggressive ? "No worries." : "Sounds good.",
      score: 94,
      why: "This works because it removes emotional neediness entirely, creates curiosity, and signals you have options. The shorter, the more powerful.",
    },
  ];

  // Pattern detection for history
  const patterns = [];
  if (isNeedy) patterns.push("Seeking reassurance");
  if (isTooAvailable) patterns.push("Signaling availability");
  if (isOverExplaining) patterns.push("Over-explaining");
  if (isLowValue) patterns.push("Self-deprecating");
  const pattern = patterns[0] || "Neutral messaging";

  return { rows, warnings, insight, replies, pattern, inputScore };
}

const STORAGE_KEY = "mianx_history";
const STREAK_KEY = "mianx_streak";

export default function InteractiveDemo() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [streak, setStreak] = useState(0);
  const [selectedReply, setSelectedReply] = useState<number | null>(null);
  const [todayCount, setTodayCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const h = JSON.parse(stored);
        setHistory(h);
        const best = Math.max(...h.map((x: AnalysisResult) => x.score), 0);
        setBestScore(best);
      }
      const s = localStorage.getItem(STREAK_KEY);
      if (s) {
        const { count, date, today, best } = JSON.parse(s);
        const isToday = date === new Date().toDateString();
        setStreak(isToday ? count : 0);
        setTodayCount(isToday ? (today || 0) : 0);
        if (best) setBestScore(best);
      }
    } catch {}
  }, []);

  const handleAnalyze = () => {
    if (!message.trim()) return;
    setIsLoading(true);
    setShowResult(false);
    setSelectedReply(null);

    setTimeout(() => {
      const result = analyzeMessage(message);
      setAnalysis(result);
      setIsLoading(false);
      setShowResult(true);
      setCurrentScore(result.inputScore);

      const newEntry: AnalysisResult = {
        message: message.slice(0, 60) + (message.length > 60 ? "…" : ""),
        timestamp: Date.now(),
        score: result.inputScore,
        label: result.inputScore < 40 ? "Needs work" : result.inputScore < 65 ? "Okay" : "Strong",
        labelColor: result.inputScore < 40 ? "#F87171" : result.inputScore < 65 ? "#FBBF24" : "#22C55E",
      };
      const updated = [newEntry, ...history].slice(0, 5);
      setHistory(updated);

      const newToday = todayCount + 1;
      const newStreak = streak + 1;
      setStreak(newStreak);
      setTodayCount(newToday);

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        localStorage.setItem(STREAK_KEY, JSON.stringify({
          count: newStreak,
          date: new Date().toDateString(),
          today: newToday,
        }));
      } catch {}
    }, 1600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  const copyReply = (text: string, index: number) => {
    try { navigator.clipboard.writeText(text); } catch {
      const el = document.createElement("textarea");
      el.value = text; document.body.appendChild(el); el.select();
      document.execCommand("copy"); document.body.removeChild(el);
    }
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const shareScore = () => {
    const score = currentScore || 0;
    const text = `My message scored ${score}/100 on MianX 🔥\nMost people stay below 60.\nhttps://mianhassam96.github.io/MianX/`;
    try {
      if (navigator.share) { navigator.share({ title: "MianX Score", text }); }
      else { navigator.clipboard.writeText(text); }
    } catch {}
    setShared(true);
    setTimeout(() => setShared(false), 3000);
  };

  const avgScore = history.length > 0
    ? Math.round(history.reduce((a, b) => a + b.score, 0) / history.length)
    : null;

  const topPattern = history.length > 1
    ? history.map(h => h.label).filter(l => l === "Needs work").length > history.length / 2
      ? "Over-explaining"
      : "Neutral messaging"
    : null;

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

  return (
    <section id="demo" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#EC4899]" />
          <span className="text-[#EC4899] text-sm font-medium tracking-widest uppercase">Live Demo</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4 text-white">
          Paste a message.{" "}
          <span className="text-gradient">See the truth.</span>
        </h2>

        {/* Urgency anchor */}
        <div className="flex items-center gap-3 mb-8 px-4 py-3 rounded-xl border border-[#EC4899]/20 bg-[#EC4899]/5">
          <span className="text-[#EC4899] text-lg">⚡</span>
          <p className="text-sm text-white/80 font-medium">
            Paste the message you&apos;re about to send.{" "}
            <span className="text-[#EC4899]">This takes 3 seconds.</span>{" "}
            <span className="text-white/40">It could change everything.</span>
          </p>
        </div>

        {/* Streak indicator */}
        {streak > 0 && (
          <div className="flex items-center gap-4 mb-6 px-4 py-3 rounded-xl border border-white/8 bg-white/3">
            <span className="text-lg">🔥</span>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <span className="text-white/70">
                <span className="text-[#FBBF24] font-bold">{streak}</span> messages analyzed
              </span>
              {todayCount > 0 && (
                <span className="text-white/40">
                  <span className="text-white/70 font-semibold">{todayCount}</span> today
                </span>
              )}
              {avgScore !== null && (
                <span className="text-white/40">
                  Avg score:{" "}
                  <span className={`font-bold ${avgScore < 40 ? "text-[#F87171]" : avgScore < 65 ? "text-[#FBBF24]" : "text-[#22C55E]"}`}>
                    {avgScore}/100
                  </span>
                  {avgScore < 50 && <span className="text-white/30 ml-1">— improving</span>}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Daily progress dashboard */}
        {(streak > 0 || bestScore > 0) && (
          <div className="mb-8 p-5 rounded-2xl border border-white/8 bg-[#111111]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#a1a1aa] font-mono uppercase tracking-widest">Your Progress</span>
              {streak >= 3 && <span className="text-xs text-[#FBBF24] font-semibold">🔥 On a roll</span>}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black mb-1" style={{ color: avgScore && avgScore < 40 ? "#F87171" : avgScore && avgScore < 65 ? "#FBBF24" : "#22C55E" }}>
                  {avgScore ?? "—"}
                  {avgScore && <span className="text-sm font-normal text-white/30">/100</span>}
                </div>
                <div className="text-xs text-[#a1a1aa]">Your average</div>
              </div>
              <div className="text-center border-x border-white/5">
                <div className="text-2xl font-black text-white mb-1">{todayCount}</div>
                <div className="text-xs text-[#a1a1aa]">Today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black mb-1 text-gradient">{bestScore > 0 ? bestScore : "—"}</div>
                <div className="text-xs text-[#a1a1aa]">Best score 🔥</div>
              </div>
            </div>
            {avgScore !== null && avgScore < 60 && (
              <p className="text-xs text-white/30 text-center mt-3 border-t border-white/5 pt-3">
                You&apos;re improving. <span className="text-white/50">Most people stay below 60.</span>
              </p>
            )}
            {avgScore !== null && avgScore >= 60 && (
              <p className="text-xs text-[#22C55E]/60 text-center mt-3 border-t border-white/5 pt-3">
                Above average. <span className="text-[#22C55E]/80">Top 20% of users.</span>
              </p>
            )}
          </div>
        )}

        {/* Terminal card */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-white/30 font-mono">mianx — message analyzer</span>
          </div>

          <div className="p-6">
            <div className="mb-2 text-xs text-[#a1a1aa] font-mono">$ paste_message</div>
            <textarea
              value={message}
              onChange={(e) => { setMessage(e.target.value); if (showResult) setShowResult(false); }}
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
          {showResult && analysis && (
            <div className="border-t border-white/5 p-6">
              {/* Analysis rows */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                <span className="text-xs text-[#a1a1aa] font-mono uppercase tracking-widest">Analysis Output</span>
              </div>
              <div className="space-y-3 mb-5">
                {analysis.rows.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#0d0d0d] border border-white/5 transition-all duration-300"
                    style={{ transitionDelay: `${index * 80}ms`, opacity: showResult ? 1 : 0, transform: showResult ? "none" : "translateX(8px)" }}
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

              {/* Warning flags */}
              <div className="mb-5 space-y-2">
                {analysis.warnings.map((flag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                    style={{
                      background: flag.color === "#34D399" ? "rgba(52,211,153,0.05)" : "rgba(248,113,113,0.05)",
                      borderColor: flag.color === "#34D399" ? "rgba(52,211,153,0.2)" : "rgba(248,113,113,0.2)",
                    }}
                  >
                    <span>{flag.icon}</span>
                    <span className="text-sm font-semibold" style={{ color: flag.color }}>{flag.text}</span>
                  </div>
                ))}
              </div>

              {/* 3 Reply variants */}
              <div className="mb-5">
                <p className="text-xs text-[#a1a1aa] font-mono uppercase tracking-widest mb-3">✅ Reply Strategies</p>
                <div className="space-y-3">
                  {analysis.replies.map((reply, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedReply(selectedReply === i ? null : i)}
                      className="rounded-xl border cursor-pointer transition-all duration-300"
                      style={{
                        background: selectedReply === i ? reply.labelBg : "rgba(0,0,0,0.2)",
                        borderColor: selectedReply === i ? reply.labelColor : "rgba(255,255,255,0.06)",
                        boxShadow: selectedReply === i ? `0 0 16px ${reply.labelBg}` : "none",
                      }}
                    >
                      <div className="flex items-center justify-between px-4 py-3 gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0" onClick={() => setSelectedReply(selectedReply === i ? null : i)}>
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ background: reply.labelBg, color: reply.labelColor }}
                          >
                            {reply.label}
                          </span>
                          <span className="text-white font-mono text-sm truncate">&ldquo;{reply.text}&rdquo;</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs font-bold" style={{ color: reply.labelColor }}>{reply.score}/100</span>
                          <button
                            onClick={(e) => { e.stopPropagation(); copyReply(reply.text, i); }}
                            className="text-xs px-2.5 py-1 rounded-lg border transition-all duration-200 font-semibold"
                            style={copied === i
                              ? { background: "rgba(34,197,94,0.15)", borderColor: "rgba(34,197,94,0.4)", color: "#22C55E" }
                              : { background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)", color: "#a1a1aa" }
                            }
                          >
                            {copied === i ? "✓ Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>
                      {selectedReply === i && (
                        <div className="px-4 pb-4">
                          <p className="text-xs text-[#a1a1aa] leading-relaxed border-t border-white/5 pt-3">
                            <span className="font-semibold" style={{ color: reply.labelColor }}>Why this works: </span>
                            {reply.why}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/25 mt-2 text-center">Tap any reply to see why it works</p>
              </div>

              {/* MianX Insight */}
              <div className="p-4 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 mb-4">
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  <span className="text-[#8B5CF6] font-semibold">MianX Insight: </span>
                  {analysis.insight}
                </p>
              </div>

              {/* Share score */}
              <button
                onClick={shareScore}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border transition-all duration-300 font-semibold text-sm"
                style={shared
                  ? { background: "rgba(34,197,94,0.1)", borderColor: "rgba(34,197,94,0.3)", color: "#22C55E" }
                  : { background: "rgba(139,92,246,0.06)", borderColor: "rgba(139,92,246,0.2)", color: "#8B5CF6" }
                }
              >
                {shared ? (
                  <>✓ Copied to clipboard — send it!</>
                ) : (
                  <>🔥 This message scored {currentScore}/100 — Share your score</>
                )}
              </button>
            </div>
          )}

          {/* Default state preview */}
          {!showResult && !isLoading && (
            <div className="border-t border-white/5 p-6 opacity-40">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="text-xs text-[#a1a1aa] font-mono uppercase tracking-widest">Analysis Output</span>
              </div>
              <div className="space-y-3">
                {["Hidden Intent", "Tone", "Risk", "Power Shift"].map((label, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#0d0d0d] border border-white/5">
                    <span className="text-[#a1a1aa] text-sm">{label}</span>
                    <div className="w-20 h-3 rounded bg-white/5" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-white/25 mt-4 font-mono">Press Enter or click to analyze</p>

        {/* History / return loop */}
        {history.length > 0 && (
          <div className="mt-8 rounded-2xl border border-white/8 bg-[#111111] overflow-hidden">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-white/3"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[#8B5CF6] text-sm font-semibold">🔁 Your Session</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] font-medium">
                  {history.length} analyzed
                </span>
                {avgScore !== null && (
                  <span className="text-xs text-[#a1a1aa]">
                    Avg: <span className={`font-bold ${avgScore < 40 ? "text-[#F87171]" : avgScore < 65 ? "text-[#FBBF24]" : "text-[#22C55E]"}`}>{avgScore}/100</span>
                  </span>
                )}
                {streak >= 3 && (
                  <span className="text-xs text-[#FBBF24] font-semibold">🔥 {streak} streak</span>
                )}
              </div>
              <span className="text-white/30 text-xs flex-shrink-0">{showHistory ? "▲" : "▼"}</span>
            </button>

            {showHistory && (
              <div className="border-t border-white/5 px-6 py-4 space-y-3">
                {history.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                    <span className="text-[#a1a1aa] text-sm font-mono truncate flex-1">&ldquo;{item.message}&rdquo;</span>
                    <span className="text-xs font-semibold flex-shrink-0" style={{ color: item.labelColor }}>
                      {item.score}/100
                    </span>
                  </div>
                ))}
                {topPattern && (
                  <p className="text-xs text-white/30 pt-1">
                    Your biggest pattern:{" "}
                    <span className="text-[#F87171] font-semibold">{topPattern}</span>
                  </p>
                )}
                {streak >= 2 && (
                  <p className="text-xs text-[#FBBF24]/60 pt-1">
                    🔥 You&apos;ve improved <span className="text-[#FBBF24] font-semibold">{streak} messages</span> today
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
