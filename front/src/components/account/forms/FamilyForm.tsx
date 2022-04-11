import React, { useState } from 'react';
import { IFamilyMember } from '../../../context/user/types';

const FamilyForm = ({setMember, family, position} : {setMember: (family: IFamilyMember[]) => void, family: IFamilyMember[], position: number}) => {

    const removeMember = () => {
        setMember([
            ...family.slice(0, position),
            ...family.slice(position+1)
        ]);
    }

    const inputSave = (e : React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setMember([
            ...family.slice(0, position),
            {
                ...family[position],
                [e.currentTarget.name]: e.currentTarget.value
            },
            ...family.slice(position+1)
        ])
    }

    return (
        <>
        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={inputSave} name='first_name' value={family[position].first_name}/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="First Name" onChange={inputSave} name='last_name' value={family[position].last_name}/>
        </div>
        <div className="form-group">
            <label htmlFor="dateBirth">Date of birth</label>
            <input type="date" className="form-control" id="dateBirth" placeholder="Date of birth" onChange={inputSave} name='date_of_birth' value={family[position].date_of_birth.toString()}/>
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name='gender' onChange={inputSave} defaultValue={family[position].gender}>
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
            </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={removeMember}>Remove family member</button>
        </>
    )
}

export default FamilyForm;