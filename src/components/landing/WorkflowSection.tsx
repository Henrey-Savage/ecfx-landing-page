import { Download, Send, ClipboardList } from "lucide-react";

const phases = [
  {
    icon: Download,
    name: "Capture",
    steps: [
      "Connect notice to client/matter number",
      "Download all associated documents",
      "Profile with your firm's naming conventions",
    ],
  },
  {
    icon: Send,
    name: "Distribute",
    steps: [
      "Store in DMS, client share folders, and/or cloud",
      "Determine all parties to notify",
      "Send notifications with PDFs or DMS links",
    ],
  },
  {
    icon: ClipboardList,
    name: "Record",
    steps: [
      "Alert docketing team for calendaring",
      "Record each transaction",
      "Generate billing load file",
    ],
  },
];

const WorkflowSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container max-w-5xl mx-auto px-6">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-[32px] md:text-[36px] font-bold text-navy leading-tight">
          From Notice to Action in Seconds
        </h2>
        <p className="text-lg text-muted-foreground">
          ECFX Notice automates all 8 workflow steps of processing an ECF notice.
        </p>
      </div>

      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {phases.map((phase) => (
          <div key={phase.name} className="px-6 md:px-8 py-8 md:py-0 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0">
            <div className="w-10 h-1 bg-destructive rounded-full mb-5" />
            <phase.icon className="h-6 w-6 text-destructive mb-3" />
            <h3 className="text-lg font-bold text-navy mb-4">{phase.name}</h3>
            <ul className="space-y-3">
              {phase.steps.map((step) => (
                <li key={step} className="text-[15px] text-muted-foreground leading-relaxed">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkflowSection;
