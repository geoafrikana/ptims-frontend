import React from 'react'
import { TileLayer, LayersControl} from 'react-leaflet'
import Buildings from './Buildings'
import Owing from './Owing'
import Paid from './Paid'



function Legend(props) {

  return (
    <LayersControl position="topright">
  <LayersControl.Overlay name="Google Satellite">
  <TileLayer
    attribution='&copy; Google Satellite'
    url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}"
  />
  </LayersControl.Overlay>

  <LayersControl.Overlay checked name="All Buildings" >
    <Buildings data_prop={props.data} />
  </LayersControl.Overlay>
  <LayersControl.Overlay name="Owing" >
    <Owing />
  </LayersControl.Overlay>
  <LayersControl.Overlay name="Paid" >
    <Paid />
  </LayersControl.Overlay>
  </LayersControl>
  )
}

export default Legend

