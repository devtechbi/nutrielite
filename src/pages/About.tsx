import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { number: "13+", label: "Years of Excellence" },
    { number: "50L+", label: "Happy Customers" },
    { number: "50+", label: "Premium Products" },
    { number: "100%", label: "Authentic Guarantee" },
  ];

  const values = [
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Every product is lab-tested and verified for purity. Zero amino-spiking, zero compromises.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Sourced from world-class manufacturers with strict quality control standards.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our team of certified nutritionists and fitness experts are here 24/7 to guide you.",
    },
  ];

  const milestones = [
    { year: "2011", event: "Founded with a vision to provide authentic supplements" },
    { year: "2014", event: "Reached 1 Lakh satisfied customers" },
    { year: "2017", event: "Launched our own premium product line" },
    { year: "2020", event: "Expanded to 50+ products across categories" },
    { year: "2024", event: "Serving 50 Lakh+ fitness enthusiasts nationwide" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-gold font-body text-sm uppercase tracking-widest mb-4 block">
              Our Story
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              India's Most Trusted Premium Sports Nutrition Brand
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Since 2011, NutriElite has been at the forefront of delivering scientifically formulated, 
              lab-tested, and 100% authentic supplements to fitness enthusiasts across India. 
              Our commitment to purity and performance has made us the choice of over 50 lakh athletes.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-4xl md:text-5xl font-bold text-gold block mb-2">
                  {stat.number}
                </span>
                <span className="text-muted-foreground font-body text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-charcoal-light py-20 mb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="glass rounded-2xl p-8 text-center group hover:border-gold/30 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                    <value.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 mb-8 last:mb-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gold/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-gold font-display text-xl font-bold block mb-1">
                    {milestone.year}
                  </span>
                  <p className="text-foreground font-body">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-gold rounded-2xl p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join 50 Lakh+ Athletes
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference of premium, authentic supplements. 
              Start your fitness journey with NutriElite today.
            </p>
            <a
              href="/shop"
              className="inline-block bg-background text-foreground px-8 py-4 rounded-xl font-body font-semibold hover:bg-background/90 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
