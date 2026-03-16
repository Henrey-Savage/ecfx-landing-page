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
  backgroundColor: "#4A7FC4",
  backgroundImage: "url('https://info.goecfx.com/hubfs/BG-1.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "center center"
};

const BenefitsSection = () => {
  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24" style={bgStyle}>
      <div className="container max-w-5xl mx-auto px-6">
        {/* CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-[32px] font-bold text-navy-foreground leading-tight">
            Ready to Automate Your ECF Notice Processing?
          </h2>
          <p className="text-lg" style={{ color: "#B0BEC5" }}>
            Join 100+ law firms saving hundreds of hours every week.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-destructive text-destructive-foreground font-bold text-base hover:bg-[hsl(var(--teal-hover))] transition-colors">
            
            Schedule My Demo →
          </button>
          <p className="text-sm" style={{ color: "#8899AA" }}>
            Or email sales@goecfx.com &nbsp;•&nbsp; (310) 750-4160
          </p>
        </div>
      </div>
    </section>);

};

export default BenefitsSection;