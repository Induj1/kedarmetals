import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProductListing from "@/components/ProductListing";

const BrassEssentials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Blurred Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop)`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-brass/60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-ivory mb-6 font-serif drop-shadow-2xl">
            पीतल की आवश्यकताएं
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-ivory/90 mb-8 font-serif">
            Brass Essentials
          </h2>
          <p className="text-xl md:text-2xl text-ivory/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            पारंपरिक पीतल के बर्तन - घर की शान और मान
            <br />
            <span className="text-lg">Traditional brass utensils - Pride of every home</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-ivory text-brass px-6 py-3 text-lg font-semibold">
              पूजा के लिए • For Worship
            </Badge>
            <Badge className="bg-maroon text-ivory px-6 py-3 text-lg font-semibold">
              रसोई के लिए • For Kitchen
            </Badge>
            <Badge className="bg-copper text-ivory px-6 py-3 text-lg font-semibold">
              सजावट के लिए • For Decoration
            </Badge>
          </div>
        </div>
      </section>

      {/* Only show the new ProductListing below */}
      <ProductListing productsToShow="brass" />
    </div>
  );
};

export default BrassEssentials;
