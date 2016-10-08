import React, { Component } from 'react'
import { Picker } from 'react-native'

class CrimePicker extends Component {
  render() {
    state = {
      selectedCrime: null
    }

    return (
      <Picker
        style={{width: 300}}
        selectedValue={ state.selectedCrime }
        onValueChange={ (crimeType) => this.setState({ selectedCrime: crimeType }) }>
        <Picker.Item label='Poaching and Trafficking' value='poaching' />
        <Picker.Item label='Logging and Plants' value='logging' />
        <Picker.Item label='Fishing (IUUF)' value='fishing' />
      </Picker>
    )
  }
}

export default CrimePicker

// <Picker
//       style={styles.picker}
//       selectedValue={this.state.selected1}
//       onValueChange={this.onValueChange.bind(this, 'selected1')}
//       prompt='Pick one, just one'>
//       <Item label='hello' value='key0' />
//       <Item label='world' value='key1' />
//     </Picker>
