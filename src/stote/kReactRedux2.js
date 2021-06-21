import React, { Component } from 'react'
import { bindActionCreators, connect } from './kReactRedux'

// 这里直接创建一个上下文
const valueContext = React.createContext()

export const connect = (
  // 全部一起传送过来了数据
  mapStoreToProps = state => state,
  mapDispatchToProps
) => WrapCom => {
  class extends Component {
    static contextType = valueContext
    constructor(props) {
      super(props)
      // 拿出每一个组件都有的state把props 放进去动态处理
      this.state ={
        props: {

        }
      }
    }
    componentDidMount() {
      const {subscripbe} = this.context
      this.update()
      subscripbe(() => {
        this.update()
      })
    }
    update= () => {
      const {dispatch, getState} = this.context
      // 直接把我的数据传输出去
      let StateProps = mapStoreToProps(getState())
      let DispatchProps
      if(typeof mapDispatchToProps === 'object') {
        DispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      } else if(typeof mapDispatchToProps === 'function') {
        DispatchProps = mapDispatchToProps(dispatch)
      } else {
        DispatchProps = {dispatch}
      }
      this.setState({
        props: {
          ...StateProps,
          ...DispatchProps
        }
      })
    }
    render () {
      // console.log(this.context);
      return <WrapCom {...this.state.props}></WrapCom>
    }
  }
}


export class Provider extends Component {
  render () {
    return <valueContext.Provider value={this.props.store}>{this.props.children}</valueContext.Provider>
  }
}

export function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creator, dispatch) {
  let obj = []
  for(let key of creator) {
    obj[key] = bindActionCreator(creator[key], dispatch)
  }
  return obj
}