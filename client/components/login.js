import React from 'react'

export default class Login extends React.Component {
    constructor() {
        super() 
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <form>
                    Username:
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange} />
                    Password:
                    <input 
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.password} 
                        onChange={this.handleChange}/>
                </form>
            </div>
        )    
    }
}
/*
export const Login = () => {
    return (
        <div className="login">
            <form>
                Username:
                <input type="text"></input>
                Password:
                <input type="text"></input>
            </form>
        </div>
    )
}
*/