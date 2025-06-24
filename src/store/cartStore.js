import { create } from 'zustand';

const useCartStore = create(set => ({
    cart: [],
    addToCart: (product) =>
        set(state => {
            const exists = state.cart.find(item => item.id === product.id);
            if (exists) return state; // don't duplicate
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
    removeFromCart: (productId) =>
        set(state => ({
            cart: state.cart.filter(item => item.id !== productId)
        })),
    clearCart: () => set({ cart: [] })
}));

export default useCartStore;
