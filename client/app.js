import React from 'react';
import { Routes } from './routes'
import { Navigation, Footer } from './components'

export const App = () => {
    return (
        <React.Fragment>
            <Navigation />
            <Routes />
            <Footer />
        </React.Fragment>
    )
}

