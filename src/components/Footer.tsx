import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-charcoal-light border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-xl">N</span>
              </div>
              <span className="font-display text-2xl font-semibold text-foreground">
                Nutri<span className="text-gold">Elite</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-body mb-6">
              India's most trusted premium sports nutrition brand since 2011. Lab-tested, 100% authentic supplements.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Shop All", "New Arrivals", "Best Sellers", "Offers", "About Us"].map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="text-muted-foreground hover:text-gold font-body transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Categories</h4>
            <ul className="space-y-3">
              {["Protein Powders", "Creatine", "Gainers", "BCAAs & EAAs", "Pre-Workout", "Accessories"].map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="text-muted-foreground hover:text-gold font-body transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-body">
                  New Delhi, Delhi 110096, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground font-body">+91-9990055405</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-muted-foreground font-body">devtechbi19@gmail.com</span>
              </li>
            </ul>
            <a
              href="https://wa.me/919990055405"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white px-4 py-3 rounded-xl font-body font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Chat
            </a>
            <Button variant="premium" className="mt-3 w-full">
              <MessageCircle className="h-4 w-4" />
              24/7 Chat Support
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground font-body text-sm">
              © 2024 NutriElite. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-gold font-body text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-gold font-body text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-muted-foreground hover:text-gold font-body text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
