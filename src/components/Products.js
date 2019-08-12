import React, { useContext } from 'react';
// Importing Context 
import ProductContext from "./contexts/ProductContext.js"; 
// Importing Context 

// Components
import Product from './Product';

const Products = props => {

// Calling the useContext Hook
const { product, addItem } = useContext(ProductContext); 
// Calling the useContext Hook

	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
