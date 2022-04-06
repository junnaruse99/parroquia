// Interfaces from country-state-city 
export interface Timezones {
	zoneName: string;
	gmtOffset: number;
	gmtOffsetName: string;
	abbreviation: string;
	tzName: string;
}
export interface ICountry {
	name: string;
	phonecode: string;
	isoCode: string;
	flag: string;
	currency: string;
	latitude: string;
	longitude: string;
	timezones?: Timezones[];
	getAllCountries?(): ICountry[];
	getCountryByCode?(): ICountry;
}

export interface IState {
	name: string;
	isoCode: string;
	countryCode: string;
	latitude?: string | null;
	longitude?: string | null;
	getStatesOfCountry?(): IState[];
	getStateByCodeAndCountry?(): IState;
	getStateByCode?(): IState;
}
export interface ICity {
	name: string;
	countryCode: string;
	stateCode: string;
	latitude?: string | null;
	longitude?: string | null;
	getAllCities?(): ICity[];
	getCitiesOfState?(): ICity[];
	getCitiesOfCountry?(): ICity[];
}

// My interfaces
export interface IUser {
	user_id?: number;
	first_name?: string;
	last_name?: string;
	email?: string;
	password?: string;
	confirm_password?: string;
	country?: string;
	state?: string;
	city?: string;
	address?: string;
	phone? : string;
	addUser?: (user: IUser) => void
}

export const initialUser = {
	first_name: "",
	last_name: "",
	email: "",
	password: "",
	country: "",
	city: "",
	address: ""
}