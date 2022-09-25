import React, { Component } from "react";

const ValueContext = React.createContext();

export const connect = (mapStateToProps) => (WrapperComponent) => {
  return class extends Component {
    // 这样就可以 在所有的生命周期中国 使用我  provider 的所有数据了
    static contextType = ValueContext;
    constructor(props, context) {
      super(props);
      this.state = {
        props: {},
      };
    }

    componentDidMount() {
      const { subscribe } = this.context;
      console.log(this.context, "this.content");

      this.upDate();
      subscribe(() => {
        this.upDate();
      });
    }

    upDate() {
      const { dispatch, getState } = this.context;
      let dispatchProps = { dispatch };
      let stateProps = mapStateToProps(getState());

      this.setState({
        props: {
          ...dispatchProps,
          ...stateProps,
        },
      });
    }

    render() {
      return (
        <WrapperComponent
          {...this.props}
          {...this.state.props}
        ></WrapperComponent>
      );
    }
  };
};

export class Provider extends Component {
  render() {
    return (
      // this.props.store
      <ValueContext.Provider value={this.props.store}>
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}
