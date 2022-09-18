export default function thunk() {
  return (dispatch) => {
    // 这里就是做我想要操作的时候了

    return (action) => {
      // console.log(action, 'action')
      return dispatch(action);
    };
  };
}
