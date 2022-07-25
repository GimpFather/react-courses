interface IValidateByLength {
	valueToValidate: string | number | undefined;
}

const validateByLength = ({ valueToValidate }: IValidateByLength): boolean => {
	if (
		valueToValidate === undefined ||
		Number.isNaN(valueToValidate) ||
		valueToValidate.toLocaleString().trim().length === 0
	)
		return true;
	else return false;
};

export default validateByLength;
