import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { MapContainer, Polygon, TileLayer} from 'react-leaflet'

import Legend from './Legend'

function WebMap() {
  const EdoCenter = [4.557437896728515, 7.491348249992404] //[6.446499,5.602304]

  const purpleOptions = { color: 'purple' }
  const [allBuildings, setAllBuildings] = useState([])
  useEffect(()=>{

    const source = Axios.CancelToken.source();
      async function GetAllBuildings(){
        try {
        const response = await Axios.get(
          'http://localhost:8000/api/buildings', {
          cancelToken: source.token});
    
        setAllBuildings(response.data);
      } catch (error){
      console.log(error.response)
    }
    }
    GetAllBuildings();
    return ()=>{
    source.cancel()
    };
    },[]);

    const polyClick = (p)=>{
      console.log(p)
    }

 if (allBuildings)
    return (
      <MapContainer center={EdoCenter} zoom={12} scrollWheelZoom={true}>
        
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {
  allBuildings.map((building, index) => <Polygon key={`polygon-${index}`} eventHandlers={{ click: ()=>polyClick(building) }} pathOptions={purpleOptions} positions={building.poly.coordinates} />)
  }
  <Legend />
  
 </MapContainer>
  
  )
}

export default WebMap