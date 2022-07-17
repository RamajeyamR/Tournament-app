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
    password : {
      field : 'password',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
        minLength: 8,
      }
    },
    confirmPassword : {
      field : 'confirmPassword',
      value: '',
      errorMsg : '',
      valid : false,
      touched : false,
      validationRules : {
        isRequired : true,
        minLength: 8,
      }
    }
  },
  
  reducers: {
    updateName: (state, action) => {
      state.name = {
        ...state.name,
        value : action.payload,
        touched : true,
        errorMsg : '',
      }
    },
    updateMobile: (state, action) => {
      if (isNaN(action.payload) ){
        console.log('NAN')
        state.mobile = {
          ...state.mobile,
          value : state.mobile.value,
          touched : true,
          errorMsg : '',
        }
      }else state.mobile = {
        ...state.mobile,
        value : action.payload,
        touched : true,
        errorMsg : '',
      }
    },
    updateEmail: (state, action) => {
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
    updateconfirmPassword: (state, action) => {
      state.confirmPassword = {
        ...state.confirmPassword,
        value : action.payload,
        touched : true,
        errorMsg : '',
      }
    },
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
export const { onChange, updateName, updateMobile, updateEmail, updatePassword, updateconfirmPassword, resetState, validations } = RegisterReducer.actions

export default RegisterReducer.reducer