import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Service = () => {
  return (
    <div>
        <h2>Our Services</h2>    
        <div className="list">
          <ul>            
            <li><Link to="development">Custom software developement</Link></li>
            <li><Link to="consult">Consulting</Link></li>
          </ul>
          <Outlet/>
        </div>   
    </div>
  )
}

export default Service