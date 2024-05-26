export type Deposit = {
	method: string;
	amount: number;
	status: string;
	date: string;
};

export type DepositState = {
	amount: string;
	date: string;
	method: string;
	status: string;
	id: string | null;
	screenshot: string | null;
};
