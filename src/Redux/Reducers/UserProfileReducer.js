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
            defaultgame : '',
            otp: '123456'
        }
    ],
    currentUser : []
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
            defaultgame : '',
            otp :'123456'
        }
     ],
     state.currentUser = [
        {
          username : action.payload.username,
          uid : CommonHelper.uniqueIdGenerator(),
          mobile : action.payload.mobile,
          email : action.payload.email,
          defaultgame : '',
          otp :'123456'
        }
      ]
    },
    setCurrentUser : (state, action) => {
      state.currentUser = [...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { createUser, setCurrentUser } = UserProfileReducer.actions

export default UserProfileReducer.reducer