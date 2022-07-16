import { createSlice } from '@reduxjs/toolkit'


export const RegisterReducer = createSlice({
  name: 'Register',
  initialState: {
    name : '',
    mobile : null,
    email : '',
    password : '',
    confirmPassword : ''
  },
  
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
    updateMobile: (state, action) => {
      state.mobile = action.payload
    },
    updateEmail: (state, action) => {
      state.email = action.payload
    },
    updatePassword: (state, action) => {
      state.password = action.payload
    },
    updateconfirmPassword: (state, action) => {
      state.confirmPassword = action.payload
    },
    resetState: (state) => {

      state = {
        name : '',
        mobile : null,
        email : '',
        password : '',
        confirmPassword : ''
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateName, updateMobile, updateEmail, updatePassword, updateconfirmPassword, resetState } = RegisterReducer.actions

export default RegisterReducer.reducer