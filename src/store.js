import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reduxSlice/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})