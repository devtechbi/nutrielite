import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, Gift, ArrowRight } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  const shipping = subtotal > 2000 ? 0 : 99;
  const discount = subtotal * 0.1; // 10% first order discount
  const total = subtotal + shipping - discount;

  const freeGifts = [];
  if (subtotal >= 2000) freeGifts.push("Free 100g Creatine");
  if (subtotal >= 5000) freeGifts.push("Free Premium Leather Belt");

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground font-body mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/shop">
                <Button variant="hero" size="xl">
                  Start Shopping
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground font-body mb-10">
            {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
          </p>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.flavor}`}
                  className="glass rounded-2xl p-4 md:p-6 flex gap-4 md:gap-6"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-charcoal-light rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1 truncate">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground font-body mb-3">
                      <span>Size: {item.size}</span>
                      {item.flavor && <span>• Flavor: {item.flavor}</span>}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.flavor, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-body font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.flavor, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id, item.size, item.flavor)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-display text-xl font-bold text-gold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="block text-sm text-muted-foreground line-through">
                        ₹{(item.originalPrice * item.quantity).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl p-6 md:p-8 sticky top-28">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Order Summary
                </h2>

                {/* Free Gifts */}
                {freeGifts.length > 0 && (
                  <div className="bg-gold/10 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <Gift className="h-5 w-5" />
                      <span className="font-body font-semibold">Free Gifts Unlocked!</span>
                    </div>
                    <ul className="space-y-1">
                      {freeGifts.map((gift, i) => (
                        <li key={i} className="text-sm text-gold/80 font-body">
                          • {gift}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Separator className="bg-border mb-6" />

                {/* Totals */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-body">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-body">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-body text-green-500">
                    <span>First Order Discount (10%)</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                </div>

                <Separator className="bg-border mb-6" />

                <div className="flex justify-between mb-8">
                  <span className="font-display text-xl font-semibold text-foreground">Total</span>
                  <span className="font-display text-2xl font-bold text-gold">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                <Link to="/checkout">
                  <Button variant="hero" size="xl" className="w-full">
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>

                <p className="text-center text-xs text-muted-foreground mt-4 font-body">
                  Free shipping on orders above ₹2000
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
