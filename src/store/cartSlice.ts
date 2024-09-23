import {StateCreator} from 'zustand';
import {CartState, Product} from "../types.ts";

export const createCartSlice: StateCreator<CartState> = (set) => ({
    cart: [],
    addToCart: (product: Product) => set((state) => ({cart: [...state.cart, product]})),
    addToCartAsync: async (product: Product) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        set((state) => ({cart: [...state.cart, product]}));
    },
    removeFromCart: (productId: number) => set((state) => ({cart: state.cart.filter((product: Product) => product.id !== productId)})),
    clearCart: () => set(() => ({cart: []})),
});
