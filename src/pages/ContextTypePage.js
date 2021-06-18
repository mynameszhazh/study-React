import React, { Component } from 'react'
import { ThemeContext } from '../ThemeContext'

export default class ContextTypePage extends Component {
  // 这个玩意是直接挂载在ContextTypePage
  static contextType = ThemeContext
  render() {
    console.log(this.props);
    const {themeColor} = this.context
    // console.log(this);
    return (
      <div>
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    )
  }
}
