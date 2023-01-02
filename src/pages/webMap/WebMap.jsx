import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { MapContainer, TileLayer} from 'react-leaflet'

import Legend from './Legend'

function WebMap() {
  const EdoCenter = [6.446499,5.602304]
  
  const [allBuildings, setAllBuildings] = useState([])
  const [dataIsLoading, setDataIsLoading] = useState(true)
  useEffect(()=>{

    const source = Axios.CancelToken.source();
      async function GetAllBuildings(){
        try {
        const response = await Axios.get(
          'http://localhost:8000/api/buildings', {
          cancelToken: source.token});
    
        setAllBuildings(response.data);
        setDataIsLoading(false);
      } catch (error){
      console.log(error.response)
    }
    }
    GetAllBuildings();
    return ()=>{
    source.cancel()
    };
    },[]);

    if(!dataIsLoading){
    return (
      <MapContainer center={EdoCenter} zoom={16} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />  
 </MapContainer>
  
  )}
 
    return (
      <MapContainer center={EdoCenter} zoom={16} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Legend data_prop={allBuildings}/>
  
 </MapContainer>
  
  )
}

export default WebMap