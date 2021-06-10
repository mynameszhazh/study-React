import React, { Component } from 'react'
import Layout from './layout'

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTop={false} showBottom={false}>
        {/* <div>
          <p>homepage</p>
        </div> */}
        {
          {
            content:(
              <div>
                <p>homepage</p>
              </div> 
            ),
            txt: 'my name is english',
            btnClick: () => {console.log('nihao');}
          }
        }
      </Layout>
    )
  }
}
