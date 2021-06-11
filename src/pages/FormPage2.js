import React, { Component } from 'react'
import {Form, Input, Icon, Button} from 'antd'
import "antd/dist/antd.css";

class FormPage2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      psw: ''
    } 
  }
  submit = () => {
    // console.log('submit',this);
    console.log('submit');
  }
  render() {
    const {name, psw} = this.state
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item name='name' rules={[{ required: true, message: 'nihao' }]}>
            <Input placeholder='pleace input ur name'
            onChange={e => this.setState({
              name: e.target.value
            })}></Input>
          </Form.Item>
          <Form.Item name='psw'>
            <Input type='password' placeholder='my name is english'
             rules={[{ required: true, message: 'buhao' }]}
             onChange={e => this.setState({
              psw: e.target.value
              })}></Input>
            {/* <input>nihao</input> */}
          </Form.Item>
          <Button type='primary' danger onClick={this.submit}>按钮</Button>
        </Form>
      </div>
    )
  }
}
export default FormPage2