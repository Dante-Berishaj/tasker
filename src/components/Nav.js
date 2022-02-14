import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <div className={classes.nav}>
        <ul>
            <h1>Tasker</h1>
            <li>
                <Link to='/'>Log in</Link>
            </li>
            <li>
                <Link to='/Today'>Today</Link>
            </li>
            <li>
                <Link to='/categoryDetails'>Category Details</Link>
            </li>
            <li>
                <Link to='/newTask'>New Task</Link>
            </li>
            <li>
                <Link to='/newCategory'>New Category</Link>
            </li>
        </ul>
    </div>
  )
};

export default Nav;
