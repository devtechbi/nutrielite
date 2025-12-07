import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
  featured?: boolean;
}

const CategoryCard = ({ name, image, productCount, featured = false }: CategoryCardProps) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(name)}`}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${featured ? "row-span-2" : ""}`}
    >
      <div className="absolute inset-0 bg-gradient-card" />
      
      {image && (
        <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-500" />

      <div className={`relative z-10 p-6 flex flex-col justify-end ${featured ? "min-h-[400px]" : "min-h-[200px]"}`}>
        <div className="flex items-end justify-between">
          <div>
            <h3 className={`font-display font-bold text-foreground mb-1 group-hover:text-gold transition-colors duration-300 ${featured ? "text-3xl" : "text-xl"}`}>
              {name}
            </h3>
            <p className="text-muted-foreground font-body text-sm">{productCount} Products</p>
          </div>
          <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-300">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-all duration-500" />
    </Link>
  );
};

export default CategoryCard;
