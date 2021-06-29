import React, { Component } from 'react'
import Bottom from './Bottom'
import Top from './Top'

export default class Layout extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className='layout'>
        {this.props.showTop && <Top>{this.props.title}</Top>}
        {this.props.children}
        {this.props.showBottom && <Bottom></Bottom>}
      </div>
    )
  }
}
