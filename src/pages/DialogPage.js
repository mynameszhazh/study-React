import React, { Component } from 'react'
import Dialog from '../components/Dialog'
export default class DialogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false
    }
  }
  changeDia = () => {
    const { showDialog } = this.state
    this.setState({showDialog: !showDialog})
  }
  render() {
    const { showDialog } = this.state
    // console.log(showDialog);
    return (
      <div>
        <h3>DialogPage</h3>
        <button onClick={this.changeDia}>按钮</button>
        {showDialog && <Dialog>
          <h3>我是一些内容</h3>
          </Dialog>}
      </div>
    )
  }
}
