const logos = [
  { src: "https://info.goecfx.com/hs-fs/hubfs/Dentons-1.png?width=250&name=Dentons-1.png", alt: "Dentons" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/orrick.png?width=250&name=orrick.png", alt: "Orrick" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/Picture2.png?width=250&name=Picture2.png", alt: "Cooley" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Perkinscole.png?width=250&name=Perkinscole.png", alt: "Perkins Coie" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/steptoe.png?width=250&name=steptoe.png", alt: "Steptoe" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/kobre.png?width=250&name=kobre.png", alt: "Kobre & Kim" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/butlersnow.png?width=250&name=butlersnow.png", alt: "Butler Snow" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Schiff-1.png?width=250&name=Schiff-1.png", alt: "Schiff Hardin" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/LK-1.png?width=250&name=LK-1.png", alt: "Levy Konigsberg" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Seeger-1.png?width=250&name=Seeger-1.png", alt: "Seeger Weiss" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/Picture6.png?width=250&name=Picture6.png", alt: "Cohen Clair" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Russell-1.png?width=250&name=Russell-1.png", alt: "Russell Beck" },
];

const SocialProof = () => (
  <section style={{ backgroundColor: "#F7F8FA" }} className="py-[60px]">
    <div className="container max-w-5xl mx-auto px-6 text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-10">
        Trusted by Leading Law Firms
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-items-center">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="min-h-[60px] max-h-[70px] w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
          />
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
