export default function logger({ dispatch }) {
  // console.log(middleApi, 'looger ,middleapi')
  return (dispatch) => {
    // console.log(dispatch, "logger dispatch");
    return (action) => {
      console.log(action.type, "执行了");
      return dispatch(action);
    };
  };
}
