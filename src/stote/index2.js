// import { createStore, applyMiddleware } from 'redux'
// import { createStore, applyMiddleware } from './kRedux'
import { createStore2, applyMiddleware2 } from './kRedux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'


function changeA (state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1
      case "REDUCE":
      return state - 1
    default:
      return state
  }
}

// const store = createStore(changeA, applyMiddleware(logger, thunk))
const store = createStore2(changeA, applyMiddleware2(logger, thunk))

export default store

function logger({getState, dispatch}) {
  return dispatch => action => {
    console.log(action.type + '执行了');
    return dispatch(action)
  }
}
function thunk({getState, dispatch}) {
  return dispatch => action => {
    // action 可以是对象 还可以是函数， 不同的形式， 操作也不同
    if(typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      return dispatch(action)
    }
  }
}