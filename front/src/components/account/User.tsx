import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import { IUser, IFamilyMember } from '../../context/user/types';
import WarningContext from '../../context/warning/WarningContext';
import CountryCityStateInput from './forms/CountryCityStateInput';
import FamilyForm from './forms/FamilyForm';
import './account.css';

const User = () => {
    let { id } = useParams();
    const userContext = useContext(UserContext);
    const [editClass, setEditClass] = useState({
        infoClass: 'editUser',
        infoButtonText: 'Edit',
        famClass: 'editUser',
        famButtonText: 'Edit',
        famButtonClass: 'd-none'
    });
    const [user, setUser] = useState<IUser>(userContext);
    const [family, setFamily] = useState<IFamilyMember[]>(userContext.family_members);
    const warning = useContext(WarningContext);
    
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

    const inputSave = (e : React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const editUserInfo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editClass.infoButtonText === 'Edit') {
            setEditClass({
                ...editClass, 
                infoClass: '',
                infoButtonText: 'Save'
            })
        } else {
            if (userContext.addUser!(user, false)) {
                setEditClass({
                    ...editClass,
                    infoClass: 'editUser',
                    infoButtonText: 'Edit'
                });
            }
        }
    }

    const editUserFam = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editClass.famButtonText === 'Edit') {
            setEditClass({
                ...editClass, 
                famClass: '',
                famButtonText: 'Save',
                famButtonClass: ''
            })
        } else {
            if (userContext.addFamily!(family)) {
                setEditClass({
                    ...editClass,
                    famClass: 'editUser',
                    famButtonText: 'Edit',
                    famButtonClass: 'd-none'
                });
            }
        }
    }

    return (
        <>
        {warning.description ? <p className={warning.class}>{warning.description}</p> : null}
        <h1>My account</h1>
        <img src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png' alt='User profile' width='100'/>

        <form onSubmit={editUserInfo}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className={`form-control ${editClass.infoClass}`} id="firstName" placeholder="First Name" name='first_name' defaultValue={userContext.first_name} onChange={inputSave}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className={`form-control ${editClass.infoClass}`} id="lastName" placeholder="First Name" name='last_name' defaultValue={userContext.last_name} onChange={inputSave}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className={`form-control ${editClass.infoClass}`} id="email" aria-describedby="emailHelp" placeholder="Enter email" name='email' defaultValue={userContext.email} onChange={inputSave}/>
            </div>
            <div className="form-group">
                <label htmlFor="dateBirth">Date of birth</label>
                <input type="date" className={`form-control ${editClass.infoClass}`} id="dateBirth" placeholder="Date of birth" name='date_of_birth' defaultValue={userContext.date_of_birth.toString()} onChange={inputSave}/>
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name='gender' className={editClass.infoClass} defaultValue={userContext.gender} onChange={inputSave}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unknown</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address Line 1</label>
                <input type="text" className={`form-control ${editClass.infoClass}`} id="address" placeholder="Address" name='address' defaultValue={userContext.address} onChange={inputSave}/>
            </div>
            <CountryCityStateInput divClass='form-group' inputClass={`form-control ${editClass.infoClass}`} user={user} setUser={setUser}/>
            <div className='form-group'>
                <label htmlFor="phone">Phone</label>
                <input type='tel' className={`form-control ${editClass.infoClass}`} id='phone' defaultValue={userContext.phone} name='phone' onChange={inputSave}/>
            </div>
            <button type='submit'>{editClass.infoButtonText}</button>
        </form>
        <hr />
        <h1>Family Members</h1>
        <form onSubmit={editUserFam}>
            {family.map((curr, idx) => (
                    <FamilyForm setMember={setFamily} family={family} key={idx} position={idx} inputClass={`form-control ${editClass.famButtonClass}`} buttonClass={editClass.famButtonClass}/>
            ))}
            <button type="button" className={`btn btn-primary ${editClass.famButtonClass}`} onClick={addMember}>Add family member</button>
            <button type="submit" className="btn btn-primary">{editClass.famButtonText}</button>
        </form>
        </>
    )
}

export default User;