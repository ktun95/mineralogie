import React from 'react'
import { connect } from 'react-redux'
// import { fetchUser } from '../store/reducers/user'
import axios from 'axios'
import { fetchUser } from '../store/reducers/user'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick() {
        this.props.fetchUser(this.state)
    }

    // async testLogin(body) {
    //     const { email, password } = body
    //     console.log('testing login with body:', body)
    //     try {
    //         const response = await axios.post('/api/user', { email, password })
    //         console.log('server\'s response:', response)
    //     } catch (err) {
    //         console.log(err, 'LOGIN FAILED')
    //     }
    //     //test that logging in with valid username/pw  results in server responding with user data
    //     // axios.get('/api/user/', body).then((response) => console.log(response))

    // }

    render() {
        return (
            <div className="login">
                <form>
                    Username:
                    <input
                        type="text"
                        name="email"
                        placeholder="Username"
                        value={this.state.email}
                        onChange={this.handleChange} /> <br />
                    Password:
                    <input
                        type="text"
                          name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange} /> <br />
                </form>
                <button type="submit" onClick={this.handleClick}> Test Login! </button>
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

const mapStateToProps = state => ({
    user: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)