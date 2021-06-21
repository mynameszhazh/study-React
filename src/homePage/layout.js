import React, { Component } from 'react'
import BottomBar from './bottomBar'
import TopBar from './TopBar'
import store from '../stote/index'
// import { connect } from 'react-redux'
// connect(state => ({num: state})) ()
export default class Layout extends Component {
  componentDidMount() {
    const {title = '商城'} = this.props
    document.title = title
    console.log(store);
    // console.log(this);
    // 这个玩意就是 通知 只要数据发生了改变就会 执行的 就像一个事件监听的感觉
    store.subscribe(() => {
      // console.log('state发生改变了');
      // 这个玩意就是 layout的页面发生刷新
      this.forceUpdate()
    })
  }
  render() {
    // const {children, showBottom, showTop} = this.props
    return (
      <div>
        {this.props.showTop && <TopBar></TopBar>}
        {this.props.children.content}
        {/* {children.txt } */}
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({type: 'ADD'})}>add</button>
        <br/>
        {/* <button onClick={children.btnClick}>button</button> */}
        {this.props.showBottom && <BottomBar></BottomBar>}
      </div>
    )
  }
}
