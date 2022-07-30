import backgroundImage from "../../../assets/tot-background.jpg";
import { IHeader } from "../../../utilities/models/interfaces";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onOpenCart}:IHeader) => {
	return (
		<>
			<header className="header">
				<h1>Tastes of Tal'dorei!</h1>
				<HeaderCartButton onClick={onOpenCart}></HeaderCartButton>
			</header>
			<div className="main-image">
				<img
					src={backgroundImage}
					alt="Violet dragon attacking Skyship from Tal' Dorei."
				></img>
			</div>
		</>
	);
};

export default Header;
