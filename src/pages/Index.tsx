import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import SocialProof from "@/components/landing/SocialProof";
import ProblemSection from "@/components/landing/ProblemSection";
import Testimonial from "@/components/landing/Testimonial";
import WorkflowSection from "@/components/landing/WorkflowSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import Footer from "@/components/landing/Footer";
import WaveDivider from "@/components/landing/WaveDivider";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <WaveDivider type="bottom" />
      <SocialProof />
      <ProblemSection />
      <Testimonial />
      <WorkflowSection />
      <WaveDivider type="top" />
      <BenefitsSection />
      <WaveDivider type="bottom" />
    </main>
    <Footer />
  </div>
);

export default Index;
