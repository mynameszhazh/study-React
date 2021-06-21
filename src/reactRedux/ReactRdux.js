import React, { Component } from 'react'

// import { connect } from 'react-redux'
import { connect } from '../stote/kReactRedux'
// import { bindActionCreators } from 'redux'

export default connect(
  // 这个地方发现一个处理的方式，就是一个（） 应该表达的意思就是说是一起的
  (state) => ({count: state}),
  // (state, ownProps) => {
  //   // console.log('ownProps', ownProps)
  //   return {
  //     count: state
  //   }
  // },
  {
    // 这里使用了dispatch就没有了
    add: () => ({ type: 'ADD'}),
    reduce: () => ({ type: 'REDUCE'})
  }
  // 这样子写 我的那个connect里面就有了两种形式的 可以使用 dispatch 也是可以使用 dispatch 
  // 其实直接用上面的我估计也是差不多可以使用的了 
  // (dispatch , ownProps) => {
  //   const res = {
  //     add: () => dispatch({ type: 'ADD'}),
  //     reduce: () => dispatch({ type: 'REDUCE'})
  //   }
  //   return {
  //     dispatch,
  //     ...res
  //   }
  // }
  ) (class ReacRedux extends Component {
  render() {
    // console.log( this.props);
    const {count, add, reduce, dispatch} = this.props
   
    return (
      <div>
        {/* {children.txt } */}
        <br/>
        <p>ReactRedux </p>
        <p>{count}</p>
        {/* <button onClick={() => dispatch({type: 'ADD'})}>add use dispatch</button> */}
        <button onClick={add}>add</button>
        <button onClick={reduce}>reduce</button>
      </div>
    )
  }
}) 
