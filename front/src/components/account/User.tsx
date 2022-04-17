import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import { IUser } from '../../context/user/types';
import WarningContext from '../../context/warning/WarningContext';
import CountryCityStateInput from './forms/CountryCityStateInput';
import './account.css';

const User = () => {
    let { id } = useParams();
    const userContext = useContext(UserContext);
    const [editClass, setEditClass] = useState({
        class: 'editUser',
        buttonText: 'Edit'
    });
    const [user, setUser] = useState<IUser>(userContext);
    const warning = useContext(WarningContext);
    
    const inputSave = (e : React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const changeUser = () => {
        if (editClass.buttonText === 'Edit') {
            setEditClass({
                class: '',
                buttonText: 'Save'
            })
        } else {
            if (userContext.addUser!(user)) {
                setEditClass({
                    class: 'editUser',
                    buttonText: 'Edit'
                });
            }
        }
    }

    return (
        <>
        {warning.description ? <p className={warning.class}>{warning.description}</p> : null}
        <h1>My account</h1>
        <img src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png' alt='User profile' width='100'/>

        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className={`form-control ${editClass.class}`} id="firstName" placeholder="First Name" name='first_name' defaultValue={userContext.first_name} onChange={inputSave}/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className={`form-control ${editClass.class}`} id="lastName" placeholder="First Name" name='last_name' defaultValue={userContext.last_name} onChange={inputSave}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className={`form-control ${editClass.class}`} id="email" aria-describedby="emailHelp" placeholder="Enter email" name='email' defaultValue={userContext.email} onChange={inputSave}/>
        </div>
        <div className="form-group">
            <label htmlFor="dateBirth">Date of birth</label>
            <input type="date" className={`form-control ${editClass.class}`} id="dateBirth" placeholder="Date of birth" name='date_of_birth' defaultValue={userContext.date_of_birth.toString()} onChange={inputSave}/>
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name='gender' className={editClass.class} defaultValue={userContext.gender} onChange={inputSave}>
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="address">Address Line 1</label>
            <input type="text" className={`form-control ${editClass.class}`} id="address" placeholder="Address" name='address' defaultValue={userContext.address} onChange={inputSave}/>
        </div>
        <CountryCityStateInput divClass='form-group' inputClass={`form-control ${editClass.class}`} user={user} setUser={setUser}/>
        <div className='form-group'>
            <label htmlFor="phone">Phone</label>
            <input type='tel' className={`form-control ${editClass.class}`} id='phone' defaultValue={userContext.phone} name='phone' onChange={inputSave}/>
        </div>
        <button onClick={changeUser}>{editClass.buttonText}</button>
        </>
    )
}

export default User;