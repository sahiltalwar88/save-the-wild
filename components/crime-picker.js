import React, { Component } from 'react'
import { Picker, View } from 'react-native'

class CrimePicker extends Component {
  render () {
    return (
      <View ref={component => this._root = component}>
        <Picker
          selectedValue={ this.props.selectedCrime }
          // onValueChange={ (selected) => this.props.onChange(selected) }>
          style={{width: 300}}>
          <Picker.Item label='Poaching and Trafficking' value='poaching' />
          <Picker.Item label='Logging and Plants' value='logging' />
          <Picker.Item label='Fishing (IUUF)' value='fishing' />
        </Picker>
      </View>
    )
  }
}

export default CrimePicker
