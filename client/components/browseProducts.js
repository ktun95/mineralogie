import React from 'react'
import SingleProduct from './singleProduct' 
import { connect } from 'react-redux'
import {ProductCard} from './productCard'
import {fetchProducts} from '../store/'

class BrowseProducts extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedProduct: null
        }
        this.handleUnmount = this.handleUnmount.bind(this)
        this.viewProduct = this.viewProduct.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchProducts()
    }

    viewProduct(id) {
        this.setState({selectedProduct: id})
        
    }

    handleUnmount(event) {
        if (event.target.className === 'single-product-overlay') {
            this.setState({selectedProduct: null})
        }
    }

    render() {
        const products = this.props.products
        return (
            <div className="browse-products">
                <h1 className="category-title"> Specimens </h1>
                <div id="products-view">
                   {this.state.selectedProduct ? <SingleProduct product={this.state.selectedProduct} unmount={this.handleUnmount} /> : null } 
                    <ul>
                        {products.map(product => {
                            return (
                                <ProductCard key={product.id} product={product} viewProduct={this.viewProduct} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.productsReducer.products
})  

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(BrowseProducts)