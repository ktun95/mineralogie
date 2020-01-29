import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import Profile from './profile'

const Navigation = (props) => {
    console.log(props)
    return(
        <div id="header">
            <ul id="nav">
                <li className="nav-item"> Home </li> 
                <li className="nav-item"> About </li> 
                <li className="nav-item">
                    <Link to="/products"> Browse </Link>
                </li>
                <li className="nav-item"> Cart </li>
                <li className="nav-item"> 
                    {props.user.email ?
                        <Link to="/profile"> Profile </Link>
                        : <Link to="/login"> Login </Link>
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