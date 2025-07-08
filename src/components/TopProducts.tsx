
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Zap } from "lucide-react";

const products = [
  {
    name: "Pure Copper Water Pot - 5L",
    price: "₹2,499",
    originalPrice: "₹2,999",
    image: "🏺",
    badge: "Best Seller",
    badgeColor: "bg-green-500",
    badgeIcon: "⭐",
    highlight: "Ayurvedic Health Benefits",
    rating: 4.8,
    reviews: 1247,
    healthBenefit: "Boosts Immunity",
    discount: 17
  },
  {
    name: "Brass Traditional Thali Set",
    price: "₹3,299",
    originalPrice: "₹3,899",
    image: "🍽️", 
    badge: "Festival Pick",
    badgeColor: "bg-orange-500",
    badgeIcon: "🎉",
    highlight: "Complete Family Set",
    rating: 4.9,
    reviews: 892,
    healthBenefit: "Heritage Dining",
    discount: 15
  },
  {
    name: "Copper Water Bottle - 1L",
    price: "₹899",
    originalPrice: "₹1,199",
    image: "🍶",
    badge: "Health Benefits",
    badgeColor: "bg-blue-500",
    badgeIcon: "💧",
    highlight: "Perfect for Daily Use",
    rating: 4.7,
    reviews: 2156,
    healthBenefit: "Detox & Wellness",
    discount: 25
  },
  {
    name: "Wedding Gift Combo",
    price: "₹4,999",
    originalPrice: "₹6,499",
    image: "💍",
    badge: "Premium Gift",
    badgeColor: "bg-purple-500",
    badgeIcon: "🎁",
    highlight: "Elegant Gift Packaging",
    rating: 5.0,
    reviews: 456,
    healthBenefit: "Perfect Gift",
    discount: 23
  }
];

const TopProducts = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-maroon/10 border border-maroon/20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-maroon mr-2 fill-current" />
            <span className="text-maroon font-semibold">Customer Favorites</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-serif">
            Most Loved by
            <span className="block text-brass">Indian Families</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Handpicked products loved by thousands of families across India. 
            Each product comes with authentic quality guarantee and health benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 traditional-card overflow-hidden">
              <CardContent className="p-0">
                {/* Image section with overlay */}
                <div className="relative h-48 bg-gradient-to-br from-brass/10 to-brass/20 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300 float-animation">
                    {product.image}
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${product.badgeColor} text-white font-semibold px-3 py-1 shadow-lg`}>
                      <span className="mr-1">{product.badgeIcon}</span>
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </div>
                  </div>

                  {/* Wishlist button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 shadow-lg">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                  {/* Health benefit tag */}
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    <Zap className="w-3 h-3 inline mr-1" />
                    {product.healthBenefit}
                  </div>
                  
                  <h3 className="font-bold text-xl text-primary font-serif line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{product.highlight}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-primary">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  
                  {/* Price section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <div className="text-green-600 text-sm font-semibold">
                      Save ₹{parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button className="w-full heritage-button font-semibold text-lg py-6 shadow-xl">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Thaali
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Trusted by 50,000+ families across India</p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-maroon text-maroon hover:bg-maroon hover:text-white px-12 py-4 text-lg font-semibold shadow-xl"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
