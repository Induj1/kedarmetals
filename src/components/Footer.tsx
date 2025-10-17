import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Instagram, MessageCircle, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-maroon-gradient text-ivory relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 heritage-pattern opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 brass-gradient rounded-full flex items-center justify-center">
                <span className="text-maroon font-bold text-xl font-serif">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Kedar Metals</h3>
                <p className="text-sm text-yellow-800">केदार मेटल्स</p>
              </div>
            </div>
            <p className="text-yellow-800 text-sm leading-relaxed">
              Since 1970 • 1970 से<br />
              Traditional craftsmanship meets modern quality.<br />
              <span className="text-brass font-medium">पारंपरिक शिल्पकारी और आधुनिक गुणवत्ता</span>
            </p>
            <div className="flex items-center space-x-2 text-brass">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">50+ Years of Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif text-brass">Quick Links • त्वरित लिंक</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-yellow-800 hover:text-brass transition-colors">
                Home • होम
              </Link>
              <Link to="/copper-collection" className="block text-sm text-yellow-800 hover:text-brass transition-colors">
                Copper Collection • कॉपर कलेक्शन
              </Link>
              <Link to="/brass-essentials" className="block text-sm text-yellow-800 hover:text-brass transition-colors">
                Brass Essentials • ब्रास एसेंशियल्स
              </Link>
              <Link to="/steel-essentials" className="block text-sm text-yellow-800 hover:text-brass transition-colors">
                Steel Essentials • स्टील एसेंशियल्स
              </Link>
              <Link to="/gift-sets" className="block text-sm text-yellow-800 hover:text-brass transition-colors">
                Gift Sets • गिफ्ट सेट्स
              </Link>
              <Link to="/our-heritage" className="block text-sm text-yellow-800 hover:text-brass transition-colors">
                Our Heritage • हमारी विरासत
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif text-brass">Contact Us • संपर्क करें</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brass" />
                <span className="text-sm text-yellow-800">+91 94150 72987</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brass" />
                <span className="text-sm text-yellow-800">indujgupta@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brass mt-1" />
                <div className="text-sm text-yellow-800">
                  <p>515 Lalbagh Sabji Mandi Sitapur-261001</p>
                  <p className="text-brass">515 लालबाग सब्जी मंडी सीतापुर-261001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brass" />
                <span className="text-sm text-yellow-800">Mon-Sat: 9AM-8PM</span>
              </div>
            </div>
          </div>

          {/* Social & Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-serif text-brass">Connect • जुड़ें</h4>
            <div className="space-y-3">
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all"
              >
                <a href="https://wa.me/919569406171" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Order
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow Us
              </Button>
            </div>
            <div className="bg-brass/10 rounded-lg p-3 text-center">
              <p className="text-maroon font-semibold text-sm">✨ Free Shipping</p>
              <p className="text-maroon text-xs">Across India • पूरे भारत में</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-yellow-800">
              © 2024 Kedar Metals. All rights reserved. • सभी अधिकार सुरक्षित।
            </p>
            <div className="flex items-center space-x-4 text-sm text-yellow-800">
              <span>Made with ❤️ in India</span>
              <span>•</span>
              <span className="text-brass">भारत में बना</span>
            </div>
          </div>
        </div>
        
        {/* Festive contact & trust strip */}
        <div className="mt-6 bg-ivory/95 rounded-lg p-4 text-maroon flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="font-semibold">📞 Mr. Kedar Gupta – 94150 72987</div>
            <div className="font-medium">📍 515 Lalbagh Sabzi Mandi, Sitapur</div>
            <div className="font-medium">🌐 www.kedarmetal.store</div>
          </div>
          <div className="mt-3 md:mt-0 flex items-center space-x-4 text-sm">
            <span className="bg-brass text-maroon px-3 py-1 rounded">🪔 Since 1970</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded">✅ Genuine Quality</span>
            <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded">📦 All India Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
