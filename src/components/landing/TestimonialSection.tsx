const TestimonialSection = () => (
  <section className="relative bg-background py-[60px] md:py-[80px] pb-[140px] md:pb-[160px]" style={{ minHeight: "280px" }}>
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
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 left-0 block w-full" style={{ height: "80px", marginBottom: "-1px" }}>
      <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="#2D8AE5" />
    </svg>
  </section>
);

export default TestimonialSection;
