import { createStore, combineReducers } from 'redux'

const initUserInfo = {
  isLogin: false,
  user: {
    name: null
  }
}

function toLogin(state = {...initUserInfo}, action) {
  switch(action.type) {
    case "LOGIN_SUC":
      return {
        isLogin: true,
        user: {
          name: 'xiaoming'
        }
      }
    case "LOGIN_FAIL":
      return {
        isLogin: false,
        user: {
          name: null
        }
      }
    default:
      return state
  }
}

const store = createStore(combineReducers({user: toLogin}))

export default store