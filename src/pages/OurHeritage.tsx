
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Star, Heart, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const OurHeritage = () => {
  const milestones = [
    {
      year: "1970",
      title: "शुरुआत",
      subtitle: "The Beginning",
      description: "केदार मेटल्स की स्थापना एक छोटी सी दुकान से हुई",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    },
    {
      year: "1985",
      title: "विस्तार",
      subtitle: "Expansion",
      description: "पहली बार थोक व्यापार की शुरुआत की",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      year: "2000",
      title: "आधुनिकीकरण",
      subtitle: "Modernization",
      description: "नई तकनीक और मशीनों का उपयोग शुरू किया",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop"
    },
    {
      year: "2020",
      title: "डिजिटल युग",
      subtitle: "Digital Era",
      description: "ऑनलाइन सेवाओं की शुरुआत की",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "50,000+",
      title: "खुश ग्राहक",
      subtitle: "Happy Customers"
    },
    {
      icon: Award,
      number: "50+",
      title: "साल का अनुभव",
      subtitle: "Years of Experience"
    },
    {
      icon: Star,
      number: "4.8/5",
      title: "ग्राहक रेटिंग",
      subtitle: "Customer Rating"
    },
    {
      icon: Heart,
      number: "100%",
      title: "शुद्धता की गारंटी",
      subtitle: "Purity Guarantee"
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
            backgroundImage: `url(https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=800&fit=crop)`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-maroon/80 via-brass/40 to-copper/60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center bg-ivory/95 border-3 border-brass rounded-full px-8 py-4 mb-8 backdrop-blur-md shadow-2xl">
            <Award className="w-8 h-8 text-brass mr-3" />
            <span className="text-maroon font-bold text-2xl">विरासत 1970 से • Heritage Since 1970</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-ivory mb-6 font-serif drop-shadow-2xl">
            हमारी विरासत
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-ivory/90 mb-8 font-serif">
            Our Heritage
          </h2>
          <p className="text-xl md:text-2xl text-ivory/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            पारंपरिक कारीगरी से आधुनिक तकनीक तक का सफर
            <br />
            <span className="text-lg">Journey from traditional craftsmanship to modern technology</span>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-heritage-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-bold text-maroon mb-6 font-serif">
              हमारी कहानी
            </h3>
            <h4 className="text-2xl text-brass mb-8">Our Story</h4>
            <div className="bg-ivory/90 rounded-2xl p-8 shadow-2xl border-2 border-brass/30">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              केदार मेटल्स की कहानी 1970 में उत्तर प्रदेश के सीतापुर शहर की एक छोटी सी दुकान से शुरू हुई थी।
आज 50 से भी अधिक वर्षों बाद, यह नाम हजारों घरों में भरोसे और शुद्धता का प्रतीक बन चुका है।

हमारे संस्थापक श्री केदारनाथ गुप्ता जी, जिनकी दृष्टि और मेहनत आज भी हमारे काम का मार्गदर्शन करती है,
हमेशा से यह सपना देखते आए हैं —
हर घर में ऐसे बर्तन हों जो न केवल शुद्ध धातु से बने हों, बल्कि सेहतमंद हों, टिकाऊ हों और हमारी भारतीय परंपरा की गरिमा को बनाए रखें।

आज भी उनके इसी विचार और मूल्य प्रणाली को हम अपने हर उत्पाद में जीवंत रखते हैं।
केदार मेटल्स केवल एक दुकान नहीं, एक विरासत है — जो पीढ़ियों से चली आ रही है।
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              The story of Kedar Metals began in 1970 from a small shop in the town of Sitapur, Uttar Pradesh.
More than 50 years later, it has become a name trusted by thousands of families across India.

Our founder, Shri Kedarnath Gupta, continues to guide our journey with his unwavering vision and values.
He has always believed that every home should have utensils made from pure metal — ones that are healthy, durable, and uphold the pride of Indian tradition.

Even today, we carry forward his dream in every product we offer.
Kedar Metals isn’t just a business — it’s a legacy, passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-br from-brass/10 to-copper/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-maroon mb-4 font-serif">
              हमारी यात्रा के मुख्य पड़ाव
            </h3>
            <p className="text-xl text-muted-foreground">Key Milestones of Our Journey</p>
            <div className="w-24 h-1 bg-brass mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="traditional-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brass text-maroon font-bold text-lg px-4 py-2">
                      {milestone.year}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-maroon mb-2 font-serif">{milestone.title}</h4>
                  <p className="text-brass font-semibold mb-3">{milestone.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-maroon to-brass text-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 font-serif">
              हमारी उपलब्धियां
            </h3>
            <p className="text-xl">Our Achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-ivory/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <achievement.icon className="w-10 h-10 text-ivory" />
                </div>
                <h4 className="text-3xl font-bold mb-2">{achievement.number}</h4>
                <p className="text-lg font-semibold mb-1">{achievement.title}</p>
                <p className="text-ivory/80">{achievement.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-heritage-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-maroon mb-4 font-serif">
                हमारे मूल्य
              </h3>
              <p className="text-xl text-muted-foreground">Our Values</p>
              <div className="w-24 h-1 bg-brass mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brass rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-maroon" />
                </div>
                <h4 className="text-xl font-bold text-maroon mb-3 font-serif">गुणवत्ता • Quality</h4>
                <p className="text-muted-foreground">हम केवल शुद्ध धातुओं का उपयोग करते हैं और हर उत्पाद की गुणवत्ता की जांच करते हैं।</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-copper rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-ivory" />
                </div>
                <h4 className="text-xl font-bold text-maroon mb-3 font-serif">विश्वास • Trust</h4>
                <p className="text-muted-foreground">50 साल से हमारे ग्राहकों का भरोसा हमारी सबसे बड़ी पूंजी है।</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-ivory" />
                </div>
                <h4 className="text-xl font-bold text-maroon mb-3 font-serif">परंपरा • Tradition</h4>
                <p className="text-muted-foreground">हम पारंपरिक कारीगरी को आधुनिक तकनीक के साथ जोड़ते हैं।</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHeritage;
