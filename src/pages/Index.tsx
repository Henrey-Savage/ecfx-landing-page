import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import SocialProof from "@/components/landing/SocialProof";
import Testimonial from "@/components/landing/Testimonial";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <SocialProof />
      <Testimonial />
    </main>
    <Footer />
  </div>
);

export default Index;
