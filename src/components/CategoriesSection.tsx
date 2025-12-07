import CategoryCard from "./CategoryCard";
import { categories } from "@/data/products";

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm uppercase tracking-widest mb-4 block">Categories</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Explore our curated collection of premium supplements and accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CategoryCard
                name={category.name}
                image={category.image}
                productCount={category.productCount}
                featured={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
