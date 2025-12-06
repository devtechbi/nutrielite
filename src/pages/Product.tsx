import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star, ChevronRight, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Product = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <Link to="/shop">
              <Button variant="premium">Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gold">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="glass rounded-2xl p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>

            {/* Product Details */}
            <div>
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {product.isNew && (
                  <span className="bg-gold text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-destructive text-destructive-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    -{discount}% OFF
                  </span>
                )}
                {product.tag && (
                  <span className="bg-secondary text-secondary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-gold text-gold"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground font-body">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-4xl font-bold text-gold">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through font-body text-xl">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-8">
                  <label className="font-body font-medium text-foreground block mb-3">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                          selectedSize === size
                            ? "bg-gold text-primary-foreground"
                            : "bg-secondary text-foreground hover:border-gold/30 border border-border"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="font-body font-medium text-foreground block mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-secondary rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:text-gold transition-colors"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="px-6 font-body font-semibold text-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:text-gold transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <Button variant="hero" size="xl" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    className={`h-5 w-5 ${isWishlisted ? "fill-gold text-gold" : ""}`}
                  />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="h-5 w-5 text-gold" />
                  <span className="text-sm font-body">100% Authentic</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Truck className="h-5 w-5 text-gold" />
                  <span className="text-sm font-body">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <RotateCcw className="h-5 w-5 text-gold" />
                  <span className="text-sm font-body">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
