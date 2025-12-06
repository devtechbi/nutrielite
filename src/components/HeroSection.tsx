import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm font-body text-gold">Since 2011 • Trusted by 50L+ Athletes</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
              Fuel Your
              <br />
              <span className="text-gradient-gold">Greatness</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
              India's most trusted premium sports nutrition brand. Lab-tested, 100% amino-spike-free supplements for athletes who demand excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up delay-300">
              <Link to="/shop">
                <Button variant="hero" size="xl">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                View Catalog
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-gold" />
                <span className="text-sm font-body">100% Authentic</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-5 w-5 text-gold" />
                <span className="text-sm font-body">Lab Tested</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="h-5 w-5 text-gold" />
                <span className="text-sm font-body">Free Shipping</span>
              </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="relative z-10">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full animate-pulse-gold" />
                
                {/* Product showcase placeholder */}
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <div className="glass rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center shadow-card">
                    <div className="w-32 h-32 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 animate-float">
                      <span className="font-display text-5xl font-bold text-primary-foreground">N</span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2">Premium Whey</h3>
                    <p className="text-muted-foreground font-body mb-4">100% Authentic</p>
                    <div className="text-3xl font-display font-bold text-gold">₹2,499</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
