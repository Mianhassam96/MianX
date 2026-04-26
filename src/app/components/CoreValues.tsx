"use client";

const values = [
  {
    icon: "🔍",
    title: "Hidden Meaning",
    description:
      "Understand what they really mean—not just what they say.",
    accent: "#8B5CF6",
    accentBg: "rgba(139, 92, 246, 0.08)",
    accentBorder: "rgba(139, 92, 246, 0.2)",
  },
  {
    icon: "🎯",
    title: "Outcome Prediction",
    description:
      "See how each reply will change the conversation before sending.",
    accent: "#EC4899",
    accentBg: "rgba(236, 72, 153, 0.08)",
    accentBorder: "rgba(236, 72, 153, 0.2)",
  },
  {
    icon: "⚖️",
    title: "Power Balance",
    description:
      "Know who's in control—and how to take it back.",
    accent: "#8B5CF6",
    accentBg: "rgba(139, 92, 246, 0.08)",
    accentBorder: "rgba(139, 92, 246, 0.2)",
  },
  {
    icon: "🧠",
    title: "Smart Reply Strategy",
    description:
      "Get replies designed for your goal, not generic suggestions.",
    accent: "#EC4899",
    accentBg: "rgba(236, 72, 153, 0.08)",
    accentBorder: "rgba(236, 72, 153, 0.2)",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #EC4899, #8B5CF6, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#8B5CF6]" />
          <span className="text-[#8B5CF6] text-sm font-medium tracking-widest uppercase">
            Core Advantage
          </span>
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            This isn&apos;t a reply tool.{" "}
            <span className="text-gradient">
              It&apos;s a conversation advantage.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border transition-all duration-300 cursor-default"
              style={{
                background: value.accentBg,
                borderColor: value.accentBorder,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = value.accent;
                el.style.boxShadow = `0 0 30px ${value.accentBg}, 0 0 60px ${value.accentBg}`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = value.accentBorder;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: value.accentBg }}
              >
                {value.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: value.accent }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-20"
                style={{
                  background: `radial-gradient(circle at top right, ${value.accent}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
