import React, { createContext, useContext, useState, useEffect } from "react";

export const MAX_QUANTITY_PER_ITEM = 50;

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  size: string;
  flavor?: string;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string, flavor?: string) => void;
  updateQuantity: (id: string, size: string, flavor: string | undefined, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size && item.flavor === newItem.flavor
      );
      
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQuantity = updated[existingIndex].quantity + newItem.quantity;
        updated[existingIndex].quantity = Math.min(newQuantity, MAX_QUANTITY_PER_ITEM);
        return updated;
      }
      
      return [...prev, { ...newItem, quantity: Math.min(newItem.quantity, MAX_QUANTITY_PER_ITEM) }];
    });
  };

  const removeItem = (id: string, size: string, flavor?: string) => {
    setItems((prev) => prev.filter(
      (item) => !(item.id === id && item.size === size && item.flavor === flavor)
    ));
  };

  const updateQuantity = (id: string, size: string, flavor: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size, flavor);
      return;
    }
    
    const clampedQuantity = Math.min(quantity, MAX_QUANTITY_PER_ITEM);
    
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.flavor === flavor
          ? { ...item, quantity: clampedQuantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
