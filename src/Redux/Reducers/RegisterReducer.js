import { createSlice } from '@reduxjs/toolkit'

export const RegisterReducer = createSlice({
  name: 'Register',
  initialState: {
    name : {
      field : 'name',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
        minLength: 3,
        maxLength: 15
      }
    },
    mobile : {
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
    email : {
      field : 'email',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
        isEmail : true
      }
    },
  },
  
  reducers: {

    validations : (state, action) => {
      // console.log('Actions-->',action)
      state[action.payload.name] = {
          ...state[action.payload.name] ,
          [action.payload.field] : action.payload.value
      };
    },
    onChange : (state, action) => {
      // console.log('Actions-->',action)
      state[action.payload.name] = {
          ...state[action.payload.name] ,
          [action.payload.field] : action.payload.value
      };
    }
  },
})

// Action creators are generated for each case reducer function
export const { onChange, validations } = RegisterReducer.actions

export default RegisterReducer.reducer