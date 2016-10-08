import React, { Component } from 'react'
import { Image } from 'react-native'

class ExampleComponent extends Component {
  render () {
    const pic = { uri: this.props.exampleUrl }

    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    )
  }
}

export default ExampleComponent
