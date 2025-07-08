import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, MessageCircle, Phone, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-heritage-gradient shadow-lg border-b-4 border-brass/30 sticky top-0 z-40">
      {/* Top info bar */}
      <div className="bg-maroon-gradient text-ivory py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Visit Our Heritage Store</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="shimmer-effect px-3 py-1 rounded bg-ivory/90 text-maroon font-semibold shadow">✨ Free Shipping Across India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo section (desktop only) */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Kedar Metals Logo" className="w-20 h-20 object-contain bg-white border border-gray-200 shadow-lg hidden lg:block" />
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/copper-collection" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Copper Collection
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/brass-essentials" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Brass Essentials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/steel-essentials" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Steel Essentials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/gift-sets" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Gift Sets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/our-heritage" className="text-foreground hover:text-primary transition-colors font-medium relative group">
              Our Heritage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brass transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              asChild
              variant="outline"
              size="sm"
              className="border-2 border-green-500 text-green-700 hover:bg-green-50 hover:border-green-600 font-semibold transition-all duration-300 shadow-md"
            >
              <a href="https://wa.me/919569406171" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-2 border-pink-500 text-pink-700 hover:bg-pink-50 hover:border-pink-600 font-semibold transition-all duration-300 shadow-md"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
            <Button className="lg:hidden heritage-button" size="sm" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)}></div>
          {/* Sidebar */}
          <div className="relative bg-white w-64 max-w-full h-full shadow-xl p-6 flex flex-col">
            <button className="absolute top-4 right-4 text-maroon" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setSidebarOpen(false)} className="text-lg font-semibold text-maroon">Home</Link>
              <Link to="/copper-collection" onClick={() => setSidebarOpen(false)} className="text-lg font-semibold text-maroon">Copper Collection</Link>
              <Link to="/brass-essentials" onClick={() => setSidebarOpen(false)} className="text-lg font-semibold text-maroon">Brass Essentials</Link>
              <Link to="/steel-essentials" onClick={() => setSidebarOpen(false)} className="text-lg font-semibold text-maroon">Steel Essentials</Link>
              <Link to="/gift-sets" onClick={() => setSidebarOpen(false)} className="text-lg font-semibold text-maroon">Gift Sets</Link>
              <Link to="/our-heritage" onClick={() => setSidebarOpen(false)} className="text-lg font-semibold text-maroon">Our Heritage</Link>
            </nav>
            <div className="mt-8 flex flex-col space-y-3">
              <a href="https://wa.me/919569406171" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-green-500 text-green-700 hover:bg-green-50 hover:border-green-600 font-semibold rounded-lg py-2 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="#" className="w-full border-2 border-pink-500 text-pink-700 hover:bg-pink-50 hover:border-pink-600 font-semibold rounded-lg py-2 flex items-center justify-center gap-2">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
