import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-maroon mb-4">All Products</h1>
        <p className="text-lg text-muted-foreground mb-6">Browse our full catalogue.</p>
      </section>

      {/* Show copper as default — add UI later to filter */}
      <ProductListing productsToShow="copper" />

      <Footer />
    </div>
  );
};

export default Products;
