import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import CrimePicker from './components/crime-picker'
// import Map from './components/map'

class SaveTheWild extends Component {
  renderScene (route, navigator) {
    switch (route.id) {
      case 'first':
        return <CrimePicker navigator={navigator} title='Choose a type of crime' />
      // case 'second':
      //   return <Map navigator={navigator} title='Show us the scene of the crime' />
      // case 'third':
      //   return <CrimeReport navigator={navigator} title='Finalize and submit crime report' />
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
