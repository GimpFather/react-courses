import { IHeaderCartButton } from "../../../utilities/models/interfaces";
import CartIcon from "../Features/CartIcon";

const HeaderCartButton = ({onClick}:IHeaderCartButton) => {
	return (
		<button onClick={onClick} className="button">
			<span className="icon">
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className="badge">69</span>
		</button>
	);
};

export default HeaderCartButton;
