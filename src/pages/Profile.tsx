import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Heart, MapPin, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    // Simulate signup
    setIsLoggedIn(true);
    toast({
      title: "Account created!",
      description: "Welcome to NutriElite. Enjoy 10% off your first order!",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 max-w-md">
            <div className="glass rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-primary-foreground" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground">Welcome</h1>
                <p className="text-muted-foreground font-body">Sign in or create an account</p>
              </div>

              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your@email.com"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <Button variant="hero" className="w-full" type="submit">
                      Sign In
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      <a href="#" className="text-gold hover:underline">Forgot password?</a>
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        placeholder="John Doe"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-phone">Phone Number</Label>
                      <Input
                        id="signup-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={signupForm.phone}
                        onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm">Confirm Password</Label>
                      <Input
                        id="signup-confirm"
                        type="password"
                        placeholder="••••••••"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <Button variant="hero" className="w-full" type="submit">
                      Create Account
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      By signing up, you agree to our Terms & Privacy Policy
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
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
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">John Doe</h2>
                  <p className="text-muted-foreground font-body text-sm">john@example.com</p>
                </div>

                <nav className="space-y-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gold/10 text-gold font-body font-medium">
                    <User className="h-5 w-5" />
                    My Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary text-muted-foreground font-body transition-colors">
                    <Package className="h-5 w-5" />
                    My Orders
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary text-muted-foreground font-body transition-colors">
                    <Heart className="h-5 w-5" />
                    Wishlist
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary text-muted-foreground font-body transition-colors">
                    <MapPin className="h-5 w-5" />
                    Addresses
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary text-muted-foreground font-body transition-colors">
                    <Settings className="h-5 w-5" />
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-destructive/10 text-destructive font-body transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-6 md:p-8">
                <h1 className="font-display text-2xl font-bold text-foreground mb-6">Profile Details</h1>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="profile-name">Full Name</Label>
                    <Input
                      id="profile-name"
                      defaultValue="John Doe"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-email">Email</Label>
                    <Input
                      id="profile-email"
                      type="email"
                      defaultValue="john@example.com"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-phone">Phone</Label>
                    <Input
                      id="profile-phone"
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-dob">Date of Birth</Label>
                    <Input
                      id="profile-dob"
                      type="date"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">Default Address</h2>
                  <div className="bg-secondary rounded-xl p-4">
                    <p className="font-body text-foreground">123 Fitness Street</p>
                    <p className="text-muted-foreground font-body">Mumbai, Maharashtra - 400001</p>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Button variant="hero">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="glass rounded-2xl p-6 md:p-8 mt-8">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">Recent Orders</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                    <div>
                      <p className="font-body font-medium text-foreground">#ORD-2024-001</p>
                      <p className="text-sm text-muted-foreground">3 items • ₹4,597</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-body">
                        Delivered
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">Dec 5, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                    <div>
                      <p className="font-body font-medium text-foreground">#ORD-2024-002</p>
                      <p className="text-sm text-muted-foreground">2 items • ₹3,298</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-body">
                        In Transit
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">Dec 7, 2024</p>
                    </div>
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

export default Profile;
