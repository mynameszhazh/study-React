import React, { Component } from 'react'
import {Form, Input, Icon, Button} from 'antd'
import "antd/dist/antd.css";

export default class FormPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      psw: ''
    } 
  }
  submit = () => {
    console.log('submit',this.state);
  }
  render() {
    const {name, psw} = this.state
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item>
            <Input placeholder='pleace input ur name' value={name} 
            onChange={e => this.setState({
              name: e.target.value
            })}></Input>
          </Form.Item>
          <Form.Item>
            <Input type='password' placeholder='my name is english' value={psw}
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
