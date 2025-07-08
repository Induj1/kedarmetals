
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Hammer, Truck, Award, Users, Heart } from "lucide-react";

const usps = [
  {
    icon: Shield,
    iconBg: "bg-copper/20",
    iconColor: "text-copper",
    title: "100% Pure Copper",
    description: "Authentic copper with health certifications and lab testing",
    detail: "Certified by FSSAI"
  },
  {
    icon: Hammer, 
    iconBg: "bg-brass/20",
    iconColor: "text-brass",
    title: "Handcrafted Heritage",
    description: "Traditional craftsmanship passed down through generations",
    detail: "50+ Years Experience"
  },
  {
    icon: Truck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Free Shipping",
    description: "Complimentary delivery to your doorstep nationwide",
    detail: "Across India"
  },
  {
    icon: Award,
    iconBg: "bg-maroon/20",
    iconColor: "text-maroon",
    title: "Trusted Since 1970",
    description: "5 decades of quality commitment and customer satisfaction",
    detail: "50,000+ Happy Customers"
  },
  {
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Family Business",
    description: "Three generations serving authentic Indian kitchenware",
    detail: "Legacy Continues"
  },
  {
    icon: Heart,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    title: "Health Benefits",
    description: "Ayurvedic properties for wellness and better living",
    detail: "Doctor Recommended"
  }
];

const USPSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-heritage-gradient to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 heritage-pattern opacity-20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 brass-gradient rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 copper-gradient rounded-full opacity-5 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-serif">
            Why Kedar Metal Store is
            <span className="block text-brass">India's Trusted Choice</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Experience the perfect blend of traditional craftsmanship, modern quality, 
            and authentic health benefits that have made us a household name.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-2xl transition-all duration-500 group traditional-card hover:-translate-y-2"
            >
              <CardContent className="p-8 space-y-6">
                {/* Icon with animated background */}
                <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                  <div className={`absolute inset-0 ${usp.iconBg} rounded-full group-hover:scale-110 transition-transform duration-300`}></div>
                  <usp.icon className={`w-10 h-10 ${usp.iconColor} relative z-10`} />
                  <div className="absolute inset-0 bg-brass/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-bold text-xl text-primary mb-3 font-serif">{usp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{usp.description}</p>
                  <div className="inline-block bg-brass/20 text-brass px-3 py-1 rounded-full text-xs font-semibold">
                    {usp.detail}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-brass/5 border-2 border-brass/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-xl italic text-primary mb-4 font-serif">
              "Kedar Metal Store has been our family's trusted partner for traditional kitchenware. 
              The quality is unmatched and the health benefits are real!"
            </blockquote>
            <cite className="text-muted-foreground font-semibold">
              - Priya Sharma, Mumbai • Customer since 2015
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
