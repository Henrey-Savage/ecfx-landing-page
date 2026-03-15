const logos = [
  { src: "https://info.goecfx.com/hs-fs/hubfs/Dentons-1.png?width=250&name=Dentons-1.png", alt: "Dentons" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/Picture2.png?width=250&name=Picture2.png", alt: "Cooley" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/orrick.png?width=250&name=orrick.png", alt: "Orrick" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/steptoe.png?width=250&name=steptoe.png", alt: "Steptoe" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/kobre.png?width=250&name=kobre.png", alt: "Kobre & Kim" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Schiff-1.png?width=250&name=Schiff-1.png", alt: "ArentFox Schiff" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Seeger-1.png?width=250&name=Seeger-1.png", alt: "Seeger Weiss LLP" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/butlersnow.png?width=250&name=butlersnow.png", alt: "Butler Snow" },
];

const SocialProof = () => (
  <section className="py-16 lg:py-20">
    <div className="container mx-auto px-4">
      <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-10 text-center">
        Trusted by Leading Law Firms
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8 max-w-5xl mx-auto">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-[180px] h-[64px] object-contain grayscale opacity-55"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
