import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>please sign up</h2>
            <form >
                <div className="from-control">
                    <label htmlFor=''>Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
            </form>
        </div>
    );
};

export default SignUp;