import React, { useContext } from 'react';
// Importing Context 
import ProductContext from "./contexts/ProductContext.js"; 
// Importing Context 

// Components
import Product from './Product';

const Products = () => {

// Calling the useContext Hook
const { products, addItem } = useContext(ProductContext); 
// Calling the useContext Hook

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
