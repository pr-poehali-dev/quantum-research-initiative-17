import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesSection from "@/components/FeaturesSection";
import ToolsSection from "@/components/ToolsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import RequestModal from "@/components/RequestModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header onOpenModal={() => setModalOpen(true)} />
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <ToolsSection />
      <PricingSection />
      <CTASection onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <RequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Index;
