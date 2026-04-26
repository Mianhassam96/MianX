"use client";

const products = [
  {
    name: "MianX Reply",
    tagline: "Analyze & respond",
    description:
      "The core engine. Paste any message and get instant analysis of hidden intent, tone, power dynamics, and the optimal reply strategy.",
    icon: "💬",
    status: "live",
    statusLabel: "Available Now",
    color: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.2)",
    features: ["Hidden intent analysis", "Tone detection", "Reply scoring"],
  },
  {
    name: "MianX Flow",
    tagline: "Plan conversations",
    description:
      "Map out entire conversation arcs before they happen. Set your goal, define the path, and let MianX guide you to the outcome you want.",
    icon: "🗺️",
    status: "soon",
    statusLabel: "Coming Soon",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.08)",
    border: "rgba(236, 72, 153, 0.2)",
    features: ["Conversation mapping", "Goal setting", "Path optimization"],
  },
  {
    name: "MianX Vault",
    tagline: "Save important chats",
    description:
      "Archive and analyze your most important conversations. Build a personal database of patterns, insights, and winning strategies.",
    icon: "🔐",
    status: "soon",
    statusLabel: "Coming Soon",
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.08)",
    border: "rgba(96, 165, 250, 0.2)",
    features: ["Chat archiving", "Pattern library", "Insight history"],
  },
];

export default function Ecosystem() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#8B5CF6]" />
          <span className="text-[#8B5CF6] text-sm font-medium tracking-widest uppercase">
            The Ecosystem
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            More than replies.{" "}
            <span className="text-gradient">A full system.</span>
          </h2>
        </div>
        <p className="text-[#a1a1aa] text-lg mb-14 max-w-xl">
          MianX is building the complete toolkit for conversation intelligence.
        </p>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border transition-all duration-300 cursor-default"
              style={{
                background: product.bg,
                borderColor: product.border,
              }}
              onMouseEnter={(e) => {
                if (product.status === "live") {
                  const el = e.currentTarget;
                  el.style.borderColor = product.color;
                  el.style.boxShadow = `0 0 30px ${product.bg}`;
                  el.style.transform = "translateY(-4px)";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = product.border;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl">{product.icon}</span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={
                    product.status === "live"
                      ? {
                          background: "rgba(34, 197, 94, 0.1)",
                          color: "#22C55E",
                          border: "1px solid rgba(34, 197, 94, 0.2)",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          color: "#a1a1aa",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }
                  }
                >
                  {product.statusLabel}
                </span>
              </div>

              {/* Name & tagline */}
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: product.color }}
              >
                {product.name}
              </h3>
              <p className="text-white/50 text-sm font-medium mb-4">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {product.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: product.color }}
                    />
                    <span className="text-xs text-white/50">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Dimmed overlay for coming soon */}
              {product.status === "soon" && (
                <div className="absolute inset-0 rounded-2xl bg-black/20 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
