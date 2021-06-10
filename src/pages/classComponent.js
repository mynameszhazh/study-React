import React, { Component } from 'react'

export default class ClassComponent extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 0
    }
  }
  changeCounter = v => {
    this.setState({
      counter: this.state.counter + v
    }, () => {
      // 这个回调就是上面的state发生改变后调用
      console.log('counter:' + this.state.counter);
    })
  }
 
  setCounter = () => {
    this.changeCounter(1)
  }
  // 组件挂载完成之后执行
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    // const { date } = this.state
    return (
      <div>
        <h3 onClick={this.setCounter}>{this.state.counter}</h3>
        {/* <p>{date.toLocaleTimeString()}</p> */}
      </div>
    )
  }
}