import React, { Component } from 'react'

// import { bindActionCreators } from 'redux'

const ValueContext = React.createContext()

export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps
  ) => WarpCom => {

  return class extends Component {
    static contextType = ValueContext
    constructor(props) {
      super(props)
      this.state = {
        props: {}
      }
    }
    componentDidMount() {
      // console.log(this.context);
      const { subscribe } = this.context
      this.update()
      subscribe(() => {
        this.update()
      })
    }
    update = () => {
      const {dispatch, getState} = this.context
      let stateProps = mapStateToProps(getState()) 
      let dispatchProps
      // console.log('123');
      if(typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      } else if (typeof mapDispatchToProps === 'function') {
        // console.log(2);
        dispatchProps = mapDispatchToProps(dispatch)
      }else {
        // 默认
        dispatchProps = {dispatch}
      }
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render() { 
      // console.log(this.context);
      return <WarpCom {...this.state.props}></WarpCom>
    }
  }
}

export class Provider extends Component {
  render() {
    // console.log(this.props);
    return <ValueContext.Provider value={this.props.store}>{this.props.children}</ValueContext.Provider>
  }
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch) {
  const obj = []
  for(const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}
