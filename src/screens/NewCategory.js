import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import classes from './NewCategory.module.css'

const NewCategory = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const history = useHistory()

  const Colors = [
    {
      id: 'e1',
      title: 'Blue',
      value: '#2BB4EB'
    },
    { id: 'e2', 
      title: 'Red',
      value:'#EB2B2B'
    },
    {
      id: 'e3',
      title: 'Green',
      value: '#60F297 '
    },
    {
      id: 'e4',
      title: 'Purple',
      value: '#D505BC'
    },
]

  const AddNewCategory = async(event) => {
    event.preventDefault();
    const data = {name, color};
    let token = localStorage.getItem('token');
    //console.log(token)
    let result = await fetch('/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": `Bearer ` + token,
      },
      body: JSON.stringify(data)
    })
    result = await result.json()
    console.log(result);
    history.push('/Today')
  }

  return (
    <div className={classes.main}>
      <div className={classes.main_container}>
        <h1>NewCategory</h1>
      <form>
        <input className={classes.input} placeholder='name' onChange={event => setName(event.target.value)} /> 
        <div>
          <div>
           <select onChange={(event) => setColor(event.target.value)} >
              <option>Select Color</option>
              {Colors && Colors.map(col => (
                <option value={col.value} key={col.id}>{col.title}</option>
              ))}
            </select>
            </div>
        </div>
      </form>
      <Button className={classes.btn} onClick={AddNewCategory}>Add New Category</Button>
      </div>
    </div>
  )
}

export default NewCategory
