export default function thunk() {
  return (dispatch) => (action) => {
    return dispatch[action];
  };
}
