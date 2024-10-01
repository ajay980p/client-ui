import { CartItem, CartState } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: CartState = {
    items: [],
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload)
        },
    },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer;