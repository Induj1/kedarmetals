import { Button } from "@/components/ui/button";
import { Star, Shield, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced background with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop)`,
          filter: 'blur(6px)',
          transform: 'scale(1.05)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-maroon/60 via-maroon/30 to-brass/40"></div>
      <div className="absolute inset-0 heritage-pattern opacity-15"></div>
      <div className="absolute inset-0 rangoli-pattern opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 brass-gradient rounded-full opacity-20 float-animation shadow-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 copper-gradient rounded-full opacity-15 float-animation shadow-2xl" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 maroon-gradient rounded-full opacity-25 float-animation shadow-xl" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Heritage badge */}
          <div className="inline-flex items-center bg-ivory/95 border-3 border-brass rounded-full px-8 py-4 mb-8 backdrop-blur-md shadow-2xl">
            <Award className="w-6 h-6 text-brass mr-3" />
            <span className="text-maroon font-bold text-xl">विरासत 1970 से • 50,000+ खुश परिवार</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-ivory mb-8 leading-tight font-serif drop-shadow-2xl">
            परंपरा जो चलती है
            <span className="block text-transparent bg-clip-text brass-gradient text-7xl md:text-9xl drop-shadow-lg">
              पीढ़ियों तक
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-ivory/90 mb-6 font-serif drop-shadow-xl">
            Tradition That Lasts Generations
          </h2>
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-ivory font-semibold bg-maroon/70 rounded-xl px-6 py-3 inline-block shadow-lg">
              Pure Copper, Brass & Steel Utensils — Delivered Across Sitapur and Beyond.
            </p>
          </div>
          
          {/* Subtitle with enhanced styling */}
          <div className="bg-ivory/90 rounded-2xl p-8 mb-8 max-w-5xl mx-auto backdrop-blur-md shadow-2xl border-2 border-brass/30">
            <p className="text-xl md:text-2xl text-maroon mb-4 font-medium leading-relaxed">
              शुद्ध <span className="text-copper font-bold text-2xl">तांबा</span>, 
              <span className="text-brass font-bold text-2xl"> पीतल</span>, और 
              <span className="text-maroon font-bold text-2xl"> स्टील के बर्तन</span> - 
              <span className="text-secondary font-bold text-2xl"> 50+ साल के अनुभव</span> से बने। 
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Authentic <span className="text-copper font-semibold">copper</span>, 
              <span className="text-brass font-semibold"> brass</span>, and 
              <span className="text-maroon font-semibold"> steel utensils</span> crafted with 
              <span className="text-secondary font-bold"> 50+ years of expertise</span>. 
              From our family kitchen to yours.
            </p>
          </div>
          
          {/* CTA buttons with enhanced design */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/copper-collection">
              <Button size="lg" className="heritage-button px-8 py-6 text-xl shadow-2xl font-bold bg-copper hover:bg-copper/90">
                🔴 Buy Copper Collection
              </Button>
            </Link>
            <Link to="/brass-essentials">
              <Button size="lg" className="heritage-button px-8 py-6 text-xl shadow-2xl font-bold bg-brass hover:bg-brass/90">
                🟡 Buy Brass Essentials
              </Button>
            </Link>
            <Link to="/steel-essentials">
              <Button size="lg" className="heritage-button px-8 py-6 text-xl shadow-2xl font-bold bg-maroon hover:bg-maroon/90">
                ⚪ Buy Steel Essentials
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators with icons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="traditional-card p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-ivory/95 border-3 border-brass/50">
              <Truck className="w-12 h-12 text-brass mx-auto mb-4" />
              <h3 className="font-bold text-maroon mb-2 text-lg">मुफ्त डिलीवरी</h3>
              <h4 className="font-semibold text-primary mb-1">Free Shipping</h4>
              <p className="text-sm text-muted-foreground">पूरे भारत में</p>
            </div>
            <div className="traditional-card p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-ivory/95 border-3 border-copper/50">
              <Shield className="w-12 h-12 text-copper mx-auto mb-4" />
              <h3 className="font-bold text-maroon mb-2 text-lg">100% शुद्ध</h3>
              <h4 className="font-semibold text-primary mb-1">100% Authentic</h4>
              <p className="text-sm text-muted-foreground">Pure Metals</p>
            </div>
            <div className="traditional-card p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-ivory/95 border-3 border-maroon/50">
              <Award className="w-12 h-12 text-maroon mx-auto mb-4" />
              <h3 className="font-bold text-maroon mb-2 text-lg">1970 से विश्वसनीय</h3>
              <h4 className="font-semibold text-primary mb-1">Trusted Since</h4>
              <p className="text-sm text-muted-foreground">1970</p>
            </div>
            <div className="traditional-card p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-ivory/95 border-3 border-secondary/50">
              <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-maroon mb-2 text-lg">50,000+ खुश ग्राहक</h3>
              <h4 className="font-semibold text-primary mb-1">50,000+</h4>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1200,107,1248,117,1272,122.7L1296,128L1296,320L1272,320C1248,320,1200,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
