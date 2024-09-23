import { StateCreator } from 'zustand'
import {User, UserState} from "../types.ts";

export const createUserSlice: StateCreator<UserState> = (set) => ({
    users: [],
    addUser: (user: User) => set((state) => ({
        users: [...state.users, user]
    })),
});
