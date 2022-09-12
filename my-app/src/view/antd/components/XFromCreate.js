import React, { Component } from 'react'
import './xfrom.css'

export default function XFromCreate(Com) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    handleChange = (e) => {
      let { name, value } = e.target
      this.setState({ [name]: value })
    }
    // 就算是这里 也会有this 的指向问题出现
    getFieldDecorator = (field, option) => {
      return (inputCom) => {
        return (
          React.cloneElement(inputCom, {
            name: field,
            value: this.state[field] || '',
            onChange: this.handleChange
          })
        )
      }
    }
    render() {
      return (
        <div className='HocPageBorder'>
          <Com getFieldDecorator={this.getFieldDecorator}></Com>
        </div>
      )
    }
  }
}

