import { createContext } from "react";
import { ICartContext } from "../utilities/models/interfaces";

const CartContext = createContext<ICartContext>({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export default CartContext;
