import { Clock, Settings, ShieldCheck, BarChart3 } from "lucide-react";

const benefits = [
{
  icon: Clock,
  title: "Save Time",
  description: "Reduce processing from hours to seconds. Firms using ECFX cut processing costs by an average of 93%."
},
{
  icon: Settings,
  title: "Gain Control",
  description: "Consistent document profiling, flexible notification templates, and multiple storage locations — all customizable by office, practice group, and client."
},
{
  icon: ShieldCheck,
  title: "Mitigate Risk",
  description: "Eliminate processing delays and human error. Never miss a notice with alerts, catch-all routing, and full ethical wall support."
},
{
  icon: BarChart3,
  title: "Improve Visibility",
  description: "Firmwide dashboard with customizable ECF metrics for monitoring case, client, and timekeeper activity."
}];


const bgStyle = {
  backgroundColor: "#2D8AE5",
  backgroundImage: "url('https://info.goecfx.com/hubfs/BG-1.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "top center"
};

const BenefitsSection = () => {
  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ ...bgStyle, position: "relative" }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px", position: "absolute", top: 0, left: 0, zIndex: 1 }}>
        <path d="M0,0 L1440,0 L1440,0 C1080,80 360,80 0,0 Z" fill="#ffffff" />
      </svg>
      <div className="py-16 md:py-24" style={{ paddingTop: "80px" }}>
      <div className="container max-w-5xl mx-auto px-6">
        {/* CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-[24px] md:text-[32px] font-bold text-navy-foreground leading-tight">
            Are You <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>Still</span> Manually Processing ECF Notices?
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.45)" }}>
            Join Dentons, Cooley, Perkins Coie, and leading litigation teams saving hundreds of hours every week.
          </p>
          <button
            onClick={scrollToForm}
            className="w-full md:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-destructive text-destructive-foreground font-bold text-base hover:bg-[hsl(var(--teal-hover))] transition-colors">
            Schedule My Custom Demo →
          </button>
          <p style={{ fontSize: "13px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginTop: "16px", marginBottom: "16px" }}>
            Typical onboarding takes 2–3 weeks — start before your next filing deadline.
          </p>
          <div style={{ marginTop: "4px" }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              (310) 750-4160
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
              or email sales@goecfx.com
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>);

};

export default BenefitsSection;