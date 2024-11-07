import { createSlice, current} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
    cartScreen:false
  },
  reducers: {
    cartAdded(state, action) {
      let item = {...action.payload, quantity:1}
      state.items.push(item)
    },
    setCartScreenStatus(state, action) {
      state.cartScreen = action.payload
    },
    setQuantity(state, action) {
      if(action.payload.quantity < 1){
        state.items = state.items.filter(item => item.id !== action.payload.id)
      }
      else{
        state.items = state.items.map(item => 
          item.id === action.payload.id
          ? { ...item, quantity:action.payload.quantity}
          : item
        )
      }
    }

  },
})

export const { cartAdded, setCartScreenStatus, setQuantity } = cartSlice.actions
export const getCartItems = (state) => state.cart.items;
export const getCartScreenStatus = (state) => state.cart.cartScreen;
export const getTotalCartPrice = (state) => {
  return state.cart.items.reduce((total, item) => total + (item.discountPrice * item.quantity), 0);
}
export const getTotalCartQuantity = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
}
export default cartSlice.reducer