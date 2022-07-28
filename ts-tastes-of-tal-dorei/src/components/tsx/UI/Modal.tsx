import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import { IChildren } from "../../../utilities/models/interfaces";

const Modal = ({ children }: IChildren) => {
	const portalRootElement = document.getElementById("overlays");

	return (
		<>
			{ReactDOM.createPortal(<Backdrop></Backdrop>, portalRootElement!)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalRootElement!
			)}
		</>
	);
};

export default Modal;
