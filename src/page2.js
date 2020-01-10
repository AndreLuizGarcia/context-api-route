import React, { Component } from 'react'

import ContextB from './ContextB'

export default class src extends Component {
  render() {
    return (
      <ContextB.Consumer>
        { name => {
            console.log(name)
          }
        }
      </ContextB.Consumer>
    )
  }
}
