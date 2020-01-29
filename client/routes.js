import React from 'react'
import { Route, Link } from 'react-router-dom'
import { BrowseProducts, SingleProduct, Login, Profile } from './components'

export const Routes = () => {
    return (
        <div id="content-container">
            <div id="routes">
                <Route path="/products/:id" component={SingleProduct} />
                <Route path="/products" component={BrowseProducts} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
            </div>
        </div>
    )
}