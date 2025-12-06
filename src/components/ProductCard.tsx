import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id?: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image?: string;
  tag?: string;
  isNew?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  tag,
  isNew,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;
  
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (id) {
      return <Link to={`/product/${id}`} className="block">{children}</Link>;
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 shadow-card hover:shadow-gold">
        {/* Image Area */}
        <div className="relative aspect-square bg-charcoal-light overflow-hidden">
          {/* Tags */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            {isNew && (
              <span className="bg-gold text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                NEW
              </span>
            )}
            {discount > 0 && (
              <span className="bg-destructive text-destructive-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                -{discount}%
              </span>
            )}
            {tag && (
              <span className="bg-secondary text-secondary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gold/20"
          >
            <Heart
              className={`h-5 w-5 transition-colors duration-300 ${
                isWishlisted ? "fill-gold text-gold" : "text-foreground"
              }`}
            />
          </button>

          {/* Product Image */}
          <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 p-6">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-contain" />
            ) : (
              <div className="w-24 h-24 bg-gradient-gold rounded-xl flex items-center justify-center opacity-80">
                <span className="font-display text-3xl font-bold text-primary-foreground">N</span>
              </div>
            )}
          </div>

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
            <Button variant="hero" className="w-full">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "fill-gold text-gold"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-body">
              ({reviews})
            </span>
          </div>

          {/* Name */}
          <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-gold">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-muted-foreground line-through font-body text-sm">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;