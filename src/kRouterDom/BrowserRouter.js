import React, { Component } from 'react'
import {createBrowserHistory} from 'history'
import {RouteRcontext} from './RouterContext'

export default class BrowserRouter extends Component {
  constructor(props) {
    super(props)
    // 这个玩意是一个历史记录一样的东西 我是不知道怎么用了
    this.history = createBrowserHistory() 
    this.state = {

    }
    this.unlisten = this.history.listen(location => {
      this.setState({location})
    })
  }
  componentWillUnmount() {
    if(this.unlisten) {
      // 这个解决也是又有意思的一个东西 就是执行了就解除了 
      this.unlisten()
    }
  }
  render() {
    return <RouteRcontext.Provider value={{history: this.history, location: this.state.location}}>{this.props.children}</RouteRcontext.Provider>
  }
}
