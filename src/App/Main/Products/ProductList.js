import React from 'react'

import './productList.css'
import ProductListItem from './ProductListItem';
import products from './products';

const ProductList =(props) => {
    return(
		<div>
			<div className="ProductList">
				<div className="product-list">
					{
						products.map(({
							id,	
							name,
							image,
							search,
						})=>(
							<div className="product" key={id}>
							<ProductListItem
								name={name}
								image={image}
								search={search}
							/>
							</div>
						))

					}
				</div>
				<div className="btn-view">
					<button>
						view more
					</button>
					<div className="arrows">
						<img src="/images/arrow.png" alt=""/>
					</div>
				</div>
			</div>
		</div>
    )
}



export default ProductList