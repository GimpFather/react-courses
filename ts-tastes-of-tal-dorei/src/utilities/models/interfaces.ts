import React from "react";

export interface ICard {
	children: React.ReactNode;
}

export interface IMealItem {
	name: string;
	desc: string;
	price: number;
}
