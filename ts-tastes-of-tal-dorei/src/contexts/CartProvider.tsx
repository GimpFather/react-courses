import React, { useReducer } from "react";
import {
	ICartContext,
	ICartReducer,
	IChildren,
	IMealItem,
} from "../utilities/models/interfaces";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = ({ state, action }: ICartReducer) => {
	switch (action.type) {
		case "ADD_CART_ITEM":
			const updatedItems = state.items.concat(action.item);
			const updatedTotalAmount =
				state.totalAmount + action.item.price * action.item.amount;
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		case "REMOVE_CART_ITEM":
			break;
		default:
			defaultCartState;
			break;
	}
};

const CartProvider = ({ children }: IChildren) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item: IMealItem) => {
		dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
	};
	const removeItemToCartHandler = (id: IMealItem["id"]) => {
		dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
	};

	const cartContext: ICartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
