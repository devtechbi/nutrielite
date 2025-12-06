import { Gift, Percent, Package } from "lucide-react";

const OffersBar = () => {
  const offers = [
    {
      icon: Percent,
      title: "First Order",
      description: "Flat 10% OFF for new customers",
    },
    {
      icon: Gift,
      title: "Free Creatine",
      description: "100g Creatine on orders ₹2000+",
    },
    {
      icon: Package,
      title: "Premium Belt",
      description: "Free Leather Belt on orders ₹5000+",
    },
  ];

  return (
    <section className="bg-charcoal-light border-y border-border py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-4 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <offer.icon className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-foreground font-semibold">{offer.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersBar;
