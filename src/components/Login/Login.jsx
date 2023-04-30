import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In</h2>
            <form >
                <div className="from-control">
                    <label htmlFor=''>Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="from-control">
                    <label htmlFor=''>Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="login" />

            </form>
            <p><small>If you new ?<Link to="/signUp">SignUp</Link></small></p>
        </div>
    );
};

export default Login;