const firms = ["Cooley", "Steptoe", "Orrick", "Buchanan", "Sacks Tierney"];

const SocialProof = () => (
  <section className="bg-background py-12">
    <div className="container max-w-6xl mx-auto px-6 text-center">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8">
        Trusted by Leading Law Firms
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {firms.map((name) => (
          <span
            key={name}
            className="text-xl font-bold text-foreground opacity-60 grayscale select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
