import { IMealItem } from "../../../../utilities/models/interfaces";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, desc, price }: IMealItem) => {
	const formatedPrice = `$${price.toFixed(2)}`;

	return (
		<li className="meal">
			<div>
				<h3>{name}</h3>
				<div className="description">{desc}</div>
				<div className="price">{formatedPrice}</div>
			</div>
			<div>
				<MealItemForm id={id}></MealItemForm>
			</div>
		</li>
	);
};

export default MealItem;
