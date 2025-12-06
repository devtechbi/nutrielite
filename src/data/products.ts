import wheyProtein from "@/assets/products/whey-protein.png";
import creatine from "@/assets/products/creatine.png";
import bcaa from "@/assets/products/bcaa.png";
import preWorkout from "@/assets/products/pre-workout.png";
import massGainer from "@/assets/products/mass-gainer.png";
import eaa from "@/assets/products/eaa.png";
import shaker from "@/assets/products/shaker.png";
import wheyBlend from "@/assets/products/whey-blend.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
  isNew?: boolean;
  category: string;
  description: string;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "whey-protein-isolate",
    name: "Premium Whey Protein Isolate",
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 1250,
    image: wheyProtein,
    isNew: true,
    category: "Protein",
    description: "100% pure whey protein isolate with 27g protein per serving. Lab-tested and amino-spike free.",
    sizes: ["1kg", "2kg", "5kg"],
  },
  {
    id: "creatine-monohydrate",
    name: "Creatine Monohydrate 300g",
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 890,
    image: creatine,
    tag: "Bestseller",
    category: "Creatine",
    description: "Micronized creatine monohydrate for enhanced strength and muscle performance.",
    sizes: ["100g", "300g", "500g"],
  },
  {
    id: "bcaa-211",
    name: "BCAA 2:1:1 Ratio",
    price: 1299,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 650,
    image: bcaa,
    category: "Amino Acids",
    description: "Optimal 2:1:1 ratio of Leucine, Isoleucine, and Valine for muscle recovery.",
    sizes: ["250g", "500g"],
  },
  {
    id: "pre-workout-extreme",
    name: "Pre-Workout Extreme",
    price: 1599,
    originalPrice: 2199,
    rating: 4.6,
    reviews: 420,
    image: preWorkout,
    isNew: true,
    category: "Pre-Workout",
    description: "Explosive energy formula with caffeine, beta-alanine, and citrulline malate.",
    sizes: ["200g", "400g"],
  },
  {
    id: "mass-gainer-3kg",
    name: "Mass Gainer 3kg",
    price: 2999,
    originalPrice: 3999,
    rating: 4.5,
    reviews: 380,
    image: massGainer,
    category: "Gainers",
    description: "High-calorie mass gainer with 50g protein and 750 calories per serving.",
    sizes: ["1kg", "3kg", "5kg"],
  },
  {
    id: "eaa-essential-amino",
    name: "EAA Essential Amino",
    price: 1199,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 290,
    image: eaa,
    tag: "Limited",
    category: "Amino Acids",
    description: "Complete essential amino acids formula for optimal muscle protein synthesis.",
    sizes: ["300g", "500g"],
  },
  {
    id: "whey-protein-blend",
    name: "Whey Protein Blend 2kg",
    price: 3299,
    originalPrice: 4299,
    rating: 4.7,
    reviews: 720,
    image: wheyBlend,
    category: "Protein",
    description: "Premium blend of whey concentrate and isolate with 24g protein per serving.",
    sizes: ["1kg", "2kg", "5kg"],
  },
  {
    id: "premium-shaker",
    name: "Premium Shaker Bottle",
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviews: 1100,
    image: shaker,
    category: "Accessories",
    description: "Leak-proof premium shaker with mixing ball and measurement markings.",
    sizes: ["500ml", "700ml"],
  },
];

export const categories = [
  { name: "Protein", productCount: 24 },
  { name: "Creatine", productCount: 12 },
  { name: "Pre-Workout", productCount: 18 },
  { name: "Amino Acids", productCount: 15 },
  { name: "Gainers", productCount: 10 },
  { name: "Accessories", productCount: 32 },
];
