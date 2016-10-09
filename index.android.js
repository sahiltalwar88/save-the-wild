import React, { Component } from 'react'
import { AppRegistry, Navigator, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import CrimePicker from './components/crime-picker'
import Map from './components/map'

class SaveTheWild extends Component {
  constructor (props) {
    super(props)
    this.state = { selectedCrime: null }
  }

  setSelectedCrime = (selectedCrime) => {
    this.setState({ selectedCrime: selectedCrime })
  }

  render () {
    const routes = [
      {
        title: 'Choose a type of crime',
        index: 0,
        component: <CrimePicker
                      onChange={ this.setSelectedCrime }
                      selectedCrime={ this.state.selectedCrime } />
      },
      {
        title: 'Show us the scene of the crime',
        index: 1,
        component: <Map wtf={ this.state.selectedCrime }/>
      }
    ]

    return (
    <Navigator
      initialRoute={routes[0]}
      renderScene={(route, navigator) =>
        <View style={styles.container}>
          {route.component}
          <Button
            style={styles.continueButton}
            onPress={() => {
              const nextPage = route.index++
              navigator.push(routes[nextPage])
            }}>
            Continue
          </Button>
        </View>
      }
    />
  )
  }
}

const styles = StyleSheet.create({
  continueButton: {
    width: 100,
    color: '#E1A600',
    backgroundColor: '#5E676E',
    borderColor: '#3B3B3B',
    borderWidth: 2,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#4d93d1'
  }
});


AppRegistry.registerComponent('SaveTheWild', () => SaveTheWild)
