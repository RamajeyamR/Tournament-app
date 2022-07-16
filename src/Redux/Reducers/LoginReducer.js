import { createSlice } from '@reduxjs/toolkit'

export const LoginReducer = createSlice({
  name: 'Login',
  initialState: {
    username:'',
    password:''
  },
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload
    },
    updatePassword: (state, action) => {
      state.password = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUsername, updatePassword } = LoginReducer.actions

export default LoginReducer.reducer