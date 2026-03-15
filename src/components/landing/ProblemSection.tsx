const ProblemSection = () => (
  <section className="bg-surface py-16 md:py-24">
    <div className="container max-w-4xl mx-auto px-6 text-center space-y-8">
      <h2 className="text-[32px] md:text-[36px] font-bold text-navy leading-tight">
        Your Team Spends 5–60+ Minutes Per Notice. Multiply That by Thousands.
      </h2>
      <p className="max-w-[700px] mx-auto text-[17px] leading-relaxed text-muted-foreground">
        Legal assistants and paralegals manually download, rename, file, route, and distribute every ECF notice — 8 repetitive steps per notice. The result: wasted time, human error, missed deadlines, and processing delays that put your firm at risk.
      </p>
      <div
        className="inline-block bg-background rounded-2xl mx-auto px-[60px] py-10"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
      >
        <p className="text-[64px] md:text-[72px] font-bold text-destructive leading-none">93%</p>
        <p className="text-lg text-navy mt-3">
          average reduction in ECF processing costs with ECFX Notice
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
