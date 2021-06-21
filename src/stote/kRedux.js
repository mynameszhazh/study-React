export function createStore(reducer, enhancer) {
  if(enhancer) {
    // 这个操作真是一个神奇且好用的玩意 这样就可以封装
    return enhancer(createStore)(reducer)
  }
  let currentState = 0
  let currentListeners = []
  function getState(){
    return currentState
  }
  function dispatch(action){
    // 得到的是我处理后的一个数据而已
    currentState = reducer(currentState, action)
    // 遍历执行我的一个玩意
    currentListeners.map(listener => listener())
  }

  // 这个东西不得不说也是有一点高深的 地方之处的
  function subscribe(listener){
    currentListeners.push(listener)
  }
  dispatch({type: '@INIT/REDUX-KKB'})
  return {
    getState,
    dispatch,
    subscribe
  }
}

export function applyMiddleware(...middleware) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch
    const middleAPI = {
      getState: store.getState,
      dispatch
    }
    const middlewaresChain = middleware.map(listener => listener(middleAPI))
    dispatch = componse(...middlewaresChain)(dispatch)
    return{
      ...store,
      dispatch
    }
  }
}

function componse(...funcs) {
  if(funcs.length === 0) {
    return arg => arg
    // return () => {}
  }
  if(funcs.length ===1) {
    return funcs[0]
  }
  return funcs.reduce((a,b) => (...args) => a(b(...args)))
}


// 注意了 这个reducer 就是一个规则 这个样子 没有错了
export function createStore2(reducer, enhancer) {
  if(enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState = 0
  let updataState = []
  function getState(){
    return currentState
  }
  function dispatch(action){
    currentState = reducer(currentState, action)
    updataState.map(listener => listener())
  }
  function subscribe(listener){
    updataState.push(listener)
  }

  dispatch({type: '123'})

  return {
    getState,
    dispatch,
    subscribe
  }
}

export function applyMiddleware2(...middleware) {
  return createStore2 => (...args) => {
    const store = createStore2(...args)
    let dispatch = store.dispatch
    const middleAPI = {
      getState: store.getState,
      dispatch
    }
    const middlechain = middleware.map(middle => middle(middleAPI))
    dispatch = componse2(...middlechain)(dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

function componse2(...funcs) {
  if(funcs.length === 0) {
    return arg => arg
  }
  if(funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a,b) => (...args) => a(b(...args)))
}