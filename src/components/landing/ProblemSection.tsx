import { Download, Send, ClipboardList } from "lucide-react";

const steps = [
  { icon: Download, label: "Connect", desc: "Link notices to matters automatically" },
  { icon: Send, label: "Automate", desc: "Download, rename, file & distribute in seconds" },
  { icon: ClipboardList, label: "Monitor", desc: "Track every transaction with full audit trails" },
];

const ProblemSection = () => (
  <section className="bg-surface pt-12 lg:pt-16 pb-16 md:pb-24">
    <div className="container max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[55fr_45fr] gap-12 items-start">
        {/* Left — content */}
        <div className="space-y-6">
          <h2 className="text-[26px] md:text-[36px] font-bold text-navy leading-tight">
            Your Team Spends 5–60+ Minutes Per Notice. Multiply That by Thousands.
          </h2>
          <div className="text-[17px] leading-relaxed text-muted-foreground space-y-4 max-w-lg">
            <p>
              Every ECF notice triggers 8 manual steps — download, rename, file, route, distribute. Repeat that thousands of times a month.
            </p>
            <p>ECFX automates the entire workflow:</p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
            {steps.map((s) => (
              <div key={s.label} className="space-y-2">
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center" style={{ backgroundColor: "rgba(26,86,219,0.08)" }}>
                  <s.icon className="h-5 w-5 text-[#1A56DB]" />
                </div>
                <p className="text-sm font-bold text-navy">{s.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="space-y-3">
          {/* Featured card */}
          <div
            className="rounded-[14px] p-7 text-center"
            style={{ backgroundColor: "rgba(26,86,219,0.06)", border: "1px solid rgba(26,86,219,0.12)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <p className="text-6xl md:text-7xl font-bold leading-none" style={{ color: "#1A56DB" }}>93%</p>
            <p className="text-sm mt-3" style={{ color: "#64748b" }}>average reduction in processing costs</p>
          </div>

          {/* Two smaller cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-background p-5 text-center" style={{ border: "1px solid rgba(26,86,219,0.12)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <p className="text-3xl font-bold text-navy leading-none">100s</p>
              <p className="text-xs text-muted-foreground mt-2">of hours saved per week</p>
            </div>
            <div className="rounded-[14px] bg-background p-5 text-center" style={{ border: "1px solid rgba(26,86,219,0.12)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <p className="text-3xl font-bold text-navy leading-none">&lt;5s</p>
              <p className="text-xs text-muted-foreground mt-2">to process each notice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
