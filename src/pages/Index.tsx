import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { CertificateSection } from "@/components/CertificateSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <CertificateSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
