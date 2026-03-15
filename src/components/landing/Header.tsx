import ecfxLogo from "@/assets/ecfx-logo.webp";

const bgStyle = {
  backgroundColor: "#4A7FC4",
  backgroundImage: "url('https://info.goecfx.com/hubfs/BG-1.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "top center",
};

const Header = () => (
  <header className="w-full" style={bgStyle}>
    <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
      <img src={ecfxLogo} alt="ECFX" className="h-8" />
      <div />
    </div>
  </header>
);

export default Header;
