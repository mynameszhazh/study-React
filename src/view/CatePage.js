import React, { Component } from 'react'
import Layout from '../components/common/Layout'

export default class CatePage extends Component {
  render() {
    return (
      <div className='CatePage'>
        <Layout showBottom={true} showTop={true} title='这是我的界面'>
          <h3>CatePage</h3>
        </Layout>
      </div>
    )
  }
}
