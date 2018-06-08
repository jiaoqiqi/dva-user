import React, { Component } from 'react'
import { connect } from 'dva'

class Users extends Component {
  render() {
    return (
      <div>
        Users.js
      </div>
    )
  }
}

Users.propsTypes = {}

export default connect()(Users)
