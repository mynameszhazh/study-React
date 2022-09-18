export default function thunk({ getState }) {
  return (dispatch) => {
    // 这里就是做我想要操作的时候了
    return (action) => {
      // 让action 可以传入一个 函数进行操作
      if (typeof action === "function") {
        // console.log(action, dispatch, getState)
        return action(dispatch, getState);
      } else {
        return dispatch(action);
      }
    };
  };
}
