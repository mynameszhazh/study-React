import React, {
  Component,
  useContext,
  useLayoutEffect,
  useMemo,
  useReducer,
} from "react";
import { bindActionCreators } from "redux";

const ValueContext = React.createContext();

// class 版本的实现
// export const connect = (mapStateToProps) => (WrapperComponent) => {
//   return class extends Component {
//     // 这样就可以 在所有的生命周期中国 使用我  provider 的所有数据了
//     static contextType = ValueContext;
//     constructor(props, context) {
//       super(props);
//       this.state = {
//         props: {},
//       };
//     }

//     componentDidMount() {
//       const { subscribe } = this.context;
//       console.log(this.context, "this.content");

//       this.upDate();
//       subscribe(() => {
//         this.upDate();
//       });
//     }

//     upDate() {
//       const { dispatch, getState } = this.context;
//       let dispatchProps = { dispatch };
//       let stateProps = mapStateToProps(getState());

//       this.setState({
//         props: {
//           ...dispatchProps,
//           ...stateProps,
//         },
//       });
//     }

//     render() {
//       return (
//         <WrapperComponent
//           {...this.props}
//           {...this.state.props}
//         ></WrapperComponent>
//       );
//     }
//   };
// };

// 函数式的实现
export const connect =
  (mapStateToProps = (state) => state, mapDispatchToProps) =>
  (WrappedCommponent) =>
  (props) => {
    const store = useContext(ValueContext);
    const { getState, dispatch, subscribe } = store;
    // 这里通过 usememo 进行一个执行缓存
    const stateProps = useMemo(
      () => mapStateToProps(getState()),
      [store.getState()]
    );
    const dispatchProps = useMemo(
      () => bindActionCreators(mapDispatchToProps, dispatch),
      [store]
    );

    const [, forceUpdate] = useReducer(null);
    useLayoutEffect(() => {
      const unsubscribe = subscribe(() => {
        forceUpdate();
      });
      return () => {
        unsubscribe();
      };
    }, [store]);
    return (
      <WrappedCommponent
        {...props}
        {...stateProps}
        {...dispatchProps}
      ></WrappedCommponent>
    );
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
