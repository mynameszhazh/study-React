import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage'
import { ThemeProvider } from '../ThemeContext'


export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red',
        aaaa: 'aaaa'
      }
    }
  }
  render() {
    const {theme} = this.state
    const {themeColor, aaaa} = this.state.theme
    console.log(themeColor);
    return (
      <div>
        <h3 className={themeColor}>ContextPage</h3>
        <ThemeProvider value={theme}>
          <ContextTypePage ></ContextTypePage>
        </ThemeProvider>
      </div>
    )
  }
}
