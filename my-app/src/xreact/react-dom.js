function render(vnode, container) {
  // console.log(vnode, container, "render");
  const node = createNode(vnode);
  container.appendChild(node);
}

// 创建节点
function createNode(vnode) {
  let { type, props } = vnode;
  let node;
  if (typeof type === "function") {
    node = type.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode);
  } else if (type === "TEXT") {
    node = document.createTextNode(type);
  } else {
    node = document.createElement(type);
  }
  updateNode(node, props);
  console.log(props);
  // 递归处理我的子节点
  reconcilerChildren(props.children, node);
  return node;
}

// 递归处理节点
function reconcilerChildren(children, node) {
  // console.log(children, children.length)
  for (let i = 0; i < children.length; i++) {
    // console.log(children[i], '123')
    // 递归逻辑点
    render(children[i], node);
  }
}

function updateNode(node, newNode) {
  Object.keys(newNode)
    .filter((k) => k !== "children")
    .forEach((k) => {
      node[k] = newNode[k];
    });
}

function updateFunctionComponent(vnode) {
  const { type, props } = vnode;
  // 这里执行的就是 函数内部的组件, 这里的参数, 就会在之后的执行中, 获取到数据
  const vvnode = type(props);
  return createNode(vvnode);
}

function updateClassComponent(vnode) {
  const { type, props } = vnode;
  //  这里进行的 数据挂载 还是很不错的选择
  const comp = new type(props);
  const vvnode = comp.render();
  return createNode(vvnode);
}

export default { render };
