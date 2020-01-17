import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    
    return(
        <div className="header">
            <ul id="nav" style={{border: '1px solid red'}}>
                <li className="nav-item"> Home </li> 
                <li className="nav-item"> About </li> 
                <li className="nav-item">
                    <Link to="/products"> Browse </Link>
                </li>
                <li className="nav-item"> Cart </li>
                <li className="nav-item"> 
                    <Link to="/login"> Login </Link>
                </li>
            </ul>
        </div>
    )
}
