import { useState, useEffect } from "react";
import ecfxLogo from "@/assets/ecfx-logo.webp";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDemoClick = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="w-full fixed top-0 left-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(45, 138, 229, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.15)" : "none",
        transition: "background-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease",
      }}
    >
      <div className="container max-w-6xl mx-auto px-6 py-4 grid md:grid-cols-5 gap-14 items-center">
        <div className="md:col-span-3 flex items-center">
          <img src={ecfxLogo} alt="ECFX" className="h-[50px]" />
        </div>
        <div className="md:col-span-2 flex justify-center px-8">
          <button
            onClick={handleDemoClick}
            className="w-full inline-flex items-center justify-center px-8 py-2.5 text-base font-semibold rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Schedule My Custom Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
