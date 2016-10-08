import React, { Component } from 'react'
import Button from 'react-native-button'
import { Picker, View } from 'react-native'

class CrimePicker extends Component {
  render () {
    state = {
      selectedCrime: null
    }

    return (
      <View>
        <Picker
          style={{width: 300}}
          selectedValue='Please select a type of activity to report'
          onValueChange={ (crimeType) => this.setState({ selectedCrime: crimeType }) }>
          <Picker.Item label='Poaching and Trafficking' value='poaching' />
          <Picker.Item label='Logging and Plants' value='logging' />
          <Picker.Item label='Fishing (IUUF)' value='fishing' />
        </Picker>
        <Button
          style={{width: 100, height: 50, backgroundColor: 'green'}}
          onPress={ this.props.navigator.push({ id: 'second' }) }>
          Continue
        </Button>
      </View>
    )
  }
}

export default CrimePicker
