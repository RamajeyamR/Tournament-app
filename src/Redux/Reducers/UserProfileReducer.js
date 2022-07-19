import { createSlice } from '@reduxjs/toolkit'
import CommonHelper from '../../Constants/CommonHelper'

export const UserProfileReducer = createSlice({
  name: 'UserProfile',
  initialState: {
    user : [
        {
            username : 'Jenni',
            uid : CommonHelper.uniqueIdGenerator(),
            mobile : '1234567890',
            email : 'jeyam@gmail.com',
            defaultgame : ''
        }
    ]
  },
  reducers: {
    createUser: (state, action) => {
      state.user = [
        ...state.user,
        {
            username : action.payload.username,
            uid : CommonHelper.uniqueIdGenerator(),
            mobile : action.payload.mobile,
            email : action.payload.email,
            defaultgame : ''
        }
     ]
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
export const { createUser, updateOtp } = UserProfileReducer.actions

export default UserProfileReducer.reducer