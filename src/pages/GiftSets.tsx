
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Gift } from "lucide-react";
import Navigation from "@/components/Navigation";

const GiftSets = () => {
  const giftSets = [
    {
      id: 1,
      name: "Wedding Gift Set",
      hindiName: "शादी का उपहार सेट",
      price: "₹7,999",
      originalPrice: "₹11,999",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      includes: ["Copper Thali", "Brass Kalash", "Silver Plated Items", "Gift Box"],
      occasion: "Wedding"
    },
    {
      id: 2,
      name: "Festival Special Set",
      hindiName: "त्योहार विशेष सेट",
      price: "₹4,999",
      originalPrice: "₹7,499",
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      includes: ["Brass Diya Set", "Pooja Thali", "Incense Holder", "Decorative Box"],
      occasion: "Festival"
    },
    {
      id: 3,
      name: "Housewarming Gift Set",
      hindiName: "गृह प्रवेश उपहार",
      price: "₹5,999",
      originalPrice: "₹8,999",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      includes: ["Copper Water Pot", "Brass Kalash", "Kitchen Set", "Blessing Card"],
      occasion: "Housewarming"
    },
    {
      id: 4,
      name: "Anniversary Gift Set",
      hindiName: "वर्षगांठ उपहार",
      price: "₹6,499",
      originalPrice: "₹9,499",
      rating: 4.9,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
      includes: ["Decorative Items", "Dinner Set", "Brass Artifacts", "Premium Box"],
      occasion: "Anniversary"
    },
    {
      id: 5,
      name: "Corporate Gift Set",
      hindiName: "कॉर्पोरेट उपहार",
      price: "₹3,999",
      originalPrice: "₹5,999",
      rating: 4.6,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
      includes: ["Desk Items", "Water Bottle", "Pen Stand", "Corporate Box"],
      occasion: "Corporate"
    },
    {
      id: 6,
      name: "Premium Heritage Set",
      hindiName: "प्रीमियम विरासत सेट",
      price: "₹12,999",
      originalPrice: "₹18,999",
      rating: 4.9,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      includes: ["Complete Collection", "Copper & Brass", "Decorative Items", "Luxury Box"],
      occasion: "Premium"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Blurred Background */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1200&h=800&fit=crop)`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-maroon/70 via-brass/50 to-copper/60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center bg-ivory/95 border-3 border-brass rounded-full px-8 py-4 mb-8 backdrop-blur-md shadow-2xl">
            <Gift className="w-8 h-8 text-brass mr-3" />
            <span className="text-maroon font-bold text-2xl">उपहार सेट • Gift Sets</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-ivory mb-6 font-serif drop-shadow-2xl">
            विशेष उपहार संग्रह
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-ivory/90 mb-8 font-serif">
            Special Gift Collection
          </h2>
          <p className="text-xl md:text-2xl text-ivory/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            हर अवसर के लिए खास उपहार - प्रेम और सम्मान का प्रतीक
            <br />
            <span className="text-lg">Special gifts for every occasion - Symbol of love and respect</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-brass text-maroon px-6 py-3 text-lg font-semibold">
              शादी • Wedding
            </Badge>
            <Badge className="bg-copper text-ivory px-6 py-3 text-lg font-semibold">
              त्योहार • Festival
            </Badge>
            <Badge className="bg-ivory text-maroon px-6 py-3 text-lg font-semibold">
              गृह प्रवेश • Housewarming
            </Badge>
          </div>
        </div>
      </section>

      {/* Gift Sets Grid */}
      <section className="py-16 bg-heritage-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-maroon mb-4 font-serif">
              हमारे विशेष उपहार सेट
            </h3>
            <p className="text-xl text-muted-foreground">Our Special Gift Sets</p>
            <div className="w-24 h-1 bg-brass mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftSets.map((giftSet) => (
              <Card key={giftSet.id} className="traditional-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={giftSet.image} 
                    alt={giftSet.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="outline" className="bg-ivory/90 border-brass text-brass hover:bg-brass hover:text-ivory">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brass text-maroon font-bold">
                      {giftSet.occasion}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-maroon text-ivory font-bold">
                      {Math.round(((parseInt(giftSet.originalPrice.slice(1)) - parseInt(giftSet.price.slice(1))) / parseInt(giftSet.originalPrice.slice(1))) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-maroon mb-1 font-serif">{giftSet.name}</h4>
                  <p className="text-brass font-semibold mb-3">{giftSet.hindiName}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(giftSet.rating) ? 'text-brass fill-brass' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({giftSet.reviews} reviews)</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-maroon mb-2">Includes:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {giftSet.includes.map((item, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-brass rounded-full mr-2"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-maroon">{giftSet.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{giftSet.originalPrice}</span>
                    </div>
                  </div>

                  <Button className="w-full heritage-button text-lg py-3">
                    <Gift className="w-5 h-5 mr-2" />
                    उपहार दें • Give Gift
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Gift Section */}
      <section className="py-16 bg-gradient-to-r from-maroon to-brass text-ivory">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6 font-serif">
            कस्टम उपहार सेट
          </h3>
          <h4 className="text-2xl mb-8">Custom Gift Sets</h4>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            अपनी पसंद के अनुसार बनवाएं विशेष उपहार सेट
            <br />
            Create personalized gift sets according to your choice
          </p>
          <Button size="lg" variant="outline" className="border-2 border-ivory text-ivory hover:bg-ivory hover:text-maroon px-12 py-4 text-xl font-bold">
            कस्टम ऑर्डर • Custom Order
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GiftSets;
