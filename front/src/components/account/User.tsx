import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import './account.css';

const User = () => {
    let { id } = useParams();
    const userContext = useContext(UserContext);
    const [editClass, setEditClass] = useState('editUser');

    return (
        <>
        <h1>My account</h1>
        <img src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png' alt='User profile' width='100'/>

        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className={`form-control ${editClass}`} id="firstName" placeholder="First Name" name='first_name' defaultValue={userContext.first_name}/>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className={`form-control ${editClass}`} id="lastName" placeholder="First Name" name='last_name' defaultValue={userContext.last_name}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className={`form-control ${editClass}`} id="email" aria-describedby="emailHelp" placeholder="Enter email" name='email' defaultValue={userContext.email}/>
        </div>
        <div className="form-group">
            <label htmlFor="dateBirth">Date of birth</label>
            <input type="date" className={`form-control ${editClass}`} id="dateBirth" placeholder="Date of birth" name='date_of_birth' defaultValue={userContext.date_of_birth.toString()}/>
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name='gender' className={editClass} defaultValue={userContext.gender}>
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="address">Address Line 1</label>
            <input type="text" className={`form-control ${editClass}`} id="address" placeholder="Address" name='address' defaultValue={userContext.address}/>
        </div>

        <button onClick={() => setEditClass('')}>Edit</button>
        </>
    )
}

export default User;