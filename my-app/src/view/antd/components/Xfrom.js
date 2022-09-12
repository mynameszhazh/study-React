import React, { Component } from 'react'
import XFromCreate from './XFromCreate'

@XFromCreate
export default class Xfrom extends Component {
  onsubmit(e) {
    console.log(e, 'sumbmit')
  }
  render() {
    let { getFieldDecorator } = this.props
    return (
      <div className='xfrom'>
        {getFieldDecorator('name', {})(<input className='name_input' placeholder='please input ur name' />)}
        {getFieldDecorator('password', {})(<input className='pwd_input' placeholder='please input ur passwoed' />)}
        <button className='xfrom-btn' onClick={this.onsubmit}>提叫</button>
      </div>
    )
  }
}

