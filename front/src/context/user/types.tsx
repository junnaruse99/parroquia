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
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	confirm_password?: string;
	date_of_birth: Date;
	gender: string;
	country: string;
	state: string;
	city: string;
	address: string;
	phone: string;
	family_members : IFamilyMember[];
	addUser?: (user: IUser, newUser: boolean) => boolean;
	addFamily?: (family: IFamilyMember[]) => void;
}

export interface IFamilyMember {
	family_member_id?: number;
	first_name: string;
	last_name: string;
	date_of_birth: Date;
	gender: string;
	user_id?: number
}

export const initialUser : IUser = {
	first_name: "",
	last_name: "",
	email: "",
	password: "",
	date_of_birth: new Date(),
	gender: "Male",
	country: "",
	state: "",
	city: "",
	address: "",
	phone: "",
	family_members: []
}
