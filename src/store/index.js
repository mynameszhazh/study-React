import { createStore, combineReducers } from 'redux';

const loginInfo = {
  islogin: false,
  user: {
    name: null
  }
}

function Login(state = {...loginInfo}, action) {
  switch (action.type) {
  case 'Loign':
    return {
      islogin: true,
      user: {
        name: 'xjh'
      }
    };
  case 'Quit':
    return {
      islogin: false,
      user: {
        name: null
      }
    }
  default:
    return state;
  }
}

let store = createStore(combineReducers({user: Login}));

export default store