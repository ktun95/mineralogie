import React from 'react'

export const ProductCard = (props) => {
    return (
    <div className="product-card" onClick={() => {props.viewProduct(props.product)}}>
        <img src={props.product.imageURL} height="200px" width="200px" />
        <p>{props.product.name}</p>
        <p>{props.product.price}</p>
    </div>
    )
}