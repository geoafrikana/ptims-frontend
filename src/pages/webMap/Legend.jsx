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

  {/* <LayersControl.Overlay checked name="All Buildings" >
    <Buildings data_prop={props.data} />
  </LayersControl.Overlay> */}
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


{/* 

 <button onClick={searchOverlayHandler} className={webMapCSS.search}>
          <i className="fa fa-search" style={{fontSize:'16px'}}></i></button>
          <div className={`${webMapCSS.overlay}  ${searchPop ? webMapCSS.visible : webMapCSS.hidden}`}>
             <SearchOverlay /> 
            <button style={{position:'absolute', top:'10px', right:'5px'}} onClick={()=>setSearchPop(false)}>
            <i className="fa fa-close" style={{fontSize:'15px'}}></i></button>
            </div>

  
  <Legend />
  <div  className={`${webMapCSS.overlay} ${overlayPop ? webMapCSS.visible : webMapCSS.hidden}`}>
    <div>
<div className={webMapCSS.imgParent}>  <img className={webMapCSS.img} src={'https://picsum.photos/200'} alt='' /></div>
  <p><strong>PTIN:</strong> {buildingAttributes? buildingAttributes.PTIN: ''}</p>
  <p><strong>Owner:</strong> {buildingAttributes? `${buildingAttributes.first_name} ${buildingAttributes.first_name}`: ''}</p>
  <p><strong>Email:</strong> {buildingAttributes? buildingAttributes.email: ''}</p>
  <p><strong>Category:</strong> {buildingAttributes? buildingAttributes.building_use: ''}</p>
  <p><strong>Address:</strong> {buildingAttributes? `${buildingAttributes.house_number}, ${buildingAttributes.Street}`: ''}</p>
  <p><strong>Floors:</strong> {buildingAttributes? buildingAttributes.number_of_floor: ''}</p>
  <p><strong>Rooms:</strong> {buildingAttributes? buildingAttributes.number_of_rooms: ''}</p>
  <p><strong>Water Source:</strong> {buildingAttributes? buildingAttributes.water_source: ''}</p>
  <p><strong>Year of Construction:</strong> {buildingAttributes? buildingAttributes.year_of_construction: ''}</p>
  <p><strong>Tax Due:</strong> {buildingAttributes? buildingAttributes.tax_due: ''}</p>
  <p><strong>Tax Paid:</strong> {buildingAttributes? buildingAttributes.tax_paid: ''}</p>


  <div className={webMapCSS.btnDiv}>
 <div> <button onClick={()=>setOverlayPop(false)}>Close</button></div>
  <div><Link to='/tax-assessment'><button>View Tax Detail</button></Link></div>
  </div>
  </div>
  </div>

*/ }

