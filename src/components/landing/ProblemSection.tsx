const ProblemSection = () => (
  <section className="bg-surface pt-12 lg:pt-16 pb-16 md:pb-24">
    <div className="container max-w-4xl mx-auto px-6 text-center space-y-8">
      <h2 className="text-[32px] md:text-[36px] font-bold text-navy leading-tight">
        Your Team Spends 5–60+ Minutes Per Notice. Multiply That by Thousands.
      </h2>
      <div className="max-w-3xl mx-auto text-[17px] leading-relaxed text-muted-foreground space-y-4">
        <p>
          Every ECF notice triggers the same 8 manual steps — download, rename, file, route, distribute.
        </p>
        <p>
          Multiply that across thousands of notices per month. The result: wasted hours, missed deadlines, and processing errors that put your firm at risk.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div
          className="bg-background rounded-2xl px-8 py-10"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
        >
          <p className="text-[64px] md:text-[72px] font-bold text-destructive leading-none">93%</p>
          <p className="text-lg text-navy mt-3">
            average reduction in processing costs
          </p>
        </div>
        <div
          className="bg-background rounded-2xl px-8 py-10"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
        >
          <p className="text-[64px] md:text-[72px] font-bold text-destructive leading-none">Seconds</p>
          <p className="text-lg text-navy mt-3">
            to process each notice, not 5-60+ minutes
          </p>
        </div>
        <div
          className="bg-background rounded-2xl px-8 py-10"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
        >
          <p className="text-[64px] md:text-[72px] font-bold text-destructive leading-none">100%</p>
          <p className="text-lg text-navy mt-3">
            seamless DMS and billing integration
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
