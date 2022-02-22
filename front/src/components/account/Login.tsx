import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Keep Log in</label>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        </form>
        <hr />
        <p>New to this page? <Link to='/new-account'>Sign Up</Link></p>
        </>
    )
}

export default Login;