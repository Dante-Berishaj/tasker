import React, { useState } from 'react';
import classes from './Register.module.css'

import Button from '../components/Button';
import logo from '../logo.png'

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
    <div className={classes.main}>
        <div className={classes.main_container}>
        <img className={classes.img} src={logo} alt="Logo" />
        <form onSubmit={registrationHandler}>
            <div className={classes.labInp_container}>
                <label>
                    Email
                </label>
                <input 
                    className={classes.input}
                    type='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
            </div>
            <div className={classes.labInp_container}>
                <label>
                    Password
                </label>
                <input 
                    className={classes.input}
                    type='password' 
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
            </div>
            <div className={classes.labInp_container}>
                <label>
                    Confirm Password
                </label>
                <input 
                className={classes.input}
                    type='password' 
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />
            </div>
            <Button className={classes.register_btn} type='submit'>Register</Button>
        </form>
        </div>
    </div>
  )
};

export default Register;
