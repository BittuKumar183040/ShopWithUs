import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
    cartScreen:false
  },
  reducers: {
    cartAdded(state, action) {
      state.items.push(action.payload)
    },
    setCartScreenStatus(state, action) {
      state.cartScreen = action.payload
    }
  },
})

export const { cartAdded, setCartScreenStatus } = cartSlice.actions
export const getCartItems = (state) => state.cart.items;
export const getCartScreenStatus = (state) => state.cart.cartScreen;
export default cartSlice.reducer