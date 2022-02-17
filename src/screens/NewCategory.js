import React, { useState } from 'react';
import Button from '../components/Button';
import axios from 'axios';

const NewCategory = () => {

  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const AddNewCategory = (event) => {
    event.preventDefault();
    const data = {name, color};
    
    fetch('/lists')
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
