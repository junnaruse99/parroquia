import React, { useState, useContext } from 'react'
import { IFamilyMember } from '../../context/user/types';
import FamilyForm from './forms/FamilyForm';
import UserContext from '../../context/user/UserContext';
import { useNavigate } from "react-router-dom";

const AddFamily = () => {
    
    const [family, setFamily] = useState<IFamilyMember[]>([]);
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const addMember = () => {
        setFamily([
            ...family,
            {
                first_name: '',
                last_name: '',
                date_of_birth: new Date(),
                gender: ''
            }
        ])
    }

    const saveFamily = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        userContext.addFamily!(family);
        navigate('/');

    }

    return (
        <form onSubmit={saveFamily}>
            {family.map((curr, idx) => (
                <FamilyForm setMember={setFamily} family={family} key={idx} position={idx} inputClass='form-control' buttonClass=''/>
            ))}
            <button type="button" className="btn btn-primary" onClick={addMember}>Add family member</button>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>    
    )
}

export default AddFamily;