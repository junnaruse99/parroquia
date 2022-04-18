import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CountryCityStateInput from './forms/CountryCityStateInput';
import { IUser, initialUser } from '../../context/user/types';
import WarningContext from '../../context/warning/WarningContext';
import UserContext from '../../context/user/UserContext';
import { useNavigate } from "react-router-dom";

const NewAccount = () => {

    const [user, setUser] = useState<IUser>(initialUser);
    const warning = useContext(WarningContext);
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const inputSave = (e : React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const saveUser = (e : any) => {
        e.preventDefault();

        // Save User
        if (userContext.addUser!(user, true)) {
            navigate('/add-family');
        };

    }

    return (
        <>
        {warning.description ? <p className={warning.class}>{warning.description}</p> : null}
        <form onSubmit={saveUser}>
        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={inputSave} name='first_name'/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="First Name" onChange={inputSave} name='last_name'/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={inputSave} name='email'/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={inputSave} name='password'/>
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" onChange={inputSave} name='confirm_password'/>
        </div>
        <div className="form-group">
            <label htmlFor="dateBirth">Date of birth</label>
            <input type="date" className="form-control" id="dateBirth" placeholder="Date of birth" onChange={inputSave} name='date_of_birth'/>
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name='gender' onChange={inputSave}>
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="address">Address Line 1</label>
            <input type="text" className="form-control" id="address" placeholder="Address" onChange={inputSave} name='address'/>
        </div>
        <CountryCityStateInput divClass='form-group' inputClass='form-control' user={user} setUser={setUser}/>
        <div className='form-group'>
            <label htmlFor="phone">Phone</label>
            <input type='tel' className='form-control' id='phone' defaultValue="+51" onChange={inputSave} name='phone'/>
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        <hr />
        <p>You already have an account? <Link to='/login'>Log In</Link></p>
        </>
    )
}

export default NewAccount;