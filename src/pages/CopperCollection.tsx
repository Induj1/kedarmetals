import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProductListing from "@/components/ProductListing";

const CopperCollection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Blurred Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop)`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-maroon/60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-ivory mb-6 font-serif drop-shadow-2xl">
            तांबे का संग्रह
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-ivory/90 mb-8 font-serif">
            Copper Collection
          </h2>
          <p className="text-xl md:text-2xl text-ivory/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            शुद्ध तांबे के बर्तन - स्वास्थ्य और परंपरा का मेल
            <br />
            <span className="text-lg">Pure copper utensils - Where health meets tradition</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-brass text-maroon px-6 py-3 text-lg font-semibold">
              आयुर्वेदिक लाभ • Ayurvedic Benefits
            </Badge>
            <Badge className="bg-copper text-ivory px-6 py-3 text-lg font-semibold">
              100% शुद्ध • 100% Pure
            </Badge>
            <Badge className="bg-ivory text-maroon px-6 py-3 text-lg font-semibold">
              हस्तनिर्मित • Handcrafted
            </Badge>
          </div>
        </div>
      </section>
      {/* Only show the new ProductListing below */}
      <ProductListing productsToShow="copper" />
    </div>
  );
};

export default CopperCollection;
