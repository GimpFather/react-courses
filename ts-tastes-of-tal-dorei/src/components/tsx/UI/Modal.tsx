import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import { IModal } from "../../../utilities/models/interfaces";

const Modal = ({children, onCloseCart}: IModal) => {
	const portalRootElement = document.getElementById("overlays");

	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClick={onCloseCart}></Backdrop>, portalRootElement!)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalRootElement!
			)}
		</>
	);
};

export default Modal;
