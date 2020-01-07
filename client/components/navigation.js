import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    
    return(
        <div class="header">
            <div id="nav" style={{border: '1px solid red'}}>
                <div className="nav-item"> Home </div> 
                <div className="nav-item"> About </div> 
                <div className="nav-item">
                    <Link to="/products"> Browse </Link>
                </div>
                <div className="nav-item"> Cart </div>
            </div>
        </div>
    )
}
