import React, {useEffect, useState} from 'react';
// import { Link } from "react-router-dom"
// import Axios from 'axios';
import { MapContainer, Polygon, TileLayer} from 'react-leaflet'
// import webMapCSS from './WebMap.module.css'
// import SearchOverlay from './SearchOverlay';
// import Legend from './Legend'

function WebMap() {
  const EdoCenter = [ 6.44579051475538, 5.60881753546189] //[5.6089036946774, 6.44579641865379] 

  const purpleOptions = { color: 'purple' }

  const [allBuildings, setAllBuildings] = useState([])

  // const [overlayPop, setOverlayPop] = useState(false)
  const [buildingAttributes, setBuildingAttributes] = useState()
  // const [searchPop, setSearchPop] = useState(false)
  const url = new URL('http://44.212.9.24/api/buildings')

const fetchBuildings = async ()=>{
 const res = await fetch(url)
 const data  = await res.json()
 setAllBuildings(data) }

 useEffect( ()=>{
  fetchBuildings()
  },
  [])

 
  //  const searchOverlayHandler = ()=>{
  //     setSearchPop(true)
  //   }
    const polyClick = (building)=>{
      // setOverlayPop(true)
      setBuildingAttributes(building)
      alert(JSON.stringify(buildingAttributes))
    }
  
if (allBuildings.length > 0){
  return (
    
    <MapContainer center={EdoCenter} zoom={14} scrollWheelZoom={true}>
       <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{ allBuildings
.map(
  (building, index) => <Polygon key={`polygon-${index}`} 
  positions={[[building.poly.coordinates[0][0].map(i=>i.reverse())]]}
  eventHandlers={{click: ()=>polyClick(building) }}
pathOptions={purpleOptions} 
  />

 )
}
</MapContainer>

)
}


    
}

export default WebMap


