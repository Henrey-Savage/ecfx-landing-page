import ecfxLogo from "@/assets/ecfx-logo.webp";

const Header = () => (
  <header
    className="w-full sticky top-0 z-50"
    style={{
      backgroundColor: "rgba(61, 124, 201, 0.95)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    }}
  >
    <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
      <img src={ecfxLogo} alt="ECFX" className="h-8" />
      <div />
    </div>
  </header>
);

export default Header;
