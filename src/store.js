import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reduxSlice/cartSlice'
import { setLoggedUser } from './reduxSlice/loggedUserSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: setLoggedUser,
  },
})