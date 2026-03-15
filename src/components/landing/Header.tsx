import { useState, useEffect } from "react";
import ecfxLogo from "@/assets/ecfx-logo.webp";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setScrolled(heroBottom <= 80);
      } else {
        setScrolled(window.scrollY > 400);
      }
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
      className="w-full sticky top-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(55, 104, 168, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.15)" : "none",
        transition: "background-color 300ms ease, backdrop-filter 300ms ease, box-shadow 300ms ease",
      }}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <img src={ecfxLogo} alt="ECFX" className="h-[50px]" />
        <button
          onClick={handleDemoClick}
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-md border border-white text-white bg-transparent hover:bg-white hover:text-[#3768A8] transition-colors duration-200"
          style={{ fontSize: "14px" }}
        >
          Schedule a Demo
        </button>
      </div>
    </header>
  );
};

export default Header;
