import { SUMMARY } from "../../../assets/data/summary";

const MealsSummary = () => {
	return (
		<section className="summary">
			<h2>{SUMMARY.HEADER}</h2>
			<p>{SUMMARY.DESC_1}</p>
			<p>{SUMMARY.DESC_2}</p>
		</section>
	);
};

export default MealsSummary;
