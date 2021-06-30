import React, { Component } from 'react'
import Layout from '../components/common/Layout'
// import { connect } from 'react-redux'

export default class ProfilePage extends Component {
  render() {
    return (
      <div className='ProfilePage'>
        <Layout showBottom={false} showTop={true} title='这是我的界面'>
          <h3>ProfilePage</h3>
          <button>quit login</button>
        </Layout>
      </div>
    )
  }
}
