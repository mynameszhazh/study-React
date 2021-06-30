import React, { Component } from 'react'
import Bottom from './Bottom'
import Top from './Top'

import classnames from 'classnames'

export default class Layout extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className={classnames({
        'layout': false
      })}>
        {this.props.showTop && <Top>{this.props.title}</Top>}
        <article>{this.props.children}</article>
        {this.props.showBottom && <Bottom></Bottom>}
      </div>
    )
  }
}
