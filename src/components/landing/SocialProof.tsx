const firms = ["Cooley", "Steptoe", "Orrick", "Buchanan", "Sacks Tierney"];

const SocialProof = () => (
  <section className="bg-surface py-14">
    <div className="container max-w-6xl mx-auto px-6 text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-10">
        Trusted by Leading Law Firms
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...firms, ...firms].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-12 text-2xl font-bold text-foreground opacity-40 grayscale select-none flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
