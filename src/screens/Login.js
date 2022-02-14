import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';

import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [token, setToken] = useState('')

    const loginHandler = async(event) => {
        event.preventDefault();
        
        let data = {email, password};

        let result = await fetch("/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        result = await result.json()
        let token = JSON.stringify(JSON.stringify(result.data.token))
        localStorage.setItem('data', JSON.stringify(result))
        localStorage.setItem('token', token);
    }

    return (
        <div>
            <form >
            <h1>Login</h1>
                <div>
                    
                    <label>
                        Email
                    </label>
                    <input 
                        value={email}
                        type='email'
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Password
                    </label>
                    <input 
                        value={password}
                        type='password' 
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div className={classes.btn_group}>
                <Button className={classes.login_btn} type='submit' onClick={loginHandler}>Login</Button>
                <Link to='register'>
                    <Button className={classes.register_btn}>Register</Button>
                </Link>
                </div>
            </form>
        </div>
      )
};

export default Login;
