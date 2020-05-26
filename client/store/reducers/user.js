import axios from 'axios'

//ACTION TYPES
const GET_USER = 'GET_USER'

//ACTION CREATORS
const getUser = (user) => ({type: GET_USER, user})

//THUNK CREATORS
export const fetchUser = (userInfo) => async dispatch => {
    const {username, password} = userInfo
    try {
        const {data} = await axios({
            url: '/api/auth/login',
            method: 'post',
            data: {username, password}
        })

        dispatch(getUser(data))
        return (data)
    } catch (err) {
        console.error(err)   
    }
}

//REDUCER
const initialState = {
    user: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {...state, user: action.user}
        default:
            return state
    }
}