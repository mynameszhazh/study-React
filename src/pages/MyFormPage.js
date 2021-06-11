
/*
  作业 把一个校验弄完善了？

*/


import React, { Component } from 'react'
import kFormCreate from '../components/kFormCreate'
const nameRules = {require: true, message: 'please input ur name'}
const passwordRules = {require: true, message: 'please input ur password'}
// 构造器就是把 我下面的一个玩意全部给它弄了进去一样
@kFormCreate
class MyFormPage extends Component {
  submit = () => {
    const {getFieldsValue, getFieldValue, validateFields} = this.props
    validateFields((err, values) => {
      if(err) {
        console.log('err', err);
      } else {{
        console.log('success', values);
      }}
    })
    // console.log(getFieldsValue(), getFieldValue('password'));
  }
  render() {
    // console.log('submit', this.props);
    const {getFieldDecorator} = this.props
    return (
      <div>
        <h3>MyFormPage</h3>
        {getFieldDecorator('name', {rules: [nameRules]})(
          <input type='text' placeholder='nihoa'></input>
        )}
        {getFieldDecorator('password', {rules: [passwordRules]})(
          <input type='password' placeholder='nihoama'></input>
        )}
        <button onClick={this.submit}>按钮</button>
      </div>
    )
  }
}
export default  MyFormPage