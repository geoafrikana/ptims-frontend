import React from 'react'
import data from '../../assets/data/data.json'
import {GeoJSON } from 'react-leaflet'
import PopupConfig from './Popup'


function Paid() {
    const paidStyle = {
        "color": "#30bd2d",
        "weight": 5,
        "opacity": 0.65
    };
    const PaidData = data.features.filter(feature => feature.properties.Condition === 'Good')
  
    return  <GeoJSON style={paidStyle} data={PaidData} onEachFeature={PopupConfig} />
}

export default Paid