import { IChildren } from "../../../utilities/models/interfaces";

const ModalOverlay = ({ children }: IChildren) => {
	return (
		<div className="modal">
			<div className="content">{children}</div>
		</div>
	);
};

export default ModalOverlay;
