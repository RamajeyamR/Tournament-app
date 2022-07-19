import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from '../Reducers/LoginReducer';
import RegisterReducer from '../Reducers/RegisterReducer';
import UserProfileReducer  from '../Reducers/UserProfileReducer';
import { configureStore } from '@reduxjs/toolkit'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Development purpose and need to comment this line during bank release
//const composeEnhancers = compose;

// const rootReducer = combineReducers({
//   commonReducer,
// });
export default configureStore({
    reducer: {
      login : LoginReducer,
      register : RegisterReducer,
      users : UserProfileReducer,
    },
  },composeEnhancers(applyMiddleware(thunk)))

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk)),
// );