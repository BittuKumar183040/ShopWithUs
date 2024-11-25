import { createSlice} from '@reduxjs/toolkit'

const loggedUserSlice = createSlice({
  name: 'user',
  initialState: {
    user:{},
    cartScreen:false
  },
  reducers: {
   
    setLoggedUser(state, action) {
      state.user = action.payload
      console.log(action.payload)
    },

  },
})

export const { setLoggedUser } = loggedUserSlice.actions
export const getUserInfo = (state) => state.user.user;

export default loggedUserSlice.reducer