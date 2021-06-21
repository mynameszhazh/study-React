import { createStore } from 'redux'

function toLogin(state = false, action) {
  if(action.type === 'login') {
    state = !state
  }
}

const store = createStore(toLogin)

export default store