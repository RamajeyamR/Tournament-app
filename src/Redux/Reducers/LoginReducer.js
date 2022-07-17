import { createSlice } from '@reduxjs/toolkit'

export const LoginReducer = createSlice({
  name: 'Login',
  initialState: {
    email:{
      field : 'email',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
      }
    },
    password : {
      field : 'password',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
      }
    },
  },
  reducers: {
    updateemail: (state, action) => {
      state.email = {
        ...state.email,
        value : action.payload,
        touched : true,
        errorMsg : '',
      }
    },
    updatePassword: (state, action) => {
      state.password = {
        ...state.password,
        value : action.payload,
        touched : true,
        errorMsg : '',
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateemail, updatePassword } = LoginReducer.actions

export default LoginReducer.reducer