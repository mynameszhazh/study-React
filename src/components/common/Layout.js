import React, { Component } from 'react'
import Bottom from './Bottom'
import Top from './Top'

export default class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.showTop || <Top></Top>}
        {this.props.children}
        {this.props.showBottom || <Bottom></Bottom>}
      </div>
    )
  }
}
