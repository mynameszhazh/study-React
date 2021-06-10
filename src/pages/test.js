import { Component } from 'react';
class Settering extends Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() }
  }
  render() { 
    return ( <div>{this.state.data}</div> );
  }
}
 
export default Settering;