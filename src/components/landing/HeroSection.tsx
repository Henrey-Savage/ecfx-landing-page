import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Never miss a court deadline.",
  "Instantly route notices to the right team.",
  "Save directly to your firm's DMS.",
];

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    litigators: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", litigators: "" });
  };

  return (
    <section className="bg-surface">
      <div className="container max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-5 gap-12 items-center">
        {/* Left copy — 3 cols */}
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Stop Wasting Billable Hours on ECF Notices.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            See why top Am Law 100 firms use ECFX to intelligently automate their court notice routing and mitigate risk.
          </p>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-foreground">
                <Check className="h-5 w-5 text-success flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right form — 2 cols */}
        <div className="md:col-span-2">
          <div className="bg-card rounded-xl shadow-card p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-2">
                <Check className="h-10 w-10 text-success mx-auto" />
                <p className="text-lg font-semibold text-foreground">Thank you!</p>
                <p className="text-muted-foreground text-sm">We will be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground text-center">Schedule a Demo</h3>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Business Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Number of Litigators</label>
                  <select
                    required
                    value={form.litigators}
                    onChange={(e) => setForm({ ...form, litigators: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select…</option>
                    <option value="1-9">1-9</option>
                    <option value="10-49">10-49</option>
                    <option value="50-149">50-149</option>
                    <option value="150+">150+</option>
                  </select>
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
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
