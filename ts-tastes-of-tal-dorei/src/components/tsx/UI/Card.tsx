import { IChildren } from "../../../utilities/models/interfaces";

const Card = ({ children }: IChildren) => {
	return <div className="card">{children}</div>;
};

export default Card;
