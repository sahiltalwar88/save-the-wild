import React, { Component } from 'react'
import { Picker, StyleSheet, View } from 'react-native'

class CrimePicker extends Component {
  render () {
    return (
      <View style={styles.selectCrime} ref={component => this._root = component}>
        <Picker
          style={styles.selectedCrimePicker}
          selectedValue={ this.props.selectedCrime }>
          <Picker.Item label='Poaching and Trafficking' value='poaching' />
          <Picker.Item label='Logging and Plants' value='logging' />
          <Picker.Item label='Fishing (IUUF)' value='fishing' />
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectCrime: {
    width: 300,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#5E676E',
    borderColor: '#3B3B3B',
    borderWidth: 2,
    borderRadius: 5
  },
  selectedCrimePicker: {
    color: '#E1A600'
  }
});


export default CrimePicker
