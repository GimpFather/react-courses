import React from "react";
import { TInput } from "./types";
export interface ICard {
	children: React.ReactNode;
}

export interface IMealItem {
	id: string;
	name: string;
	desc: string;
	price: number;
}

export interface IInput {
	label: string;
	input: TInput;
}

export interface IMealItemForm {
	id: string;
}
