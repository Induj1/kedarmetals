import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';

const JewelleryCollection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-maroon mb-4">Jewellery Collection</h1>
        <p className="text-lg text-muted-foreground mb-6">Silver coins, small ornaments and ceremonial items curated for the festival.</p>
      </section>

      {/* For now use brass listing as placeholder */}
      <ProductListing productsToShow="brass" />

      <Footer />
    </div>
  );
};

export default JewelleryCollection;
