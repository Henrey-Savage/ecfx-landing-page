import { Clock, Settings, ShieldCheck, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Reduce processing from hours to seconds. Firms using ECFX cut processing costs by an average of 93%.",
  },
  {
    icon: Settings,
    title: "Gain Control",
    description: "Consistent document profiling, flexible notification templates, and multiple storage locations — all customizable by office, practice group, and client.",
  },
  {
    icon: ShieldCheck,
    title: "Mitigate Risk",
    description: "Eliminate processing delays and human error. Never miss a notice with alerts, catch-all routing, and full ethical wall support.",
  },
  {
    icon: BarChart3,
    title: "Improve Visibility",
    description: "Firmwide dashboard with customizable ECF metrics for monitoring case, client, and timekeeper activity.",
  },
];

const BenefitsSection = () => (
  <section className="py-16 md:py-24" style={{
    backgroundColor: "#4A7FC4",
    backgroundImage: "url('https://info.goecfx.com/hubfs/BG-1.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }}>
    <div className="container max-w-5xl mx-auto px-6">
      <h2 className="text-[32px] md:text-[36px] font-bold text-navy-foreground text-center mb-14 leading-tight">
        Built for the Way Firms Actually Work
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-xl p-7 border border-white/15"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
          >
            <b.icon className="h-7 w-7 text-destructive mb-4" />
            <h3 className="text-xl font-bold text-navy-foreground mb-2">{b.title}</h3>
            <p className="text-[15px] leading-relaxed" style={{ color: "#B0BEC5" }}>{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
