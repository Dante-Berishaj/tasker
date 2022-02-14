import React,{useState} from 'react';
import { Link } from 'react-router-dom';

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
        localStorage.setItem('data', JSON.stringify(result))
        localStorage.setItem('token', JSON.stringify(result.data.token));
    }

    return (
        <div>
            <form >
                <div>
                    <h1>Login</h1>
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
                <button type='submit' onClick={loginHandler}>Login</button>
                <Link to='register'>
                    <button>Register</button>
                </Link>
            </form>
        </div>
      )
};

export default Login;
