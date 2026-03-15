import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Never miss a court deadline.",
  "Instantly route notices to the right team.",
  "Save directly to your firm's DMS.",
];

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    litigators: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", company: "", phone: "", litigators: "" });
  };

  return (
    <section className="bg-navy">
      <div className="container max-w-6xl mx-auto px-6 pt-10 md:pt-[60px] pb-16 md:pb-24 grid md:grid-cols-5 gap-14 items-center">
        {/* Left copy — 3 cols */}
        <div className="md:col-span-3 space-y-7">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-navy-foreground tracking-tight">
            Stop Wasting Billable Hours on ECF Notices.
          </h1>
          <p className="text-lg text-navy-foreground/70 max-w-lg leading-relaxed">
            See why top Am Law 100 firms use ECFX to intelligently automate their court notice routing and mitigate risk.
          </p>
          <ul className="space-y-4 pt-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-navy-foreground">
                <Check className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-base">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right form — 2 cols */}
        <div className="md:col-span-2">
          <div className="bg-background rounded-2xl p-8" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}>
            {submitted ? (
              <div className="text-center py-8 space-y-2">
                <Check className="h-10 w-10 text-navy mx-auto" />
                <p className="text-lg font-semibold text-navy">Thank you!</p>
                <p className="text-muted-foreground text-sm">We will be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-navy text-center">Schedule a Demo</h3>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">First Name *</label>
                  <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Last Name *</label>
                  <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Business Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Firm / Company *</label>
                  <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Number of Litigators *</label>
                  <select required value={form.litigators} onChange={(e) => setForm({ ...form, litigators: e.target.value })} className={inputClass}>
                    <option value="">Select…</option>
                    <option value="1-9">1-9</option>
                    <option value="10-49">10-49</option>
                    <option value="50-149">50-149</option>
                    <option value="150+">150+</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full bg-destructive text-destructive-foreground hover:bg-[hsl(var(--teal-hover))] hover:scale-[1.02] transition-transform font-semibold text-base">
                  Schedule My Custom Demo
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
