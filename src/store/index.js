import { createStore } from 'redux'

function toLogin(state = false, action) {
  if(action.type === 'login') {
    return state = !state
  }
  return state
}

const store = createStore(toLogin)

export default store