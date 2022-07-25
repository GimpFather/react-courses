import ReactDOM from "react-dom";

import ModalBackdrop from "./Modal/ModalBackdrop";
import ModalOverlay from "./Modal/ModalOverlay";

import { IErrorModal } from "../../../utilities/models/interfaces";

const ErrorModal = ({ title, message, errorHandler }: IErrorModal) => {
	return (
		<>
			{ReactDOM.createPortal(
				<ModalBackdrop errorHandler={errorHandler} />,
				document.getElementById("backdrop-root")!
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={title}
					message={message}
					errorHandler={errorHandler}
				/>,
				document.getElementById("overlay-root")!
			)}
		</>
	);
};

export default ErrorModal;
