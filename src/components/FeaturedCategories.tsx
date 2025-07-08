import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import copperImg from "@/assets/copper.jpg";
import brassImg from "@/assets/brass.jpg";
import steelImg from "@/assets/steel.jpg";
import festiveImg from "@/assets/festive.jpg";

const categories = [
  {
    name: "Pure Copperware",
    description: "Ayurvedic health benefits & wellness",
    longDescription: "Boost immunity, improve digestion",
    color: "bg-gradient-to-br from-copper/10 to-copper/20 border-copper/30",
    image: copperImg,
    benefits: "Health Benefits",
    popular: true
  },
  {
    name: "Traditional Brass", 
    description: "Authentic Indian kitchen essentials",
    longDescription: "Thali sets, storage containers",
    color: "bg-gradient-to-br from-secondary/10 to-secondary/20 border-secondary/30",
    image: brassImg,
    benefits: "Heritage Craft",
    popular: false
  },
  {
    name: "Premium Steel",
    description: "Durable everyday cookware solutions",
    longDescription: "Modern design, lasting quality",
    color: "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300",
    image: steelImg,
    benefits: "Daily Use",
    popular: false
  },
  {
    name: "Festive Gift Sets",
    description: "Perfect for weddings & celebrations",
    longDescription: "Elegant packaging, bulk orders",
    color: "bg-gradient-to-br from-primary/10 to-primary/20 border-primary/30",
    image: festiveImg,
    benefits: "Gift Ready",
    popular: true
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 heritage-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brass/10 border border-brass/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-brass mr-2" />
            <span className="text-brass font-semibold">Our Heritage Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-serif">
            Crafted with Love,
            <span className="block text-secondary">Blessed by Tradition</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Discover authentic metal utensils crafted with traditional techniques 
            and modern quality standards. Each piece tells a story of heritage and health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-4 ${category.color} border-2`}
            >
              {/* Popular badge */}
              {category.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-brass text-maroon px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>Popular</span>
                  </div>
                </div>
              )}

              <CardContent className="p-8 text-center relative">
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="mb-4 flex justify-center">
                    <img src={category.image} alt={category.name} className="w-20 h-20 object-contain rounded-lg shadow-lg border-2 border-brass/30 bg-white" />
                  </div>
                  <div className="absolute inset-0 bg-brass/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div className="inline-block bg-brass/20 text-brass px-3 py-1 rounded-full text-sm font-semibold">
                    {category.benefits}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary font-serif">{category.name}</h3>
                  <p className="text-muted-foreground font-medium">{category.description}</p>
                  <p className="text-sm text-muted-foreground/80">{category.longDescription}</p>
                </div>
                
                {/* CTA Button */}
                <Button 
                  className="mt-6 w-full heritage-button group/btn relative overflow-hidden"
                  size="lg"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-brass/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-brass/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-12 py-4 text-lg font-semibold shadow-xl"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
