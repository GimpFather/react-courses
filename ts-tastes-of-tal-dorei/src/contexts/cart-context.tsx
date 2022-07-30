import React from "react";
import { ICartContext } from "../utilities/models/interfaces";

const CartContext = ({
	items,
	totalAmount,
	addItem,
	removeItem,
}: ICartContext) => {
	React.createContext({
		items: [],
		totalAmount: 0,
		addItem: (item) => {},
		removeItem: (id) => {},
	});
};

export default CartContext;
