import React, { Component } from 'react'
import { connect } from 'react-redux'

// connect 第一个（）第一个参数是函数 第二个也是
export default connect(
  state => ({num: state}),
  {
    add: ()=> ({type: "ADD"}),
    reduce: ()=> ({type: "REDUCE"})
  }
)(class ReactRdux2 extends Component {
  render() {
    const {num, add, reduce} = this.props
    return (
      <div>
        <h3>ReactRdux2</h3>
        <div>{num}</div>
        <button onClick={add}>add</button>
        <button onClick={reduce}>reduce</button>
      </div>
    )
  }
}
)