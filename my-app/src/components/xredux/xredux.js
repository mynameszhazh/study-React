export function createStore(reducer, enhancer) {
  if (enhancer) {
    // 这个就是 applyMiddleware 函数
    enhancer(createStore)(reducer);
  }
  let currentState = undefined;
  let currentListeners = [];
  function dispatch(action) {
    // console.log("dispatch");
    currentState = reducer(currentState, action);
    // 重新 执行所有订阅的 监听
    currentListeners.map((listener) => listener());
  }
  function subscribe(listener) {
    // console.log("subscribe");
    currentListeners.push(listener);
  }
  function getState() {
    // console.log("getState");
    return currentState;
  }

  dispatch({ type: "@INIT/REDUX" });
  return {
    dispatch,
    subscribe,
    getState,
  };
}

// 这样的写法, 就可以做一个中介的操作了, 进行一个加强操作
export function applyMiddleware(...middlewares) {
  return (createStore) =>
    (...arg) => {
      const store = createStore(...arg);
      return {
        ...store,
      };
    };
}
