import React from 'react'
import "../../styles/protectedroutes/ProtectedRoutes.css"
import  pagenotfound from "../../images/pagenotfound.png"
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export const ProtectedRoutes = () => {
  return (
    <div>
        <div className="four-z-four" >
            <img src={pagenotfound} alt="404 page not found" height="500px"/>
            <NavLink to={'/'} className='goback'>Back to Home Page <FaHome/></NavLink> 
        </div>
    </div>
  )
}
