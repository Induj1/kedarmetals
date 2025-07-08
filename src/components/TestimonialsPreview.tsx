
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    text: "The copper water pot has completely transformed our daily routine. My family's health has improved significantly, and the quality is absolutely amazing!",
    rating: 5,
    product: "Copper Water Pot - 5L",
    image: "👩",
    verified: true,
    timeAgo: "2 weeks ago"
  },
  {
    name: "Rajesh Kumar", 
    location: "Delhi, NCR",
    text: "Bought the brass thali set for Diwali celebrations. Everyone in our family and guests loved the traditional craftsmanship and authentic feel.",
    rating: 5,
    product: "Brass Traditional Thali Set",
    image: "👨",
    verified: true,
    timeAgo: "1 month ago"
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad, Gujarat", 
    text: "Perfect wedding gift for my daughter! The packaging was beautiful, quality outstanding, and the recipient was absolutely delighted with it.",
    rating: 5,
    product: "Wedding Gift Combo",
    image: "👵",
    verified: true,
    timeAgo: "3 days ago"
  }
];

const TestimonialsPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 rangoli-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-green-600 mr-2 fill-current" />
            <span className="text-green-700 font-semibold">Customer Love</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-serif">
            What Our Families
            <span className="block text-secondary">Say About Us</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Join thousands of happy families across India who trust our quality and 
            have experienced the authentic benefits of traditional metal utensils.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 group traditional-card hover:-translate-y-2 relative overflow-hidden"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-brass" />
                </div>
                
                {/* Rating stars */}
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-muted-foreground italic text-center leading-relaxed relative z-10">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Customer info */}
                <div className="text-center space-y-3 border-t border-brass/20 pt-6">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div className="text-left">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-primary">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <span className="text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-brass/10 rounded-lg p-3">
                    <p className="text-xs text-brass font-semibold mb-1">Purchased:</p>
                    <p className="text-sm font-medium">{testimonial.product}</p>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">{testimonial.timeAgo}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-brass/5 rounded-xl border border-brass/20">
            <div className="text-3xl font-bold text-brass mb-2">50,000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-maroon/5 rounded-xl border border-maroon/20">
            <div className="text-3xl font-bold text-maroon mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Recommend Us</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Cities Served</div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="text-center bg-gradient-to-r from-brass/10 to-maroon/10 rounded-2xl p-12 border-2 border-brass/20">
          <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
            Join Our Happy Customer Family
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same quality and satisfaction that thousands of families across India trust every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-brass text-brass hover:bg-brass hover:text-white px-8 py-3 text-lg font-semibold shadow-xl"
            >
              View All Reviews
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              className="heritage-button px-8 py-3 text-lg"
            >
              Share Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
