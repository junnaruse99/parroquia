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
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
            <label htmlFor="Address">Address</label>
            <input type="text" className="form-control" id="Address" placeholder="Address" />
        </div>
        <PhoneInput
            international
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