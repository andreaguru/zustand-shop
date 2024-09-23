import {create} from 'zustand';
import {Product} from "../types.ts";

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    addToCartAsync: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;

}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (product: Product) => set((state) => ({cart: [...state.cart, product]})),
    addToCartAsync: async (product: Product) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        set((state) => ({cart: [...state.cart, product]}));
    },
    removeFromCart: (productId: number) => set((state) => ({cart: state.cart.filter((product: Product) => product.id !== productId)})),
    clearCart: () => set(() => ({cart: []})),
}));
