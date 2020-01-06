import React from 'react'
import { Route, Link } from 'react-router-dom'
import { BrowseProducts, SingleProduct } from './components'

export const Routes = () => {
    return (
        <div id="routes">
            <Route path="/products/:id" component={SingleProduct} />
            <Route path="/products" component={BrowseProducts} />
        </div>
    )
}