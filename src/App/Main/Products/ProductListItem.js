import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ProductListItem.css'


class ProductListItem extends Component {
    render() {
        const {
            name,
            image,
            search,
        } = this.props

        return (
            <div className="productListItem">
                <a href="/">
                    <img src={image} alt=""></img>
                </a>
                <div className="search">
                    <a href="/"><img src={search} alt=""></img></a>
                </div>
                <a href="/">
                    <p>{name}</p>
                </a>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    name:PropTypes.string,
    image:PropTypes.string,
    search:PropTypes.string
}



export default ProductListItem
