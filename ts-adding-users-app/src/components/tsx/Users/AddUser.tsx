import React, { useState, useRef } from "react";

import validateByLength from "../../../utilities/functions/validateByLength";
import { IAddUser } from "../../../utilities/models/interfaces";
import { SErrorModal } from "../../../utilities/models/types";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }: IAddUser) => {
	const [error, setError] = useState<SErrorModal>();

	const nameInputRef = useRef<HTMLInputElement>(null);
	const ageInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const enteredUserName: string | undefined = nameInputRef.current?.value;
		const enteredAge: number | undefined = ageInputRef.current?.valueAsNumber;

		if (
			validateByLength({ valueToValidate: enteredUserName }) ||
			validateByLength({ valueToValidate: enteredAge })
		) {
			setError({
				title: "Invalid input!",
				message: "Please enter a valid name and age!",
				isError: true,
			});
			return true;
		}
		if (enteredAge! < 1) {
			setError({
				title: "Invalid age!",
				message: "Please enter a valid age!",
				isError: true,
			});
			return;
		}
		onAddUser({ userName: enteredUserName!, userAge: enteredAge! });
	};

	const errorHandler = () => {
		setError({
			title: "Invalid age!",
			message: "Please enter a valid age!",
			isError: false,
		});
	};

	return (
		<>
			{error?.isError && (
				<ErrorModal
					title={error!.title}
					message={error!.message}
					errorHandler={errorHandler}
				></ErrorModal>
			)}
			<Card className="input">
				<form onSubmit={submitHandler}>
					<label htmlFor="username-input">Username</label>
					<input id="username-input" type="text" ref={nameInputRef}></input>
					<label htmlFor="age-input">Age (in years)</label>
					<input id="age-input" type="number" ref={ageInputRef}></input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
