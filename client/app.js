import React from 'react';
import { Routes } from './routes'
import { Navigation } from './components'

export const App = () => { //going to put product page here for now
    return (
        <React.Fragment>
            <Navigation />
            <Routes />
        </React.Fragment>
    )
}

