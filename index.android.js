import React, { Component } from 'react'
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native'
import CrimePicker from './components/crime-picker'

class SaveTheWild extends Component {
  render () {
    return (
      <Navigator
        style={{width: 300}}
        initialRoute={ { title: 'Crime Picker', index: 0 } }
        renderScene={ (route, navigator) =>
          <CrimePicker
            title={ route.title }

            onForward={ () => {
              var nextIndex = route.index + 1;
              if(route.index === 1) {
                navigator.push({
                  title: 'Map Location'
                });
              } else if(route.index === 2) {
                navigator.push({
                  title: 'Details of Crime'
                });
              }
            }}

            onBack={ () => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('SaveTheWild', () => SaveTheWild)
