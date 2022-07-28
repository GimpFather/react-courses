import { MEALS } from "../../../assets/data/meals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvaiableMeals = () => {
	const mealsList = MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			name={meal.name}
			desc={meal.description}
			price={meal.price}
		></MealItem>
	));

	return (
		<section className="meals">
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvaiableMeals;
