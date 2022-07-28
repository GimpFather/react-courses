import { MEALS } from "../../../assets/data/meals";
import Card from "../UI/Card";

const AvaiableMeals = () => {
	const mealsList = MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>);

	return (
		<section className="meals">
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvaiableMeals;
