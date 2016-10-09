import React, { Component } from 'react'
import { AppRegistry, Navigator, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import CrimePicker from './components/crime-picker'
import Map from './components/map'

class SaveTheWild extends Component {
  constructor (props) {
    super(props)
    this.state = { selectedCrime: null }
    this.setSelectedCrime = this.setSelectedCrime.bind(this)
  }

  setSelectedCrime (selectedCrime) {
    this.setState({ selectedCrime: selectedCrime })
  }

  render () {
    const routes = [
      {
        title: 'Please select a type of crime',
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
<<<<<<< HEAD
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
=======
      initialRoute={ routes[0] }
      renderScene={ (route, navigator) =>
        <View>
          {route.component}
          {
            this.state.selectedCrime
              ? <Button
                  style={{width: 200, height: 200, backgroundColor: 'black'}}
                  onPress={() => {
                    const nextPage = route.index++
                    navigator.push(routes[nextPage])
                  }}>
                  Continue
                </Button>
              : null
          }
>>>>>>> 448dada0f91aa72bafb70c77b49ae0c299f48dd7
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
