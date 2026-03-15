import ecfxLogo from "@/assets/ecfx-logo.webp";

const Header = () => (
  <header className="w-full bg-navy">
    <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
      <img src={ecfxLogo} alt="ECFX" className="h-8" />
      <div />
    </div>
  </header>
);

export default Header;
