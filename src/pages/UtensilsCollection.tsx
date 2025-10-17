import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';

const UtensilsCollection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-maroon mb-4">Utensils Collection</h1>
        <p className="text-lg text-muted-foreground mb-6">Explore our wide range of copper, brass and steel utensils for every kitchen and puja need.</p>
      </section>

      <div>
        <h2 className="text-2xl font-semibold text-maroon px-4">Copper</h2>
        <ProductListing productsToShow="copper" />

        <h2 className="text-2xl font-semibold text-maroon px-4 mt-8">Brass</h2>
        <ProductListing productsToShow="brass" />

        <h2 className="text-2xl font-semibold text-maroon px-4 mt-8">Steel</h2>
        <ProductListing productsToShow="steel" />
      </div>

      <Footer />
    </div>
  );
};

export default UtensilsCollection;
