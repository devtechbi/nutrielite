import { Users, Package, Clock, Shield } from "lucide-react";

const TrustSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50L+",
      label: "Happy Customers",
    },
    {
      icon: Package,
      value: "50+",
      label: "Premium Products",
    },
    {
      icon: Clock,
      value: "12+",
      label: "Years Experience",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Authentic Products",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            India's Most Trusted
            <br />
            <span className="text-gradient-gold">Sports Nutrition Brand</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Delivering excellence since 2011, with lab-tested, amino-spike-free supplements that fuel champions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-8 text-center group hover:border-gold/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-gold" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
