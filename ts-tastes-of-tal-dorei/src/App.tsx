import "./App.css";
import Cart from "./components/tsx/Cart/Cart";
import Header from "./components/tsx/Layout/Header";
import Meals from "./components/tsx/Meal/Meals";

function App() {
	return (
		<>
			<Cart></Cart>
			<Header></Header>
			<Meals></Meals>
		</>
	);
}

export default App;
