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

      <div className="mt-8 mb-4 space-y-0.5">
        <p className="font-bold text-foreground" style={{ fontSize: "14px" }}>
          Kristi Pallante
        </p>
        <p className="text-muted-foreground" style={{ fontSize: "13px" }}>
          Director of Litigation Operations, Rottenstreich Farley Bronstein Fisher Potter Hodas LLP
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
