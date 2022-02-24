import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom';

const NewAccount = () => {

    const [phone, setPhone] = useState<any>()

    return (
        <>
        <form>
        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder="First Name" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
        </div>
        <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="Address" />
        </div>
        <div className="form-group">
            <label htmlFor='phoneNumber'>Phone Number</label>
        </div>
        <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="PE"
            value={phone}
            onChange={setPhone}/>
        <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        <hr />
        <p>You already have an account? <Link to='/login'>Log In</Link></p>
        </>
    )
}

export default NewAccount;