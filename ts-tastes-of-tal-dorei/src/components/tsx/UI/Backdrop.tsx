import { IOnClick } from "../../../utilities/models/interfaces";

const Backdrop = ({onClick}:IOnClick) => {
	return <div className="backdrop" onClick={onClick}></div>;
};

export default Backdrop;
