import { createSlice } from '@reduxjs/toolkit'

export const LoginReducer = createSlice({
  name: 'Login',
  initialState: {
    mobile:{
      field : 'mobile',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
        isNumber : true,
        minLength: 10,
        maxLength: 10
      }
    },
    otp : {
      field : 'otp',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
        isNumber : true,
        minLength: 6,
        maxLength: 6
      }
    }
  },
  reducers: {
    updateLoginMobile: (state, action) => {
      state.mobile = {
        ...state.mobile,
        [action.payload.field] : action.payload.value
      }
    },
    updateOtp : (state, action) => {
      state.otp = {
        ...state.otp,
        [action.payload.field] : action.payload.value
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateLoginMobile, updateOtp } = LoginReducer.actions

export default LoginReducer.reducer