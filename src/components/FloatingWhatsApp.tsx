import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I want to buy from Kedar Metals. Can you help me?");
    window.open(`https://wa.me/919569406171?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919415072987', '_self');
  };

  const handleStoreClick = () => {
    // Open Google Maps or store location
    window.open('https://maps.google.com', '_blank');
  };

  return (
    <>
      <style>
        {`
          .pulse-whatsapp {
            animation: pulseWhatsApp 2s infinite;
          }
          
          @keyframes pulseWhatsApp {
            0% {
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
            }
          }

          .slide-up {
            animation: slideUp 0.3s ease-out;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-gradient-to-r from-maroon to-primary text-white p-4 shadow-2xl">
          <div className="flex items-center justify-around max-w-sm mx-auto">
            <Button
              onClick={handleCallClick}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white border-none mr-2 py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white mr-2 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={handleStoreClick}
              className="flex-1 bg-white/20 hover:bg-white/30 text-white border-none py-3"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="flex flex-col items-end space-y-4">
          {/* Additional action buttons */}
          {isExpanded && (
            <div className="flex flex-col space-y-3 slide-up">
              <Button
                onClick={handleCallClick}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 shadow-xl transition-all duration-300 hover:scale-110"
                title="Call Kedar Metal Store"
              >
                <Phone className="w-6 h-6" />
              </Button>
              
              <Button
                onClick={handleStoreClick}
                className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-14 h-14 shadow-xl transition-all duration-300 hover:scale-110"
                title="Visit Our Store"
              >
                <MapPin className="w-6 h-6" />
              </Button>
            </div>
          )}

          {/* Main WhatsApp button */}
          <div className="relative">
            <Button
              onClick={handleWhatsAppClick}
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 pulse-whatsapp hover:scale-110"
              title="Need help? Chat with Kedar Metal Store instantly"
            >
              <MessageCircle className="w-8 h-8" />
            </Button>

            {/* Notification badge */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
              1
            </div>

            {/* Tooltip */}
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Chat with us for instant help! 💬
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
