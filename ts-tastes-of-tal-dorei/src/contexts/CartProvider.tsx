import React from "react";
import {
	ICartContext,
	IChildren,
	IMealItem,
} from "../utilities/models/interfaces";
import CartContext from "./cart-context";

const CartProvider = ({ children }: IChildren) => {
	const addItemToCartHandler = (item: IMealItem) => {
		console.log("test");
	};
	const removeItemToCartHandler = (id: IMealItem["id"]) => {
		console.log("test");
	};

	const cartContext: ICartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
