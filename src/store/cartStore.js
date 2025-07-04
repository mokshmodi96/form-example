import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((item) => item.id === product.id);
      if (exists)
        return {
          cart: [
            ...state.cart.filter((item) => item.id !== product.id),
            { ...product, quantity: exists.quantity + 1 },
          ],
        };
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  incrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  decrementQuantity: (productId) =>
    set((state) => {
      const item = state.cart.find((item) => item.id === productId);
      if (item.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        };
      }
      return { cart: state.cart.filter((item) => item.id !== productId) };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
