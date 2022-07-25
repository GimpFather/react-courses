export interface IAddUserHandler {
	userName: string;
	userAge: number;
}

export interface IErrorModal {
	title: string;
	message: string;
	errorHandler: () => void;
}
