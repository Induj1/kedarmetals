import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import TopProducts from "@/components/TopProducts";
import USPSection from "@/components/USPSection";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import OfferBanner from "@/components/OfferBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OfferBanner />
      <FeaturedCategories />
      <TopProducts />
      <USPSection />
      <TestimonialsPreview />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
