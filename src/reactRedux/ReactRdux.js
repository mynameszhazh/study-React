import React, { Component } from 'react'
import { connect } from 'react-redux'
export default connect(
  state => ({num: state, age: 12}),
  {
    // 这里使用了dispatch就没有了
    add: () => ({ type: 'ADD'})
  }
  ) (class ReacRedux extends Component {
  render() {
    console.log( this.props);
    const {num, add} = this.props
   
    return (
      <div>
        {/* {children.txt } */}
        <br/>
        <p>ReactRedux </p>
        <p>{num}</p>
        <button onClick={add}>add</button>
      </div>
    )
  }
}) 
