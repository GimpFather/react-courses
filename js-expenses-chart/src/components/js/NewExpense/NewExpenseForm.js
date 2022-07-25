import { useState } from "react";

import NewExpenseInput from "./NewExpenseInput";

const NewExpenseForm = (props) => {
	const [inputValue, setInputValue] = useState({
		title: "",
		price: "",
		date: "",
	});

	const inputsHandler = (event) => {
		const { name, value } = event.target;
		setInputValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: inputValue.title,
			price: +inputValue.price,
			date: new Date(inputValue.date),
		};
		props.onCancelForm();
		props.onSaveExpenseData(expenseData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__forms">
				<NewExpenseInput
					topic="title"
					type="text"
					onChange={inputsHandler}
					value={inputValue.title}
				></NewExpenseInput>
				<NewExpenseInput
					topic="price"
					type="number"
					onChange={inputsHandler}
					value={inputValue.price}
				></NewExpenseInput>
				<NewExpenseInput
					topic="date"
					type="date"
					onChange={inputsHandler}
					value={inputValue.date}
				></NewExpenseInput>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add expense</button>
				<button onClick={props.onCancelForm}>Cancel</button>
			</div>
		</form>
	);
};

export default NewExpenseForm;
