import React from 'react' 
// import axios from 'axios'

export default class SingleProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            quantity: 1
        }
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
    }
/*
    componentDidMount() { //The behavior of this component when accessed via address bar is kind of wonky, does some of its intended functionality is passed down as props from 'browseProducts', maybe we can clean this up later
        if (!this.props.product) {
            //make request to our server for the product whose id matches the params
            //actually this is not too important right now. Priorities, priorities... 
        }
    }
*/
    inc() {
        this.setState(state => {
            return {
                quantity: state.quantity + 1
            }
        })
    }

    dec() {
        this.setState(state => {
            return {
                quantity: state.quantity - 1
            }
        })
    }

    render() {
        
        

        return (
            <div className="single-product-overlay" onClick={this.props.unmount} >
                <div className="single-product">
                    {/* <img src="/images/defaultmineral.jpg" /> */}
                    {this.props.product ?
                        <React.Fragment>
                            <h2>{this.props.product.name}</h2>
                            <img src={this.props.product.imageURL}></img>
                            <p>{this.props.product.description}</p>
                            <button onClick={this.dec}>-</button>
                            <form value={this.state.quantity}>{this.state.quantity}</form>
                            <button onClick={this.inc}>+</button>     
                        </React.Fragment>
                    : <p>Loading...</p>}
                </div>
            </div>
        
        )
    }
}