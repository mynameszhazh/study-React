import React, { Component } from 'react'
// import HocPage from './view/HocPage'
import './App.css';

// 高阶组件的使用 是一个双层的 操作
function foo(Comp) {
  return function (props) {
    return (
      <div className='HocPageBorder'>
        <Comp {...props}></Comp>
      </div>
    )
  }
}

function foo2(Comp) {
  return function (props) {
    return (
      <div className='HocPageBorder'>
        <Comp {...props}></Comp>
      </div>
    )
  }
}


function Children(props) {
  console.log(props.name, 'chilren')
  return (
    <div className='name'>
      <h2>1212</h2>
    </div>
  )
}


// const Page = foo2(foo(Children))
const Page = Children

@foo2
@foo2
@foo2
export default class App2 extends Component {
  render() {
    return (
      <div className="App">
        <Page name='hoc'></Page>
        {/* <HocPage name='hoc'></HocPage> */}
      </div>
    )
  }
}
