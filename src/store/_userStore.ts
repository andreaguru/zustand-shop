/*
import {create} from 'zustand';
import {User} from "../types.ts";
import {produce} from "immer";

interface UserState {
    user: User;
    updateAddressStreet: (street: string) => void;

}

const initialState = {
    user: {
        id: "user123",
        friends: ["friend1", "friend2", "friend3"],
        profile: {
            name: "John Doe",
            age: 25,
            email: "whatever",
            address: {
                street: "strada 1",
                city: "Napoli",
            }
        }
    }
};

export const useUserStore = create<UserState>((set) => ({
    ...initialState,
    updateAddressStreet: (street) => set(produce((state) => {
        state.user.profile.address.street = street;
    })),
}));
*/
