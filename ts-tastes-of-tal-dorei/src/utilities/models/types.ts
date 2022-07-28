import { HTMLInputTypeAttribute } from "react";

export type TInput = {
	id: string;
	type: HTMLInputTypeAttribute;
	min: number;
	max: number;
	step: number;
	defaultValue: number;
};
