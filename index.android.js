import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import CrimePicker from './components/crime-picker'
// import Map from './components/map'

class SaveTheWild extends Component {
  renderScene (route, navigator) {
    switch (route.id) {
      case 'first':
        return <CrimePicker navigator={navigator} title='Choose a type of crime' />
      case 'second':
        return
        // return <Second navigator={navigator} title='second' />
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={ { id: 'first' } }
        renderScene={ this.renderScene }/>
    )
  }
}

AppRegistry.registerComponent('SaveTheWild', () => SaveTheWild)
