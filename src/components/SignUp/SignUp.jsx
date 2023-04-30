import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>please sign up</h2>
            <form >
                <div className="from-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="from-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="login" />
            </form>
        </div>
    );
};

export default SignUp;