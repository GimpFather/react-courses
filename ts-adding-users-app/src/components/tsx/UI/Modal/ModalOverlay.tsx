import Card from "../Card";
import Button from "../Button";

import { IErrorModal } from "../../../../utilities/models/interfaces";

const ModalOverlay = ({ title, message, errorHandler }: IErrorModal) => {
	return (
		<Card className="modal">
			<header className="header">
				<h2>{title}</h2>
			</header>
			<div className="content">
				<p>{message}</p>
			</div>
			<footer className="actions">
				<Button type="submit" onClick={errorHandler}>
					Close
				</Button>
			</footer>
		</Card>
	);
};

export default ModalOverlay;
