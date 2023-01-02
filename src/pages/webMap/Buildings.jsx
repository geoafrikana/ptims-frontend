import React from 'react'
import {GeoJSON } from 'react-leaflet'
// import data from '../../assets/data/data.json'
import PopupConfig from './Popup'


function Buildings(props) {
  

  return (
    <GeoJSON data_prop={props.data} onEachFeature={PopupConfig} />
  )
}

export default Buildings