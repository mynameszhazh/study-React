function render(vnode, container) {
  // console.log(vnode, container, "render");
  // debugger
  // console.log('vnode vnode', vnode)
  const node = createNode(vnode);
  // console.log(container, node, 'contai node')
  container.appendChild(node);
}

// 创建节点
function createNode(vnode) {
  let { type, props } = vnode;
  // console.log(vnode, "createNode vnode");
  let node;
  if (typeof type === "function") {
    // console.log(vnode, type)
    node = type.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode);
  } else if (typeof vnode === "string" || typeof vnode === "number") {
    node = document.createTextNode(vnode);
  } else if (type) {
    node = document.createElement(type);
  } else {
    // 这个 <></> 节点的创建方式,就是这样进行的
    node = document.createDocumentFragment();
  }
  updateNode(node, props);
  // 递归处理我的子节点
  props && props.children && reconcilerChildren(props.children, node);
  return node;
}

// 递归处理节点
function reconcilerChildren(children, node) {
  // console.log(Array.isArray(children));
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      // console.log(children[i], '123')
      // 这里有的时候 处理 jsx语法的时候里面会使用 类似 map 这样的语法进行操作
      if (Array.isArray(children[i])) {
        for (let k = 0; k < children[i].length; k++) {
          // 注意 这里的node 代表的就是在不同地方的层级这样
          render(children[i][k], node);
        }
      } else {
        // 递归逻辑点
        render(children[i], node);
      }
    }
  } else {
    if (Array.isArray(children)) {
      for (let k = 0; k < children.length; k++) {
        // 注意 这里的node 代表的就是在不同地方的层级这样
        render(children[k], node);
      }
    } else {
      // 递归逻辑点
      // console.log(children, node, 'reconcilerchi')
      render(children, node);
    }
  }
}

function updateNode(node, newNode) {
  newNode &&
    Object.keys(newNode)
      .filter((k) => k !== "children")
      .forEach((k) => {
        if (k.slice(0, 2) === "on") {
          // 以on 开头的 这里默认为 这是事件的监听
          let eventName = k.slice(2).toLocaleLowerCase();
          node.addEventListener(eventName, newNode[k]);
        }
        node[k] = newNode[k];
      });
}

function updateFunctionComponent(vnode) {
  const { type, props } = vnode;
  // console.log(type, props, "fucntion componet");
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
