import { create } from "zustand";

type Product = {
  id: number;
  Title: string;
  Price: string;
  DiscountedPrice: string;
  Product: string;
  image: string;
  summary: string;
};

type CartItem = {
  product: Product;
  quantity: number;
  size: "S" | "M" | "L" | "XL";
};

type CartStore = {
  cart: CartItem[];
  addToCart: (productWithDetails: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};
const ISSERVER = typeof window === "undefined";

if (!ISSERVER) {
}

export const useCartStore = create<CartStore>((set) => {
  const loadCartFromLocalStorage = () => {
    if (!ISSERVER) {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
  };

  return {
    cart: loadCartFromLocalStorage(),
    addToCart: (productWithDetails) =>
      set((state) => {
        const { product, quantity, size } = productWithDetails;

        const existingItem = state.cart.find(
          (item) => item.product.id === product.id && item.size === size
        );

        const updatedCart = existingItem
          ? state.cart.map((item) =>
              item.product.id === product.id && item.size === size
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          : [...state.cart, { product, quantity, size }];

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { cart: updatedCart };
      }),
    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = state.cart.filter((item) => item.product.id !== id);

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { cart: updatedCart };
      }),
    updateQuantity: (id, quantity) =>
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.product.id === id ? { ...item, quantity } : item
        );

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { cart: updatedCart };
      }),
    clearCart: () => {
      localStorage.removeItem("cart");
      return { cart: [] };
    },
  };
});
