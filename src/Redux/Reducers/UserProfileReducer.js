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
            otp: '123456',
            walletamount : 50,
            registeredMatch : [
              {
                gameType : 'BGMI',
                matchId : CommonHelper.uniqueIdGenerator(),
                matchtype : 'Solo',
                entryFee : 20,
                map : 'ERANGEL',
                camerModec : 'TTP',
                winPrize : 200,
                prizePerKill : 10,
                maxPlayer : 100,
                joinedPlayer : 40,
                matchDate : '23/07/2022',
                matchTime : '10:00 AM'
              },
              {
                gameType : 'BGMI',
                matchId : CommonHelper.uniqueIdGenerator(),
                matchtype : 'Solo',
                entryFee : 10,
                map : 'ALL WEAPONS',
                camerModec : 'TTP',
                winPrize : 100,
                prizePerKill : 5,
                maxPlayer : 100,
                joinedPlayer : 59,
                matchDate : '23/07/2022',
                matchTime : '12:01 PM'
              },
            ]
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
            otp :'123456',
            walletamount : 0,
            registeredMatch : []
        }
     ],
     state.currentUser = [
        {
          username : action.payload.username,
          uid : CommonHelper.uniqueIdGenerator(),
          mobile : action.payload.mobile,
          email : action.payload.email,
          defaultgame : '',
          otp :'123456',
          walletamount : 0,
          registeredMatch : []
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