import { ICard } from "../../../utilities/models/interfaces";

const Card = ({ children }: ICard) => {
	return <div className="card">{children}</div>;
};

export default Card;
