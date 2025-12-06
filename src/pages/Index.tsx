import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OffersBar from "@/components/OffersBar";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OffersBar />
        <CategoriesSection />
        <FeaturedProducts />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
