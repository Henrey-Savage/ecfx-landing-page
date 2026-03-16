import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
"Processes notices in seconds, not 5–60+ minutes",
"Seamless DMS, case management & billing integration"];


const inputClass =
"w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    litigators: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", litigators: "" });
  };

  return (
    <section id="hero-section" className="relative" style={{
      backgroundColor: "#2D8AE5",
      backgroundImage: "url('https://info.goecfx.com/hubfs/BG-1.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center"
    }}>
      <div className="container max-w-6xl mx-auto px-4 md:px-6 pt-[110px] md:pt-[110px] pb-[80px] md:pb-[80px] grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        {/* Left copy — 3 cols */}
        <div className="md:col-span-3 space-y-7">
          <p className="text-[13px] uppercase font-semibold tracking-[2px] text-destructive">ENTERPRISE NOTICE MANAGEMENT</p>
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-navy-foreground tracking-tight">
            Automate Every ECF Notice From Download to Distribution — In Seconds
          </h1>
          <p className="text-lg text-navy-foreground/70 max-w-lg leading-relaxed">
            Trusted by Dentons, Cooley, Perkins Coie, and leading litigation teams. Eliminate missed deadlines, reduce malpractice exposure, and free your docketing team from hours of manual processing every week.
          </p>
          <ul className="space-y-4 pt-2">
            {features.map((f) =>
            <li key={f} className="flex items-center gap-3 text-navy-foreground">
                <Check className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-base">{f}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Right form — 2 cols */}
        <div className="md:col-span-2">
          <div id="demo-form" className="bg-background rounded-xl px-6 md:px-8 py-7" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            {submitted ?
            <div className="text-center py-8 space-y-2">
                <Check className="h-10 w-10 text-navy mx-auto" />
                <p className="text-lg font-semibold text-navy">Thank you!</p>
                <p className="text-muted-foreground text-sm">We will be in touch.</p>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-navy text-center">Get Your Custom Demo</h3>
                <p className="text-sm text-muted-foreground text-center">See how ECFX can save your firm hundreds of hours per week.</p>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">First Name *</label>
                    <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Last Name *</label>
                    <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Business Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <select required value={form.litigators} onChange={(e) => setForm({ ...form, litigators: e.target.value })} className={inputClass}>
                    <option value="">Number of Litigators…</option>
                    <option value="1-9">1-9</option>
                    <option value="10-49">10-49</option>
                    <option value="50-149">50-149</option>
                    <option value="150+">150+</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full min-h-[48px] bg-destructive text-destructive-foreground hover:bg-[hsl(var(--teal-hover))] hover:scale-[1.02] transition-transform font-semibold text-base">
                  Schedule My Custom Demo
                </Button>
              </form>
            }
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 left-0 block w-full" style={{ height: "80px", marginBottom: "-1px" }}>
        <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
      </svg>
    </section>);

};

export default HeroSection;