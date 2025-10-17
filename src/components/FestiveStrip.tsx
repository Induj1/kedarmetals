import React from 'react';
import { Link } from 'react-router-dom';

const FestiveStrip = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 via-maroon to-copper text-maroon py-2 sticky top-12 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        <div className="font-semibold">🎉 DHANTERAS OFFER: Flat 10% OFF on Copper & Brass Items — Limited Time!</div>
        <div className="space-x-3">
          <Link to="/dhanteras-sale" className="underline font-bold">Shop Dhanteras</Link>
          <a href="https://wa.me/919415072987" className="bg-maroon text-ivory px-3 py-1 rounded shadow">Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default FestiveStrip;
