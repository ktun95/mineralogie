import React from 'react'

export const Button = ({text, callback, args}) => {
    return (
        <div>
            <button type="button" onClick={() => callback(args)}>{text}</button>
        </div>
    )
}

export default Button
