import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DhanterasBanner from '@/components/DhanterasBanner';
import DhanterasProducts from '@/components/DhanterasProducts';
import OfferBanner from '@/components/OfferBanner';

const DhanterasSale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DhanterasBanner />
      <OfferBanner />

      <section className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-maroon mb-4">Dhanteras Special Collection</h1>
        <p className="text-lg text-muted-foreground mb-6">Curated festive picks — Copper, Brass, Silver & Steel essentials for your home and puja.</p>
      </section>

      <DhanterasProducts />

      <Footer />
    </div>
  );
};

export default DhanterasSale;
