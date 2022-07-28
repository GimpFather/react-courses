import { IInput } from "../../../utilities/models/interfaces";

const Input = ({ label, input }: IInput) => {
	return (
		<div className="input">
			<label htmlFor={input.id}>{label}</label>
			<input {...input}></input>
		</div>
	);
};

export default Input;
