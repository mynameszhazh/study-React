// 这里我进行操作的 hook, 是要和执行的fiber 结合起来使用的
function useState(init) {
  const state = init;
  const setState = (action) => {
    // console.log(action);
  };
  return [state, setState];
}

export default {
  useState,
};
