import React from 'react'
import { Route, Link } from 'react-router-dom'
import { BrowseProducts, SingleProduct, Login } from './components'

export const Routes = () => {
    return (
        <div id="content-container">
            <div id="routes">
                <Route path="/products/:id" component={SingleProduct} />
                <Route path="/products" component={BrowseProducts} />
                <Route path="/login" component={Login} />
            </div>
        </div>
    )
}