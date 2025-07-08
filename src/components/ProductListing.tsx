import React from "react";
import productsData from "@/assets/productsData";

// Import product images
import copperLota from "@/assets/products/copper lota.jpg";
import copperGlasses from "@/assets/products/copper glasses.jpg";
import copperPanchpatra from "@/assets/products/copper panchpatra.jpg";
import copperJug from "@/assets/products/copper jug.jpg";
import copperGlass from "@/assets/products/copper glass.jpg";
import copperAarti from "@/assets/products/copper aarti.jpg";

import brassSinghasan from "@/assets/products/brass singhasan.jpg";
import brassPoojaPlate from "@/assets/products/brass pooja plate.jpg";
import brassLota2 from "@/assets/products/brass lota 2.jpg";
import brassDiya3 from "@/assets/products/brass diya 3.jpg";
import brassSurahi from "@/assets/products/brass surahi.jpg";
import brassGlass from "@/assets/products/brass glass.jpg";
import brassLota from "@/assets/products/brass lota.jpg";
import brassRansingha from "@/assets/products/brass ransingha.jpg";
import brassDiya2 from "@/assets/products/brass diya 2.jpg";
import brassDiya from "@/assets/products/brass diya.jpg";
import brassBell from "@/assets/products/brass bell.jpg";

import steelTiffin from "@/assets/products/steel tiffin.jpg";

const copperProducts = [
  { name: "Copper Lota", image: copperLota },
  { name: "Copper Glasses", image: copperGlasses },
  { name: "Copper Panchpatra", image: copperPanchpatra },
  { name: "Copper Jug", image: copperJug },
  { name: "Copper Glass", image: copperGlass },
  { name: "Copper Aarti", image: copperAarti },
];

const brassProducts = [
  { name: "Brass Singhasan", image: brassSinghasan },
  { name: "Brass Pooja Plate", image: brassPoojaPlate },
  { name: "Brass Lota 2", image: brassLota2 },
  { name: "Brass Diya 3", image: brassDiya3 },
  { name: "Brass Surahi", image: brassSurahi },
  { name: "Brass Glass", image: brassGlass },
  { name: "Brass Lota", image: brassLota },
  { name: "Brass Ransingha", image: brassRansingha },
  { name: "Brass Diya 2", image: brassDiya2 },
  { name: "Brass Diya", image: brassDiya },
  { name: "Brass Bell", image: brassBell },
];

const steelProducts = [
  { name: "Steel Tiffin", image: steelTiffin },
];

interface ProductListingProps {
  productsToShow: "copper" | "brass" | "steel";
}

const ProductCard = ({ product }: { product: any }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="absolute top-4 left-4">
        <span className="bg-yellow-400 text-maroon font-bold px-3 py-1 rounded-full text-xs shadow">{product.discount}</span>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-lg font-bold text-maroon mb-1 font-serif">{product.name}</h3>
      <p className="text-yellow-700 font-semibold mb-2">{product.hindiName}</p>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={
              i < Math.round(product.rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }>★</span>
          ))}
        </div>
        <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {product.features.map((feature: string, idx: number) => (
          <span key={idx} className="border border-yellow-400 text-yellow-700 bg-yellow-50 rounded-full px-3 py-1 text-xs font-semibold">
            {feature}
          </span>
        ))}
      </div>
      <div className="flex items-end justify-between mt-auto">
        <div>
          <span className="text-2xl font-bold text-maroon mr-2">₹{product.price}</span>
          <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
      </div>
      <a
        href={`https://wa.me/919569406171?text=hi%20i%20want%20to%20buy%20%22${encodeURIComponent(product.name)}%22`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-maroon font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-lg transition-all"
      >
        <span role="img" aria-label="cart">🛒</span> अभी खरीदें • Buy Now
      </a>
    </div>
  </div>
);

const ProductListing: React.FC<ProductListingProps> = ({ productsToShow }) => {
  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().startsWith(productsToShow)
  );
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing; 