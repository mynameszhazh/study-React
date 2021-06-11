import React, {Component} from 'react'

export default function kFormCreate(Com) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        errors: {}
      }
      // 用来存取 一个校验规则的数据
      this.options = {} 
    }
    handleChange = e => {
      // console.log(this.state);
      let {name, value} = e.target;
      // this.setState({[name]: value}, () => {
      //   this.validate()
      // })
      this.validate({
        ...this.state,
        [name]: value
      })
    }
    getFieldDecorator = (filed, option) => {
      // 这个地方存的是一些校验的东西
      this.options[filed] = option 
      return InputCmp => {
        return (
          <div>
            {
              React.cloneElement(InputCmp, {
                name: filed,
                value: this.state[filed] || '',
                // 我只要改变了就会触发的一个玩意
                onChange: this.handleChange
              })
            }
            <p className='red'>{this.state.errors[filed]}</p>
          </div>
        )
      }
    }
    getFieldsValue = () => {
      return {...this.state}
    }
    getFieldValue = (field) => {
      return this.state[field]
    }
    validate = (state) => {
      const errors = {}
      // const state = {...this.state}
      for(let name in this.options) {
        // console.log(this.options[field]);
        if(this.state[name] === undefined) {
          // 没有输入
          errors[name] = this.options[name].rules[0].message
        }
      }
      this.setState({...state, errors })
      // this.setState({errors })
    }
    validateFields = (callback) => {
      // 校验错误信息
      // const errors = {}
      const state = {...this.state}
      // for(let name in this.options) {
      //   // console.log(this.options[field]);
      //   if(this.state[name] === undefined) {
      //     // 没有输入
      //     errors[name] = this.options[name].rules[0].message
      //   }
      // }
      // this.setState({ errors })
      this.validate(state)
      // this.validate()
      const { errors } = this.state
      if(JSON.stringify(errors) === '{}') {
        // 合法
        callback(undefined, state)
      } else {
        callback(errors, state)
      }
    }
    render() {
      return (
        <div className='redborder'>
          <Com 
          getFieldDecorator={this.getFieldDecorator}
          getFieldsValue={this.getFieldsValue}
          getFieldValue={this.getFieldValue}
          validateFields={this.validateFields}
          ></Com>
        </div>
      )
    }
  }
}
