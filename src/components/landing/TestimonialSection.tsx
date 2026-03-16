const TestimonialSection = () => (
  <section className="relative bg-background pt-2.5 pb-2.5">
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
        ECFX Notice is a secret weapon for me. I want to keep it just for our
        firm. I feel like this is actually a competitive edge for us.
      </blockquote>

      <div className="mt-8 mb-20 space-y-0.5">
        <p className="font-bold text-foreground" style={{ fontSize: "14px" }}>
          Kristi Pallante
        </p>
        <p className="text-muted-foreground" style={{ fontSize: "13px" }}>
          Director of Litigation Operations, Rottenstreich Farley Bronstein Fisher Potter Hodas LLP
        </p>
      </div>
    </div>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 left-0 block w-full" style={{ height: "80px", marginBottom: "-1px" }}>
      <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="#2D8AE5" />
    </svg>
  </section>
);

export default TestimonialSection;
