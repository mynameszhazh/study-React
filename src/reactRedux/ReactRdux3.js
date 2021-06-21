import React, { Component } from 'react'
import store from '../stote/index2'

export default class ReactRdux3 extends Component {
  componentDidMount() {
    // 一触发这个subscribe就会执行更新
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  add = () => {
    store.dispatch({type: 'ADD'})
  }
  reduce = () => {
    store.dispatch({type: 'REDUCE'})
  }
  asyAdd = () => {
    store.dispatch((dispatch12, a) => {
      // console.log(13);
      setTimeout(() => {
        // console.log(a);
        dispatch12({type: "ADD"})
      }, 1000)
    })
  }
  render() {
    // props是传递一个值过来之类的 这个地方是自己的 我都不知道你在干什么了
    // const { add, reduce} = this.props
    return (
      <div>
        <h3>ReactRdux3</h3>
        <div>{store.getState()}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.reduce}>reduce</button>
        <button onClick={this.asyAdd}>asyAdd</button>
      </div>
    )
  }
}
