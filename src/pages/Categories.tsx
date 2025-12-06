import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/products";

const Categories = () => {
  const categoryImages = [
    { name: "Protein", featured: true },
    { name: "Creatine", featured: false },
    { name: "Pre-Workout", featured: false },
    { name: "Amino Acids", featured: true },
    { name: "Gainers", featured: false },
    { name: "Accessories", featured: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-gold font-body text-sm uppercase tracking-widest mb-4 block">
              Browse By Category
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Product Categories
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Explore our curated collection of premium supplements designed for athletes
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
            {categoryImages.map((cat, index) => {
              const categoryData = categories.find((c) => c.name === cat.name);
              return (
                <div
                  key={cat.name}
                  className={`animate-fade-in-up ${cat.featured ? "lg:row-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CategoryCard
                    name={cat.name}
                    image=""
                    productCount={categoryData?.productCount || 0}
                    featured={cat.featured}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
