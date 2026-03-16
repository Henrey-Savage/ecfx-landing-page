const ProblemSection = () => (
  <section className="bg-surface pt-12 lg:pt-16 pb-16 md:pb-24">
    <div className="container max-w-4xl mx-auto px-6 text-center space-y-8">
      <h2 className="text-[32px] md:text-[36px] font-bold text-navy leading-tight">
        Your Team Spends 5–60+ Minutes Per Notice. Multiply That by Thousands.
      </h2>
      <div className="max-w-2xl mx-auto text-[17px] leading-relaxed text-muted-foreground space-y-4">
        <p>
          Every ECF notice triggers 8 manual steps — download, rename, file, route, distribute. Repeat that thousands of times a month.
        </p>
        <p>ECFX automates the entire workflow. The result:</p>
      </div>
      <div className="flex flex-col items-center gap-3 pt-4">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold text-destructive leading-none">93%</p>
        <p className="text-lg text-muted-foreground">average reduction in processing costs</p>
        <p className="text-sm text-muted-foreground tracking-wide uppercase pt-2">
          FASTER&nbsp; ·&nbsp; CHEAPER&nbsp; ·&nbsp; ERROR-FREE
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
