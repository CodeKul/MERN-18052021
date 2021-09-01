import React, { Component } from 'react'
import ProductData from './ProductData'
import './Products.css'
class Products extends Component {

    render() {
        let products = [
            {
                name: "Keyboard",
                price: 1000,
                qty: 5
            },
            {
                name: "Stylus",
                price: 2000,
                qty: 4
            },
            {
                name: "Mouse",
                price: 900,
                qty: 4
            }
        ]
        return (
            <div>
                <p className="bg-secondary">{this.props.tablename}</p>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                    <ProductData products={products}/>
                </table>
            </div>
        )
    }
}

export default Products
