import React, { Component } from 'react'
import k2FromCreate from '../components/k2FromCreate'

@k2FromCreate
class My2FormPage extends Component {
  submit = () => {
    console.log('submit');
  }
  render() {
    console.log(this.props);
    const { getFileDor }  = this.props
    return (
      <div>
        <h3>My2FormPage</h3>
        {
          getFileDor('name', {})(
            <input type='text' placeholder='请输入姓名'></input>
          )
        }
        {
          getFileDor('password', {})(
            <input type='password' placeholder='请输入密码'></input>
          )
        }
        <button onClick={this.submit}>按钮</button>
      </div>
    )
  }
}
export default  My2FormPage 
