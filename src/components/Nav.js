import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {

    let token = localStorage.getItem('token')
    console.log(token)
    
    let content =  <ul>
    <h1>Tasker</h1>
    <li>
        <Link to='/Today'>Today</Link>
    </li>
    <li>
        <Link to='/newTask'>New Task</Link>
    </li>
    <li>
        <Link to='/newCategory'>New Category</Link>
    </li>
</ul>;

    if(!token){
        content = <ul>
            <h1>Tasker</h1>
        <li>
            <Link to='/'>Log in</Link>
        </li>
        </ul>
    }

  return (
    <div className={classes.nav}>
        {content}
    </div>
  )
};

export default Nav;
