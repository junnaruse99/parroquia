import React, { useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { ICountry, IState, ICity } from '../../../context/user/types'; // Interfaces

const CountryCityStateInput = ({divClass, inputClass, user, setUser} : {divClass: string, inputClass: string, user: any, setUser: any}) => {

    const [states, setState] = useState<IState[]>([]);
    const [cities, setCities] = useState<ICity[]>([]);

    const selectCountry = (e : any) => {
        const country = Country.getCountryByCode(e.currentTarget.value);

        setState(State.getStatesOfCountry(e.currentTarget.value));
        setUser({
            ...user,
            country: country?.name || "",
            countryCode: e.currentTarget.value,
        })
    }

    const selectState = (e : any) => {
        setCities(City.getCitiesOfState(user.countryCode, e.currentTarget.value));
        setUser({
            ...user,
            stateCode: e.currentTarget.value,
        })
    }

    const selectCity = (e : any) => {
        setUser({
            ...user,
            state: State.getStateByCodeAndCountry(user.stateCode, user.countryCode)?.name || "",
            city: e.currentTarget.value,
        })
    }
    
    console.log(user);
    
    return (
        <>
        <div className={divClass}>
            <label htmlFor="country">Country</label>
            <select name="country" id="country" className={inputClass} onChange={selectCountry} defaultValue={user.country} >
                {Country.getAllCountries().map((country : ICountry) => (
                    <option value={country.isoCode} key={country.isoCode}>{country.name}</option>
                ))}
            </select>
        </div>
        <div className={divClass}>
            <label htmlFor="state">State</label>
            <select name="state" id="state" className={inputClass} onChange={selectState} defaultValue={user.state}>
                {states.map((state : IState) => (
                    <option value={state.isoCode} key={state.isoCode}>{state.name}</option>
                ))}
            </select>
        </div>
        <div className={divClass}>
            <label htmlFor="city">City</label>
            <select name="city" id="city" className={inputClass} onChange={selectCity} defaultValue={user.city}>
                {cities.map((city : ICity) => (
                    <option value={city.name} key={city.name}>{city.name}</option>
                ))}
            </select>
        </div>
        </>
    )
}

export default CountryCityStateInput;