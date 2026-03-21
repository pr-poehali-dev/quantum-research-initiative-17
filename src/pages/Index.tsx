import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesSection from "@/components/FeaturesSection";
import ToolsSection from "@/components/ToolsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <ToolsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
