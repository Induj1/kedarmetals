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

const productsData = [
  {
    name: "Copper Lota",
    hindiName: "कॉपर लोटा",
    image: copperLota,
    price: 499,
    originalPrice: 699,
    discount: "29% OFF",
    rating: 4.5,
    reviews: 120,
    features: ["Pure Copper", "Handcrafted", "Ayurvedic Benefits"]
  },
  {
    name: "Copper Glasses",
    hindiName: "कॉपर गिलास",
    image: copperGlasses,
    price: 399,
    originalPrice: 599,
    discount: "33% OFF",
    rating: 4.3,
    reviews: 98,
    features: ["Set of 2", "Pure Copper", "Elegant Design"]
  },
  {
    name: "Copper Panchpatra",
    hindiName: "कॉपर पंचपत्रा",
    image: copperPanchpatra,
    price: 299,
    originalPrice: 399,
    discount: "25% OFF",
    rating: 4.2,
    reviews: 45,
    features: ["Traditional", "Pure Copper", "Puja Use"]
  },
  {
    name: "Copper Jug",
    hindiName: "कॉपर जग",
    image: copperJug,
    price: 799,
    originalPrice: 999,
    discount: "20% OFF",
    rating: 4.6,
    reviews: 87,
    features: ["Large Capacity", "Pure Copper", "Leak Proof"]
  },
  {
    name: "Copper Glass",
    hindiName: "कॉपर गिलास",
    image: copperGlass,
    price: 199,
    originalPrice: 299,
    discount: "33% OFF",
    rating: 4.1,
    reviews: 60,
    features: ["Single Piece", "Pure Copper", "Easy Clean"]
  },
  {
    name: "Copper Aarti",
    hindiName: "कॉपर आरती",
    image: copperAarti,
    price: 349,
    originalPrice: 499,
    discount: "30% OFF",
    rating: 4.4,
    reviews: 52,
    features: ["Puja Essential", "Pure Copper", "Handcrafted"]
  },
  {
    name: "Brass Singhasan",
    hindiName: "पीतल सिंहासन",
    image: brassSinghasan,
    price: 899,
    originalPrice: 1199,
    discount: "25% OFF",
    rating: 4.7,
    reviews: 70,
    features: ["Temple Use", "Handcrafted", "Durable"]
  },
  {
    name: "Brass Pooja Plate",
    hindiName: "पीतल पूजा थाली",
    image: brassPoojaPlate,
    price: 599,
    originalPrice: 899,
    discount: "33% OFF",
    rating: 4.5,
    reviews: 110,
    features: ["Traditional", "Hand Engraved", "Premium Quality"]
  },
  {
    name: "Brass Lota 2",
    hindiName: "पीतल लोटा 2",
    image: brassLota2,
    price: 349,
    originalPrice: 499,
    discount: "30% OFF",
    rating: 4.2,
    reviews: 40,
    features: ["Classic Design", "Durable", "Easy Clean"]
  },
  {
    name: "Brass Diya 3",
    hindiName: "पीतल दिया 3",
    image: brassDiya3,
    price: 249,
    originalPrice: 349,
    discount: "29% OFF",
    rating: 4.3,
    reviews: 55,
    features: ["Set of 3", "Handcrafted", "Puja Use"]
  },
  {
    name: "Brass Surahi",
    hindiName: "पीतल सुराही",
    image: brassSurahi,
    price: 799,
    originalPrice: 1099,
    discount: "27% OFF",
    rating: 4.4,
    reviews: 38,
    features: ["Vintage Look", "Handmade", "Premium Brass"]
  },
  {
    name: "Brass Glass",
    hindiName: "पीतल गिलास",
    image: brassGlass,
    price: 199,
    originalPrice: 299,
    discount: "33% OFF",
    rating: 4.1,
    reviews: 60,
    features: ["Single Piece", "Premium Brass", "Easy Clean"]
  },
  {
    name: "Brass Lota",
    hindiName: "पीतल लोटा",
    image: brassLota,
    price: 349,
    originalPrice: 499,
    discount: "30% OFF",
    rating: 4.2,
    reviews: 40,
    features: ["Classic Design", "Durable", "Easy Clean"]
  },
  {
    name: "Brass Ransingha",
    hindiName: "पीतल रणसिंघा",
    image: brassRansingha,
    price: 999,
    originalPrice: 1299,
    discount: "23% OFF",
    rating: 4.6,
    reviews: 25,
    features: ["Traditional", "Handcrafted", "Temple Use"]
  },
  {
    name: "Brass Diya 2",
    hindiName: "पीतल दिया 2",
    image: brassDiya2,
    price: 199,
    originalPrice: 299,
    discount: "33% OFF",
    rating: 4.1,
    reviews: 30,
    features: ["Set of 2", "Handcrafted", "Puja Use"]
  },
  {
    name: "Brass Diya",
    hindiName: "पीतल दिया",
    image: brassDiya,
    price: 99,
    originalPrice: 149,
    discount: "34% OFF",
    rating: 4.0,
    reviews: 20,
    features: ["Single Piece", "Handcrafted", "Puja Use"]
  },
  {
    name: "Brass Bell",
    hindiName: "पीतल घंटी",
    image: brassBell,
    price: 149,
    originalPrice: 199,
    discount: "25% OFF",
    rating: 4.3,
    reviews: 35,
    features: ["Temple Use", "Handcrafted", "Clear Sound"]
  },
  {
    name: "Steel Tiffin",
    hindiName: "स्टील टिफिन",
    image: steelTiffin,
    price: 499,
    originalPrice: 699,
    discount: "29% OFF",
    rating: 4.5,
    reviews: 80,
    features: ["Multi Compartment", "Durable Steel", "Easy Carry"]
  }
];

export default productsData; 