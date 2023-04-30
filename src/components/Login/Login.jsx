import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please sign In</h2>
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
        </div>
    );
};

export default Login;