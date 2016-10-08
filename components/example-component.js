import React, { Component } from 'react'
import { AppRegistry, Modal } from 'react-native'

class ExampleComponent extends Component {
  render () {
    return (
      <Modal>this.props.exampleText</Modal>
    )
  }
}

AppRegistry.registerComponent('ExampleComponent', () => ExampleComponent)
export default ExampleComponent
