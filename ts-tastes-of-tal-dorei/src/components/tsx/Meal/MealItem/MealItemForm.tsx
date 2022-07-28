import { IMealItemForm } from "../../../../utilities/models/interfaces";
import Input from "../../UI/Input";

const MealItemForm = ({ id }: IMealItemForm) => {
	return (
		<form className="form">
			<Input
				label="Amount"
				input={{
					id: "amount-" + id,
					type: "number",
					min: 1,
					max: 5,
					step: 1,
					defaultValue: 1,
				}}
			></Input>
			<button>Add</button>
		</form>
	);
};

export default MealItemForm;
