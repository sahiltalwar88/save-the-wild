import React, { Component } from 'react'
import Mapbox, { MapView } from 'react-native-mapbox-gl'

Mapbox.setAccessToken('pk.eyJ1Ijoic2FoaWx0YWx3YXIiLCJhIjoiY2l1MWdnMmR1MGExeTJ2cndiNDFqaHN5dSJ9._2zqJjF2AyppGiyplBIzKA')

class Map extends Component {
  render () {
    return (
      <MapView />
    )
  }
}

export default Map
