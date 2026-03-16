import { useEffect, useRef, useState } from "react";
import arentfoxLogo from "@/assets/logos/arentfox-schiff.webp";

const logos = [
  { src: "https://info.goecfx.com/hs-fs/hubfs/Dentons-1.png?width=250&name=Dentons-1.png", alt: "Dentons" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/Picture2.png?width=250&name=Picture2.png", alt: "Cooley" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/orrick.png?width=250&name=orrick.png", alt: "Orrick" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/steptoe.png?width=250&name=steptoe.png", alt: "Steptoe" },
  { src: "https://www.goecfx.com/hs-fs/hubfs/kobre.png?width=250&name=kobre.png", alt: "Kobre & Kim" },
  { src: arentfoxLogo, alt: "ArentFox Schiff" },
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
    <section ref={sectionRef} className="pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-10 text-center">
          Trusted by Leading Law Firms
        </p>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
                transitionProperty: "opacity, transform",
                transitionDuration: "800ms",
                transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                transitionDelay: visible ? `${i * 150}ms` : "0ms",
              }}
            >
              <img src={logo.src} alt={logo.alt} className="w-[180px] h-[64px] object-contain grayscale opacity-55" />
            </div>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div
          className="md:hidden flex gap-8 overflow-x-auto px-6 hide-scrollbar"
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
                transitionProperty: "opacity, transform",
                transitionDuration: "800ms",
                transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                transitionDelay: visible ? `${i * 150}ms` : "0ms",
              }}
            >
              <img src={logo.src} alt={logo.alt} className="w-[140px] h-[56px] object-contain grayscale opacity-55" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
