import { useContext } from "react";
import { IHeaderCartButton } from "../../../utilities/models/interfaces";
import CartContext from "../../../contexts/cart-context";
import CartIcon from "../Features/CartIcon";

const HeaderCartButton = ({ onClick }: IHeaderCartButton) => {
	const cartCtx = useContext(CartContext);
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.price;
	}, 0);
	return (
		<button onClick={onClick} className="button">
			<span className="icon">
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className="badge">{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
