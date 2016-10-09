import React, { Component } from 'react'
import { AppRegistry, Navigator, View } from 'react-native'
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
        </View>
      }
    />
  )
  }
}

AppRegistry.registerComponent('SaveTheWild', () => SaveTheWild)
