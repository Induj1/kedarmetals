import React from 'react';
import productsData from '@/assets/productsData';
import { Link } from 'react-router-dom';

const DhanterasProducts = () => {
  // pick top 10 products (or fewer if not available)
  const items = productsData.slice(0, 10);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-maroon">🪔 Dhanteras Picks</h3>
        <Link to="/products" className="text-sm text-brass underline">View All Products</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((p, idx) => (
          <div key={idx} className="bg-ivory/95 p-4 rounded-lg shadow hover:shadow-2xl transition">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-md mb-3" />
            <h4 className="font-semibold text-maroon">{p.name}</h4>
            <p className="text-sm text-muted-foreground mb-2">{p.hindiName}</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-brass">₹{p.price}</div>
                {p.originalPrice && <div className="text-xs line-through text-gray-400">₹{p.originalPrice}</div>}
              </div>
              <div className="flex flex-col items-end">
                <Link to={`/product/${encodeURIComponent(p.name)}`} className="text-sm text-maroon underline">Details</Link>
                <a href={`https://wa.me/919415072987?text=I%20want%20to%20order%20${encodeURIComponent(p.name)}`} className="mt-2 bg-brass text-maroon px-3 py-1 rounded text-xs font-semibold">Order Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DhanterasProducts;
