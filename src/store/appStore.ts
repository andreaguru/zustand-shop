import { create } from 'zustand'
import { createCartSlice } from './cartSlice'
import { createUserSlice } from './userSlice'
import {CartState, UserState} from "../types.ts";

export const useAppStore = create<UserState & CartState>((...a) => ({
  ...createCartSlice(...a),
  ...createUserSlice(...a),
}))
