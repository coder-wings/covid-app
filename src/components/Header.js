import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  return <>
        <nav>
        <div className="logo">
          <img src={process.env.PUBLIC_URL+"images/virus.png"} alt="logo"/>
        </div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statewise">Statewise</NavLink></li>
            <li><NavLink to="/aboutus">AboutUs</NavLink></li>
            <li><NavLink to="/contactus">ContactUs</NavLink></li>
          </ul>
        </nav>
  </>
}

export default Header;
