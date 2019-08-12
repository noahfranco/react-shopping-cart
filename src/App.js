import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Importing context 
import ProductContext from "./contexts/ProductContext.js";
import CartContext from "./contexts/CartContext.js"; 
// Importing Context 

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
		<CartContext.Provider value={cart}> 
		<ProductContext.Provider value={{products, addItem}}>
			<Navigation cart={cart} />
		</ProductContext.Provider> 
		</CartContext.Provider>

			{/* Routes */}
			<CartContext.Provider value={cart}> 
			<ProductContext.Provider value={{products, addItem}}>
			<Route
				exact
				path="/"
				component={Products}
			/>
			</ProductContext.Provider>
			</CartContext.Provider>
			<CartContext.Provider value={cart}> 
			<ProductContext.Provider value={{products, addItem}}> 
			<Route
				path="/cart"
				component={Products}
			/>
			</ProductContext.Provider> 
			</CartContext.Provider>
		</div>
	);
}

export default App;
