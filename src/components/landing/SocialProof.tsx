import { useEffect, useRef, useState } from "react";

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

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-10 text-center">
          Trusted by Leading Law Firms
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
                transitionDelay: visible ? `${i * 100}ms` : "0ms",
              }}
            >
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
};

export default SocialProof;
