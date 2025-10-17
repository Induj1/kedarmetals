import React from 'react';
import { Link } from 'react-router-dom';

const DhanterasBanner = () => {
  return (
    <section className="relative py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="relative bg-ivory/95 rounded-2xl shadow-2xl overflow-hidden border-2 border-brass/10">
          {/* Decorative gradients */}
          <div className="absolute -right-16 -top-10 w-48 h-48 rounded-full brass-gradient opacity-30 blur-3xl pointer-events-none hidden lg:block"></div>
          <div className="absolute -left-10 -bottom-8 w-36 h-36 rounded-full copper-gradient opacity-25 blur-2xl pointer-events-none hidden lg:block"></div>

          <div className="px-6 py-8 md:px-12 md:py-12 flex flex-col lg:flex-row items-start gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="bg-maroon/10 text-maroon px-3 py-1 rounded-full font-semibold">✨ Dhanteras</span>
                <span className="text-sm text-muted-foreground">Limited time festive offers</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon leading-tight mb-3">Dhanteras Special Sale is LIVE!</h2>

              <p className="text-sm md:text-base text-maroon/85 mb-5 max-w-xl">
                🪙 Bring home Gold, Silver, Copper, Brass, Steel & Aluminium this festive season. 🛍️ Shop Online | 📦 All India Delivery | Trusted Since 1970
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link to="/products" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-maroon text-ivory px-6 py-3 rounded-lg font-semibold shadow-md hover:translate-y-0.5 transition">Shop Now</button>
                </Link>
                <Link to="/dhanteras-sale" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-ivory border-2 border-brass text-maroon px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-ivory/90 transition">Explore Products</button>
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <span className="bg-brass/10 text-brass px-3 py-1 rounded-full text-sm font-medium">🟡 Flat 10% OFF on Copper & Brass</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">📦 All India Delivery</span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">🪔 Trusted Since 1970</span>
              </div>
            </div>

            {/* Right ornament (desktop only) */}
            <div className="hidden lg:flex items-center justify-center w-72 h-72 flex-shrink-0" aria-hidden="true">
              {/* Prefer external image in public/, fallback to inline SVG on error */}
              <img
                src="/wp8149661.jpg"
                alt="Dhanteras ornament"
                className="w-56 h-56 object-cover rounded-full shadow-inner"
                onError={(e: any) => {
                  const parent = (e.target as HTMLImageElement).parentElement as HTMLElement;
                  if (!parent) return;
                  parent.innerHTML = `
                    <svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns='http://www.w3.org/2000/svg' class='w-56 h-56'>
                      <defs>
                        <radialGradient id='orbGradFallback' cx='50%' cy='35%' r='60%'>
                          <stop offset='0%' stop-color='#FFD659' />
                          <stop offset='50%' stop-color='#F1A94B' />
                          <stop offset='100%' stop-color='#B66E3A' />
                        </radialGradient>
                      </defs>
                      <circle cx='112' cy='64' r='56' fill='url(#orbGradFallback)' />
                      <path d='M104 120 C96 138, 120 146, 104 192 L64 192 C80 146, 64 138, 104 120 Z' fill='#C68642' opacity='0.98' />
                      <circle cx='84' cy='140' r='6' fill='#FFD659' />
                    </svg>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DhanterasBanner;
