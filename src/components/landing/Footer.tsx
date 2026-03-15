import ecfxLogo from "@/assets/ecfx-logo.webp";

const Footer = () => (
  <footer className="py-8" style={{ background: "#081526" }}>
    <div className="container max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
      <img src={ecfxLogo} alt="ECFX" className="h-6" />
      <p className="text-[13px] text-footer-foreground">
        © 2026 ECFX. All rights reserved.
      </p>
      <p className="text-[13px] text-footer-foreground">
        <a href="#" className="hover:text-navy-foreground transition-colors">Privacy Policy</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-navy-foreground transition-colors">Terms &amp; Conditions</a>
      </p>
    </div>
  </footer>
);

export default Footer;
