import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
  constructor(props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement('div')
    this.node.classList.add('on')
    doc.body.appendChild(this.node)
  }
  componentWillUnmount() {
    let a = window.document.body.querySelector('.on')
    window.document.body.removeChild(a)
  }
  render() {
    // 不知道为什么这个传送门给了我两个门 我是真的有点觉得诡异吧
    return createPortal(
      <div className='dialog'>
        <h3>dialog</h3>
        {this.props.children}
      </div>,
      this.node
    )
  }
}
