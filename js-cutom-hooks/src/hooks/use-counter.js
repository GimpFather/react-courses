import { useState, useEffect } from "react";

const useCounter = (effectOperation) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(effectOperation);
		}, 1000);

		return () => clearInterval(interval);
	}, [effectOperation]);

	return counter;
};

export default useCounter;
