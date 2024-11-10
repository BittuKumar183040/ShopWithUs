import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
    cartScreen:false
  },
  reducers: {
    cartAdded(state, action) {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        let item = { ...action.payload, quantity: 1 };
        state.items.push(item);
      }
    },    
    setCartScreenStatus(state, action) {
      state.cartScreen = action.payload
    },
    cartDecreased(state, action) {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity > 1) {
          state.items[existingItemIndex].quantity -= 1;
        } else {
          state.items.splice(existingItemIndex, 1);
        }
      }
    },

  },
})

export const { cartAdded, setCartScreenStatus, cartDecreased } = cartSlice.actions
export const getCartItems = (state) => state.cart.items;
export const getCartScreenStatus = (state) => state.cart.cartScreen;
export const getTotalCartPrice = (state) => {
  return state.cart.items.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
}
export const getTotalCartQuantity = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
}
export default cartSlice.reducer