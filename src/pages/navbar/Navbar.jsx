import { Link } from "react-router-dom"
import navCSS from './Navbar.module.css'
import { useState } from 'react';

export default function ButtonAppBar() {
  const [isActive, setIsActive] = useState(false)
 const toggleMenu = () => setIsActive(isActive => !isActive)
  
  return (
   
    <nav className={navCSS.navbar}>
        <div className={navCSS.brandTitle}><Link to="/">PTIMS-GIS</Link></div>
        <a href="#" onClick={toggleMenu} className={navCSS.toggleButton}>
          <span className={navCSS.bar}></span>
          <span className={navCSS.bar}></span>
          <span className={navCSS.bar}></span>
        </a>
        <div className={`${navCSS.navbarLinks} ${isActive ? navCSS.active : ''}`}>
          <ul>
            <li><Link to="/web-map">WebMap</Link></li>
            <li><Link to="/tax-assessment">Tax Assessment</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
   
  );
}