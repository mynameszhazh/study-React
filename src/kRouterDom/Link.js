import React, { Component } from 'react'
import {RouteRcontext} from './RouterContext'

export default class Link extends Component {
  handClick = (e, history) => {
    e.preventDefault()
    history.push(this.props.to)
  }
  render() {
    const {to, children} = this.props
    return (
      <RouteRcontext.Consumer>
        {
          context => (
            <a href={to} onClick={e => this.handClick(e, context.history)}>{children}</a>
          )
        }
      </RouteRcontext.Consumer>
    )
  }
}
