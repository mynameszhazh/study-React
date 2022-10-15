function createElement(type, props, ...childrens) {
  delete props._self;
  delete props._store;
  console.log(props, "createelement");
  return {
    type,
    props: {
      ...props,
      children: childrens.map((child) => {
        if (typeof child === "object") {
          return child;
        } else {
          return creasteTextNode(child);
        }
      }),
    },
  };
}

function creasteTextNode(text) {
  return {
    type: "TEXT",
    props: {
      children: [],
      nodeValue: text,
    },
  };
}

class Component {
  static isReactComponent = {}
  constructor(props) {
    this.state = props
  }
}

export default {
  createElement,
  Component
};
