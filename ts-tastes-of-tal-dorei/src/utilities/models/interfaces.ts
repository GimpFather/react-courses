import React from "react";
import { Interface } from "readline";
import { TInput } from "./types";

export interface IChildren {
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

export interface IHeader {
	onOpenCart: () => void;
}

export interface IHeaderCartButton {
	onClick: () => void;
}

export interface ICart {
	onCloseCart: () => void;
}

export interface IOnClick {
	onClick: React.MouseEventHandler;
}

export interface IModal {
	onCloseCart: () => void;
	children: React.ReactNode;
}

export interface ICartContext {
	items: IMealItem[];
	totalAmount: number;
	addItem: (item: IMealItem) => void;
	removeItem: (id: IMealItem["id"]) => void;
}
