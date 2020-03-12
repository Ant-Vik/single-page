import React from 'react'

import "./menu.css"

const Menu =() => {
    return (
        <div className="Menu">
			<div className="nav">
                <div className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Product</a></li>
                        <li><a href="/">Payment</a></li>
                        <li><a href="/">Shipping</a></li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Menu