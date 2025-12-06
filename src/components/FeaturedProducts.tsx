import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Premium Whey Protein Isolate",
      price: 2499,
      originalPrice: 3499,
      rating: 4.8,
      reviews: 1250,
      isNew: true,
    },
    {
      name: "Creatine Monohydrate 300g",
      price: 899,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 890,
      tag: "Bestseller",
    },
    {
      name: "BCAA 2:1:1 Ratio",
      price: 1299,
      originalPrice: 1799,
      rating: 4.7,
      reviews: 650,
    },
    {
      name: "Pre-Workout Extreme",
      price: 1599,
      originalPrice: 2199,
      rating: 4.6,
      reviews: 420,
      isNew: true,
    },
    {
      name: "Mass Gainer 3kg",
      price: 2999,
      originalPrice: 3999,
      rating: 4.5,
      reviews: 380,
    },
    {
      name: "EAA Essential Amino",
      price: 1199,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 290,
      tag: "Limited",
    },
    {
      name: "Whey Protein Blend 2kg",
      price: 3299,
      originalPrice: 4299,
      rating: 4.7,
      reviews: 720,
    },
    {
      name: "Premium Shaker Bottle",
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 1100,
    },
  ];

  return (
    <section className="py-20 bg-charcoal-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-gold font-body text-sm uppercase tracking-widest mb-4 block">
              Featured
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Best Sellers
            </h2>
          </div>
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
