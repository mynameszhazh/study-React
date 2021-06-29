import React, { Component } from 'react'

import Layout from '../components/common/Layout'

export default class CarPage extends Component {
  render() {
    return (
      <div className='CarPage'>
        <Layout showBottom={true} showTop={true} title='捷豹'>
          <h3>CarPage</h3>
        </Layout>
      </div>
    )
  }
}
