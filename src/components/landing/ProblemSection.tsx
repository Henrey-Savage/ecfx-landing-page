const stats = [
{ tag: "CHEAPER", number: "93%", label: "reduction in processing costs" },
{ tag: "FASTER", number: "<5s", label: "to process each notice" },
{ tag: "BETTER", number: "100%", label: "processed accurately, free from human error" }];


const ProblemSection = () =>
<section className="relative bg-surface pt-12 lg:pt-16 pb-28 md:pb-32">
    <div className="container max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[55fr_45fr] gap-12 items-start">
        {/* Left — headline + quote */}
        <div className="space-y-6">
          <h2 className="text-[26px] md:text-[36px] font-bold text-navy leading-tight">
            Thousands of Notices.<br />Seconds to Process.<br />Zero Missed.
          </h2>

          <div style={{ borderLeft: "3px solid rgba(26,86,219,0.2)", paddingLeft: "16px" }}>
            <p className="italic text-foreground" style={{ fontSize: "15px", lineHeight: 1.55 }}>
              "When you have a system that relies 100% on the case team to forward documents to your docketing team, you have a 100% chance that you don't have everything being forwarded."
            </p>
            <p style={{ fontSize: "13px", color: "#64748b", marginTop: "8px" }}>
              — Tara Eberhart, Director of Practice Management, Dentons U.S. LLP
            </p>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="flex flex-col gap-3">
          {stats.map((s) =>
        <div
          key={s.tag}
          className="bg-background"
          style={{
            border: "1px solid rgba(26,86,219,0.1)",
            borderRadius: "12px",
            padding: "20px 24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
          
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#10b981", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {s.tag}
              </p>
              <p style={{ fontSize: "36px", fontWeight: 700, color: "#1A56DB", lineHeight: 1.1, marginTop: "4px" }}>
                {s.number}
              </p>
              <p style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                {s.label}
              </p>
            </div>
        )}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-center" style={{ fontSize: "18px", fontWeight: 600, color: "#1A56DB", marginTop: "32px" }}>
        Cheaper. Faster. Better.  Pick three.
      </p>
    </div>

    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 left-0 block w-full" style={{ height: "80px", marginBottom: "-1px" }}>
      <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
    </svg>
  </section>;


export default ProblemSection;