const row1 = [
  { src: "https://info.goecfx.com/hs-fs/hubfs/Dentons-1.png?width=250&name=Dentons-1.png", alt: "Dentons" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/orrick.png?width=250&name=orrick.png", alt: "Orrick" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/Picture2.png?width=250&name=Picture2.png", alt: "Cooley" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Perkinscole.png?width=250&name=Perkinscole.png", alt: "Perkins Coie" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/steptoe.png?width=250&name=steptoe.png", alt: "Steptoe" },
];

const row2 = [
  { src: "https://www.goecfx.com/hs-fs/hubfs/kobre.png?width=250&name=kobre.png", alt: "Kobre & Kim" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/butlersnow.png?width=250&name=butlersnow.png", alt: "Butler Snow" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Schiff-1.png?width=250&name=Schiff-1.png", alt: "Schiff Hardin" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/LK-1.png?width=250&name=LK-1.png", alt: "Levy Konigsberg" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Seeger-1.png?width=250&name=Seeger-1.png", alt: "Seeger Weiss" },
];

const row3 = [
  { src: "https://www.goecfx.com/hs-fs/hubfs/Picture6.png?width=250&name=Picture6.png", alt: "Cohen Clair" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Russell-1.png?width=250&name=Russell-1.png", alt: "Russell Beck" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Ropers-1.png?width=250&name=Ropers-1.png", alt: "Ropers Majeski" },
  { src: "https://info.goecfx.com/hs-fs/hubfs/Cohen.png?width=250&name=Cohen.png", alt: "Cohen" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/Picture3.png?width=250&name=Picture3.png", alt: "Buchanan" },
];

const LogoCard = ({ src, alt }: { src: string; alt: string }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center"
    style={{
      backgroundColor: "#ECEEF1",
      borderRadius: "12px",
      padding: "20px 32px",
      height: "80px",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{ maxHeight: "45px", width: "auto", filter: "grayscale(100%)", opacity: 0.7 }}
      className="object-contain"
    />
  </div>
);

const LogoRow = ({
  logos,
  direction,
  duration,
}: {
  logos: typeof row1;
  direction: "left" | "right";
  duration: number;
}) => {
  const animationName = direction === "left" ? "scroll-left" : "scroll-right";
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <LogoCard key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

const SocialProof = () => (
  <>
    <style>{`
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `}</style>
    <section style={{ backgroundColor: "#F7F8FA", padding: "50px 0", overflow: "hidden" }}>
      <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-10 text-center">
        Trusted by Leading Law Firms
      </p>
      <div className="flex flex-col gap-4">
        <LogoRow logos={row1} direction="left" duration={35} />
        <LogoRow logos={row2} direction="right" duration={40} />
        <LogoRow logos={row3} direction="left" duration={30} />
      </div>
    </section>
  </>
);

export default SocialProof;
