import React, { useState } from 'react';
import Button from '../components/Button';

const NewCategory = () => {

  const [name, setName] = useState('');
  const [color, setColor] = useState('');

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
    console.log(result)
  }

  return (
    <div>
      NewCategory
      <form>
        <input placeholder='name' onChange={event => setName(event.target.value)} /> 
        <div>
        <input placeholder='color' onChange={event => setColor(event.target.value)} />
        </div>
      </form>
      <Button onClick={AddNewCategory}>Add New Category</Button>
    </div>
  )
}

export default NewCategory
