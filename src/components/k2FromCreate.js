import React, { Component } from 'react'

export default function k2FromCreate(Com) {
  return class k2FromCreate extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    handleChange = (e) => {
      console.log(this.state);
      let { name, value} = e.target
      this.setState({[name]: value})
    }
    getFileDor = (feild, option) => {
      return (InputElemtn) => {
        return React.cloneElement(InputElemtn, {
          name: feild,
          value: this.state[feild] || '',
          onChange: this.handleChange
        })
      }
    }
    render() {
      return (
        <div className='redborder'>
          <Com getFileDor={this.getFileDor}></Com>
        </div>
      )
    }
  }
}
