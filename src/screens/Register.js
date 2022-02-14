import  Axios  from 'axios';
import React, { useState } from 'react';
import classes from './Register.module.css'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitRegistrationHandler = async(event) => {
        event.preventDefault();

        Axios.post('https://tasker.zombiesoup.co/api/auth/register', {
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }).then(response => {
            console.log(response.data.data.token)
        })
    };

  return (
    <div className={classes.form}>
        <form onSubmit={submitRegistrationHandler}>
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
            <button type='submit'>Register</button>
        </form>
    </div>
  )
};

export default Register;
