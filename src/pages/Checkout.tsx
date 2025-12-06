import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Shield, Truck, Gift, CreditCard, Wallet, Building, ChevronRight } from "lucide-react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const cartItems = [
    { name: "Premium Whey Protein Isolate", price: 2499, quantity: 1, size: "2kg" },
    { name: "Creatine Monohydrate", price: 899, quantity: 2, size: "300g" },
    { name: "BCAA 2:1:1", price: 1299, quantity: 1, size: "300g" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2000 ? 0 : 99;
  const discount = subtotal * 0.1; // 10% first order discount
  const total = subtotal + shipping - discount;

  const freeGifts = [];
  if (subtotal >= 2000) freeGifts.push("Free 100g Creatine");
  if (subtotal >= 5000) freeGifts.push("Free Premium Leather Belt");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-body text-muted-foreground mb-8">
            <span>Cart</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gold">Checkout</span>
            <ChevronRight className="h-4 w-4" />
            <span>Confirmation</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Checkout</h1>
          <p className="text-muted-foreground font-body mb-10">Complete your order securely</p>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Customer Details */}
              <div className="glass rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Customer Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-body text-foreground">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" className="bg-secondary border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-body text-foreground">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" className="bg-secondary border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="bg-secondary border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body text-foreground">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-secondary border-border" />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="glass rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Delivery Address</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="font-body text-foreground">Street Address</Label>
                    <Input id="address" placeholder="House no., Building, Street" className="bg-secondary border-border" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="font-body text-foreground">City</Label>
                      <Input id="city" placeholder="Enter city" className="bg-secondary border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="font-body text-foreground">State</Label>
                      <Input id="state" placeholder="Enter state" className="bg-secondary border-border" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pincode" className="font-body text-foreground">PIN Code</Label>
                      <Input id="pincode" placeholder="6-digit PIN" className="bg-secondary border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="landmark" className="font-body text-foreground">Landmark (Optional)</Label>
                      <Input id="landmark" placeholder="Nearby landmark" className="bg-secondary border-border" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Options */}
              <div className="glass rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Shipping Options</h2>
                <RadioGroup defaultValue="standard" className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:border-gold/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="standard" id="standard" />
                      <div>
                        <Label htmlFor="standard" className="font-body font-medium text-foreground cursor-pointer">
                          Standard Delivery
                        </Label>
                        <p className="text-sm text-muted-foreground">5-7 business days</p>
                      </div>
                    </div>
                    <span className="font-body text-gold font-semibold">
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:border-gold/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="express" id="express" />
                      <div>
                        <Label htmlFor="express" className="font-body font-medium text-foreground cursor-pointer">
                          Express Delivery
                        </Label>
                        <p className="text-sm text-muted-foreground">2-3 business days</p>
                      </div>
                    </div>
                    <span className="font-body text-gold font-semibold">₹199</span>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment */}
              <div className="glass rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Payment Method</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className={`flex items-center gap-4 p-4 rounded-xl bg-secondary border transition-colors cursor-pointer ${paymentMethod === 'card' ? 'border-gold' : 'border-border hover:border-gold/30'}`}>
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="h-5 w-5 text-gold" />
                    <Label htmlFor="card" className="font-body font-medium text-foreground cursor-pointer flex-1">
                      Credit / Debit Card
                    </Label>
                  </div>
                  <div className={`flex items-center gap-4 p-4 rounded-xl bg-secondary border transition-colors cursor-pointer ${paymentMethod === 'upi' ? 'border-gold' : 'border-border hover:border-gold/30'}`}>
                    <RadioGroupItem value="upi" id="upi" />
                    <Wallet className="h-5 w-5 text-gold" />
                    <Label htmlFor="upi" className="font-body font-medium text-foreground cursor-pointer flex-1">
                      UPI / Google Pay / PhonePe
                    </Label>
                  </div>
                  <div className={`flex items-center gap-4 p-4 rounded-xl bg-secondary border transition-colors cursor-pointer ${paymentMethod === 'netbanking' ? 'border-gold' : 'border-border hover:border-gold/30'}`}>
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Building className="h-5 w-5 text-gold" />
                    <Label htmlFor="netbanking" className="font-body font-medium text-foreground cursor-pointer flex-1">
                      Net Banking
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="font-body text-foreground">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="bg-secondary border-border" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="font-body text-foreground">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="bg-secondary border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="font-body text-foreground">CVV</Label>
                        <Input id="cvv" type="password" placeholder="•••" className="bg-secondary border-border" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl p-6 md:p-8 sticky top-28">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Order Summary</h2>
                
                {/* Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-charcoal-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="font-display text-lg font-bold text-gold">N</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-body font-medium text-foreground text-sm truncate">{item.name}</h4>
                        <p className="text-muted-foreground text-xs">{item.size} × {item.quantity}</p>
                      </div>
                      <span className="font-body font-semibold text-foreground">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                {/* Free Gifts */}
                {freeGifts.length > 0 && (
                  <div className="bg-gold/10 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <Gift className="h-5 w-5" />
                      <span className="font-body font-semibold">Free Gifts Unlocked!</span>
                    </div>
                    <ul className="space-y-1">
                      {freeGifts.map((gift, i) => (
                        <li key={i} className="text-sm text-gold/80 font-body">• {gift}</li>
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
                    <span className="text-foreground">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between font-body text-green-500">
                    <span>First Order Discount (10%)</span>
                    <span>-₹{discount.toLocaleString()}</span>
                  </div>
                </div>

                <Separator className="bg-border mb-6" />

                <div className="flex justify-between mb-8">
                  <span className="font-display text-xl font-semibold text-foreground">Total</span>
                  <span className="font-display text-2xl font-bold text-gold">₹{total.toLocaleString()}</span>
                </div>

                <Button variant="hero" size="xl" className="w-full mb-6">
                  Place Order
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-gold" />
                    <span className="text-xs font-body">Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="h-4 w-4 text-gold" />
                    <span className="text-xs font-body">Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
