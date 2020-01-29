import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import userReducer from '../store/reducers/user'


const Profile = (props) => {
    if (!props.user.email) {
        return (<Redirect to="/login" />)
    }
    
    return (
        <div id="profile">
            <p>
                Welcome {props.user.email}!
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.userReducer.user
})

export default connect(mapStateToProps)(Profile)