import React, { Component } from 'react'
import Layout from '../../components/Layout'
export default class Homepage extends Component {
  render() {
    return (
      <Layout showTop={true} showBottom={true} title={'home'}>
        <h3>Homepage</h3>
      </Layout>
    )
  }
}
