import { MEALS } from "../../../assets/data/meals";

const AvaiableMeals = () => {
	const mealsList = MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>);

	return (
		<section className="meals">
			<ul>{mealsList}</ul>
		</section>
	);
};

export default AvaiableMeals;
