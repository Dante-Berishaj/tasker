import React, { useState } from 'react';
import classes from './Register.module.css'

import Button from '../components/Button';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registrationHandler = async(event) => {
        event.preventDefault();

        const result = await fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                password_confirmation: confirmPassword,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const response = await result.json();
        console.log(response);
    };

  return (
    <>
        <h1>Register</h1>
        <form onSubmit={registrationHandler}>
            <div>
                <label>
                    Email
                </label>
                <input 
                    type='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label>
                    Password
                </label>
                <input 
                    type='password' 
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
            </div>
            <div>
                <label>
                    Confirm Password
                </label>
                <input 
                    type='password' 
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />
            </div>
            <Button className={classes.register_btn} type='submit'>Register</Button>
        </form>
    </>
  )
};

export default Register;
