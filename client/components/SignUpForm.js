import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [created, setCreated] = useState(false)

    useEffect(() => {
        if (created) {
            axios({
                method: 'put',
                url: '/api/auth/login',
                data: {
                    
                }
            })
        }
    })
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (usr, pwrd) => {
        console.log('handleSubmit')
        //password validation

        //username validation

        const {data} = await axios({
            method: 'post',
            url: 'api/auth/signup',
            data: {
                username: usr,
                password: pwrd
            }
        })

        if (data.created) setCreated(true)      
        console.log(data)
    }
    if (created) {
        return (
            <div>
                <span>Sign up successful!</span>
            </div>
    )}

    return (
        <div>
            <form>
                Username: 
                    <input
                        type="text"
                        name="Username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                Password: 
                    <input
                        type="text"
                        name="Username"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
            </form>   
            <button type="submit" onClick={() => handleSubmit(username, password)}> sign up</button>
        </div>
    )
}

export default SignUpForm
