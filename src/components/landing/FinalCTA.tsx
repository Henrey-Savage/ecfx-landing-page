const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24" style={{ background: "linear-gradient(180deg, #0F2B4C 0%, #0A1F38 100%)" }}>
      <div className="container max-w-3xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-[32px] font-bold text-navy-foreground leading-tight">
          Ready to Automate Your ECF Notice Processing?
        </h2>
        <p className="text-lg" style={{ color: "#B0BEC5" }}>
          Join 100+ law firms saving hundreds of hours every week.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-destructive text-destructive-foreground font-bold text-base hover:bg-[hsl(var(--teal-hover))] transition-colors"
        >
          Schedule My Demo →
        </button>
        <p className="text-sm" style={{ color: "#8899AA" }}>
          Or email sales@goecfx.com &nbsp;•&nbsp; (310) 750-4160
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
