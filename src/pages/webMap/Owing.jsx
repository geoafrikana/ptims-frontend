import React from 'react'
import data from '../../assets/data/data.json'
import {GeoJSON } from 'react-leaflet'
import PopupConfig from './Popup'


function Owing() {
    const owingStyle = {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    };
    const OwingData = data.features.filter(feature => feature.properties.Condition !== 'Good')

    return  <GeoJSON style={owingStyle} data={OwingData} onEachFeature={PopupConfig}/>
}

export default Owing