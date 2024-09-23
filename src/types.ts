export interface Product {
    id: number;
    title: string;
    price: number;
}

/*export interface User {
    id: string,
    friends: string[],
    profile: {
      name: string,
      email: string,
      address: {
        street: string,
        city: string,
      }
    },
}*/

export interface User {
    id: string,
    name: string,
    age: number,
    friends: string[],
}

export interface UserState {
    users: User[];
    addUser: (user: User) => void;
}

export interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    addToCartAsync: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

export type AppStore = CartState & User;
