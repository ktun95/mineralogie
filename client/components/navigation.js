import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navigation = (props) => {
    
    return(
        <div id="header">
            <ul id="nav" style={{border: '1px solid red'}}>
                <li className="nav-item"> Home </li> 
                <li className="nav-item"> About </li> 
                <li className="nav-item">
                    <Link to="/products"> Browse </Link>
                </li>
                <li className="nav-item"> Cart </li>
                <li className="nav-item"> 
                    {props.user ? 
                    <Link to="/login"> Login </Link>
                    : props.user.email
                    }
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userReducer.user
})

export default connect(mapStateToProps)(Navigation)