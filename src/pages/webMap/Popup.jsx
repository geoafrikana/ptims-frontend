const PopupConfig = (feature, layer) => {
    const popupContent = `<div> 
    <img src='https://picsum.photos/200' />
     <p><b>Owner:</b> ${feature.properties.Owner}</p>
     <hr />
     <p><b>Category:</b> ${feature.properties.Category}</p>
     <hr />
     <p><b>Type:</b> ${feature.properties.Building_T}</p>
     <hr />
     <p><b>Title:</b> ${feature.properties.C_of_O}</p>
      </div>`
     layer.bindPopup(popupContent)
   }


   export default PopupConfig