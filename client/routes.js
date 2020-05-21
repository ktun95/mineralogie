import React from 'react'
import { Route } from 'react-router-dom'
import { BrowseProducts, SingleProduct, Login, Profile, About } from './components'

export const Routes = () => {
    return (
        <div id="content-container">
            <div id="routes">
                <Route path="/products/:id" component={SingleProduct} />
                <Route path="/products" component={BrowseProducts} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/about" component={About} />
            </div>
        </div>
    )
}