import { useState } from "react";

import "./App.css";
import Cart from "./components/tsx/Cart/Cart";
import Header from "./components/tsx/Layout/Header";
import Meals from "./components/tsx/Meal/Meals";
import CartProvider from "./contexts/CartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onCloseCart={hideCartHandler}></Cart>}
			<Header onOpenCart={showCartHandler}></Header>
			<Meals></Meals>
		</CartProvider>
	);
}

export default App;
