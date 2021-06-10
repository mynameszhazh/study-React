import { createStore } from 'redux';

// 定义state初始化和修改规则
function counterReducer(state2 = 0, action) {
  switch(action.type) {
    case 'ADD': 
      return state2 + 1;
    case 'reduce':
      return state2 - 1;
    default: 
      return state2
  }
}

const store = createStore(counterReducer)

export default store
