let nextUnitOfWork = null;
// work in process 工作中的fiber root
let wipRoot = null;

let currentRoot = null;

function render(vnode, container) {
  wipRoot = {
    node: container,
    props: {
      // 不一定是一个数组, 不同的情况需要做出不一样的判断
      children: [vnode],
    },
    base: currentRoot,
  };
}

// 创建节点
function createNode(vnode) {
  let { type, props } = vnode;
  // console.log(vnode, "createNode vnode");
  let node;
  if (typeof vnode === "string" || typeof vnode === "number") {
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
function reconcilerChildren(workInProccessFiber,  children) {
  // 默认 children 是一个 数组
  for(let i=0; i<children.length; i++) {
    let child = children[i]
    let newFiber = null
    newFiber = {
      type: child.type, // 类型
      props: child.props, // 属性参数
      node: null, // 真实dom节点 
      base: null, // 存储
      parent: workInProccessFiber
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

function updateHostComponent(fiber) {}

function performUnitOfWork(fiber) {
  // 执行当前子任务
  updateHostComponent(fiber);
  // 返回下一个任务
  if (fiber.child) {
    return fiber.child;
  }

  // 找兄弟节点
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }

  // 没有节点了
  return null;
}

// 执行子任务
function workLoop(deadline) {
  // console.log(deadline)
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    // 由下一个执行任务, 而且当前帧还没有结束
    performUnitOfWork(nextUnitOfWork);
  }
  // 没有任务了
  if (!nextUnitOfWork && wipRoot) {
    // commit
  }
}

// fiber 执行函数
requestIdleCallback(workLoop);

export default { render };
