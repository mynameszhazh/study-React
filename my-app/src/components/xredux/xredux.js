export function createStore(reducer, enhancer) {
  if (enhancer) {
    // 这个就是 applyMiddleware 函数
    return enhancer(createStore)(reducer);
  }
  let currentState = undefined;
  let currentListeners = [];
  function dispatch(action) {
    // console.log("dispatch");
    // console.log(action)
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
  // console.log(middlewares);
  return (createStore) =>
    (...arg) => {
      // 通过这种方式,进行
      const store = createStore(...arg);
      let dispatch = store.dispatch;
      const middleApi = {
        getState: store.getState,
        dispatch,
      };
      // console.log(middleApi, "middleApi");
      // console.log(createStore, "createStore");
      // console.log(arg, "arg");
      // console.log(middlewares, "middwa");
      // 要的是第一层
      const middlewaresChian = middlewares.map((middleware) => {
        // 这是第一层的传值
        return middleware(middleApi);
      });
      console.log(middlewaresChian,'middlewaresChian')
      dispatch = compose(...middlewaresChian)(dispatch);
      return {
        ...store,
        dispatch,
      };
    };
}

function compose(...funs) {
  if (funs.length === 0) {
    return (arg) => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  // 用上一次执行的内容, 进行后续的操作
  return funs.reduce(
    (a, b) =>
      (...args) => {
        console.log(args, '123')
        return a(b(...args))
      }
        
  );
}
