import React, { Component } from 'react'
import Layout from '../components/common/Layout'
export default class HomePage extends Component {
  render() {
    return (
      <div className='homepage'>
        <Layout showBottom={true} showTop={true} title='首页'>
          <h3>HomePage</h3>
        </Layout>
      </div>
    )
  }
}
