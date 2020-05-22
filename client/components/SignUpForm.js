import React, { useState } from 'react'

export const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
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
                Username: 
                    <input
                        type="text"
                        name="Username"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />

            </form>     
        </div>
    )
}

export default SignUpForm
