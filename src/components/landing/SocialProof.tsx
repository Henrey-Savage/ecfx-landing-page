import orrick from "@/assets/logos/orrick.webp";
import buchanan from "@/assets/logos/buchanan.webp";
import cohenClair from "@/assets/logos/cohen-clair.webp";
import levyKonigsberg from "@/assets/logos/levy-konigsberg.webp";
import avwhf from "@/assets/logos/avwhf.webp";
import butlersnow from "@/assets/logos/butlersnow.webp";
import kobre from "@/assets/logos/kobre.webp";
import dentons from "@/assets/logos/dentons.webp";
import steptoe from "@/assets/logos/steptoe.webp";

const logos = [
  { src: orrick, alt: "Orrick" },
  { src: buchanan, alt: "Buchanan" },
  { src: cohenClair, alt: "Cohen Clair" },
  { src: levyKonigsberg, alt: "Levy Konigsberg" },
  { src: avwhf, alt: "AVWHF" },
  { src: butlersnow, alt: "Butler Snow" },
  { src: kobre, alt: "Kobre & Kim" },
  { src: dentons, alt: "Dentons" },
  { src: steptoe, alt: "Steptoe" },
];

const SocialProof = () => (
  <section className="bg-surface py-14">
    <div className="container max-w-6xl mx-auto px-6 text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-10">
        Trusted by Leading Law Firms
      </p>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="mx-8 h-12 w-auto grayscale opacity-60 flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
