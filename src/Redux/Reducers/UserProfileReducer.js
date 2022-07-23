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
            defaultgame : 'BGMI',
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
    },
    onChangeUserProfile : (state, action) => {
      // console.log('Actions-->',action)
      // console.log('state.user --->', state.currentUser)
      const temp = state.user.map(user => {
        if (user.uid === action.payload.uid){
          user = {
            ...user,
            [action.payload.field] : action.payload.value
          }
          return user
        }
        else return user
      })
      // console.log('temp --->', temp)
      state.user = [...temp]
      // console.log('state.user --->', state.user)
      state.currentUser = [
        {
          ...state.currentUser[0],
          [action.payload.field] : action.payload.value
        }
      ]
      // console.log('state.user --->', state.currentUser)
    }
  },
})

// Action creators are generated for each case reducer function
export const { createUser, setCurrentUser, onChangeUserProfile } = UserProfileReducer.actions

export default UserProfileReducer.reducer