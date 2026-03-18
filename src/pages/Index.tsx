import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyConsiderSection from "@/components/WhyConsiderSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <TestimonialsSection />
      <WhyConsiderSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
