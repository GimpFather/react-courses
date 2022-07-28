import { IMealItem } from "../../../../utilities/models/interfaces";

const MealItem = ({ name, desc, price }: IMealItem) => {
	const formatedPrice = `$${price.toFixed(2)}`;

	return (
		<li className="meal">
			<div>
				<h3>{name}</h3>
				<div className="description">{desc}</div>
				<div className="price">{formatedPrice}</div>
			</div>
			<div></div>
		</li>
	);
};

export default MealItem;
