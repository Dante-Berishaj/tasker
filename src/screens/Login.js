import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from './Login.module.css';

import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [token, setToken] = useState('')

    let history = useHistory()

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
        localStorage.setItem('data', JSON.stringify(result))
        let token = result.data.token;
        localStorage.setItem('token', token);
        history.push('/today');
        window.location.reload();
    }

    return (
    <div className={classes.main}>
        <div className={classes.main_container}>
            <form >
            <h1>Login</h1>
                <div className={classes.labInp_container}>
                    <label>
                        Email
                    </label>
                    <input 
                        className={classes.input}
                        value={email}
                        type='email'
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className={classes.labInp_container}>
                    <label>
                        Password
                    </label>
                    <input 
                        className={classes.input}
                        value={password}
                        type='password' 
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <Button 
                        className={classes.login_btn} 
                        type='submit' 
                        onClick={loginHandler}>
                        Login
                    </Button>
                    <div>
                        <Link to='register'>
                            <Button className={classes.register_btn}>Register</Button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
      )
};

export default Login;