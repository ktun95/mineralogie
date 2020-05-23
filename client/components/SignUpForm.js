import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            url: 'api/user/availability',
            data: {
                username: usr,
                password: pwrd
            }
        })

        console.log(data)
    }

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
