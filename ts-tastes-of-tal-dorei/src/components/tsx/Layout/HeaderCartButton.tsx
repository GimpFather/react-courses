import CartIcon from "../Features/CartIcon";

const HeaderCartButton = () => {
	return (
		<button className="button">
			<span className="icon">
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className="badge">69</span>
		</button>
	);
};

export default HeaderCartButton;
