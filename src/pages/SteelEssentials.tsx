import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Share2, Star, Award, Shield, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductListing from "@/components/ProductListing";

const SteelEssentials = () => {
  const steelProducts = [
    {
      id: 1,
      name: "Stainless Steel Dinner Set",
      hindiName: "स्टेनलेस स्टील डिनर सेट",
      price: "₹2,499",
      originalPrice: "₹3,199",
      discount: "22% OFF",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 156,
      features: ["Food Grade Steel", "Mirror Finish", "Dishwasher Safe"]
    },
    {
      id: 2,
      name: "Steel Storage Containers",
      hindiName: "स्टील स्टोरेज कंटेनर",
      price: "₹899",
      originalPrice: "₹1,299",
      discount: "31% OFF",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      features: ["Airtight Seal", "Rust Resistant", "Easy Clean"]
    },
    {
      id: 3,
      name: "Premium Steel Kadhai",
      hindiName: "प्रीमियम स्टील कड़ाही",
      price: "₹1,799",
      originalPrice: "₹2,299",
      discount: "22% OFF",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 234,
      features: ["Heavy Bottom", "Heat Distribution", "Long Handle"]
    },
    {
      id: 4,
      name: "Steel Tiffin Box Set",
      hindiName: "स्टील टिफिन बॉक्स सेट",
      price: "₹649",
      originalPrice: "₹899",
      discount: "28% OFF",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 178,
      features: ["Multi Compartment", "Leak Proof", "Easy Carry"]
    },
    {
      id: 5,
      name: "Steel Water Bottles",
      hindiName: "स्टील पानी की बोतलें",
      price: "₹399",
      originalPrice: "₹599",
      discount: "33% OFF",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 267,
      features: ["BPA Free", "Temperature Hold", "Non Slip Base"]
    },
    {
      id: 6,
      name: "Steel Cookware Set",
      hindiName: "स्टील कुकवेयर सेट",
      price: "₹3,999",
      originalPrice: "₹5,499",
      discount: "27% OFF",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 145,
      features: ["Professional Grade", "Even Heating", "Ergonomic Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Steel Background */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop')`,
            filter: 'blur(2px)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-2xl text-white text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
              Steel Essentials
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 mb-6 font-serif">
              स्टील एसेंशियल्स
            </h2>
            <p className="text-xl mb-6 text-gray-200 leading-relaxed">
              Premium stainless steel products for modern kitchens
            </p>
            <p className="text-lg text-blue-200 mb-8">
              आधुनिक रसोई के लिए प्रीमियम स्टेनलेस स्टील उत्पाद
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="heritage-button text-lg px-8 py-3">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop Now • अभी खरीदें
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-maroon hover:bg-white hover:text-maroon">
                View Catalog • कैटलॉग देखें
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-8 bg-blue-50 border-y-4 border-blue-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-800">Food Grade Quality</p>
                <p className="text-sm text-blue-600">खाद्य ग्रेड गुणवत्ता</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-800">Rust Resistant</p>
                <p className="text-sm text-blue-600">जंग प्रतिरोधी</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-800">Mirror Finish</p>
                <p className="text-sm text-blue-600">मिरर फिनिश</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Only show the new ProductListing below */}
      <ProductListing productsToShow="steel" />

      <Footer />
    </div>
  );
};

export default SteelEssentials;
