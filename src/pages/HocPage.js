import React, { Component } from 'react'

// HOC: 是个函数， 接收一个组件，返回一个新的组件
// function Child(props) {
//   return <div>child</div>
// }

const foo = Com => props => {
  return (
    <div className='border'>
      <Com {...props}></Com>
    </div>
  )
}

@foo
class Child extends Component {
  render() {
    return <div>child</div>
  }
}

// const Foo = foo(Child)
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Child/>
      </div>
    )
  }
}
