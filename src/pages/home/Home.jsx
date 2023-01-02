import React from 'react'
import HomeCSS from './Home.module.css'
// import bg from '../../assets/images/home_bg.png'


function Home() {
  return (
  <header className={HomeCSS.hero} >
<div className={HomeCSS.content}>
  <h1>PTIM-GIS</h1>
  <p>Property Tax Information Management System</p>
  </div>
</header>
  )
}

export default Home