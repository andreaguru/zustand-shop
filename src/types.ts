export interface Product {
    id: number;
    title: string;
    price: number;
}

export interface User {
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
}
