import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Gift, Percent, Truck, Clock } from "lucide-react";

const Offers = () => {
  // Get products with discounts
  const discountedProducts = products.filter((p) => p.originalPrice);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-body text-sm uppercase tracking-widest mb-4 block">
              Limited Time
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Special Offers
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Exclusive deals and discounts on premium supplements
            </p>
          </div>

          {/* Offer Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass rounded-2xl p-8 text-center group hover:border-gold/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Percent className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                First Order 10% OFF
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                New customers get flat 10% discount on all products
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center group hover:border-gold/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Gift className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Free Creatine 100g
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                On orders above ₹2,000
              </p>
            </div>

            <div className="glass rounded-2xl p-8 text-center group hover:border-gold/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Gift className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Free Leather Belt
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Premium lifting belt on orders above ₹5,000
              </p>
            </div>
          </div>

          {/* Free Shipping Banner */}
          <div className="bg-gradient-gold rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Truck className="h-12 w-12 text-primary-foreground" />
              <div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  Free Shipping
                </h3>
                <p className="text-primary-foreground/80 font-body">
                  On all orders above ₹2,000
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <Clock className="h-5 w-5" />
              <span className="font-body font-semibold">Limited Time Offer</span>
            </div>
          </div>

          {/* Discounted Products */}
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Products on Sale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                  image={product.image}
                  tag={product.tag}
                  isNew={product.isNew}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
