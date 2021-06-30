import { createStore, combineReducers } from 'redux';

const loginInfo = {
  islogin: false,
  name: ''
}

function Login(state = loginInfo, action) {
  switch (action.type) {
  case 'Loign':
    state.islogin = true,
    state.name = 'xjh'
    return state;
  case 'Quit':
    state.islogin = false,
    state.name = ''
    return state ;
  default:
    return state;
  }
}

let store = createStore(combineReducers({user: Login}));

export default store