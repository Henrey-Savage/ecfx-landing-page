const TestimonialSection = () => (
  <section className="bg-background border-t border-border py-[60px] md:py-[80px]" style={{ minHeight: "280px" }}>
    <div className="mx-auto max-w-[680px] px-6 text-center">
      <div
        className="text-primary/10 font-serif leading-none mb-4 select-none"
        style={{ fontSize: "80px" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <blockquote
        className="font-serif italic text-foreground text-center text-[20px] md:text-[24px]"
        style={{ lineHeight: 1.5 }}
      >
        ECFX has given superpowers to firm staff. They can manage notices in one
        tenth of the time and with 10x more accuracy than completing the work
        manually.
      </blockquote>

      <div className="mt-8 space-y-0.5">
        <p className="font-bold text-foreground" style={{ fontSize: "14px" }}>
          The LegalTech Fund
        </p>
        <p className="text-muted-foreground" style={{ fontSize: "13px" }}>
          Lead Investor, ECFX Seed Round
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
