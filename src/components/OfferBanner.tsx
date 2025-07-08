
import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";

const OfferBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-maroon via-primary to-maroon text-ivory py-6 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brass/30 to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-center lg:text-left">
          {/* Left section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-brass/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Gift className="w-6 h-6 text-brass" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-serif">🎉 Festival Special!</h3>
              <p className="text-ivory/80 text-sm">Limited Time Offer</p>
            </div>
          </div>

          {/* Center section */}
          <div className="flex-1 lg:text-center">
            <p className="text-lg md:text-xl font-medium mb-2">
              Get <span className="text-3xl font-bold text-brass">₹100 OFF</span> on your first online order
            </p>
            <p className="text-ivory/90 text-sm">+ Free Gift Wrapping on orders above ₹999</p>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-brass/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-5 h-5 text-brass" />
              <span className="text-sm font-semibold">Ends Soon!</span>
            </div>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-brass text-brass hover:bg-brass hover:text-maroon font-bold px-8 py-3 shadow-xl bg-ivory/90 backdrop-blur-sm"
            >
              🎁 Claim Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 right-20 text-brass/30 text-6xl">✦</div>
        <div className="absolute bottom-2 left-16 text-brass/20 text-4xl">❋</div>
        <div className="absolute top-4 left-1/3 text-brass/25 text-3xl">✧</div>
      </div>
    </div>
  );
};

export default OfferBanner;
