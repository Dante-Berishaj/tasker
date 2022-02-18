import React, { useState, useEffect } from 'react'
import Button from '../components/Button'

const NewTask = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState(null);

  const getCategories = async() => {
    let token = localStorage.getItem('token')
    await fetch('/lists', {
      method: "get",
      headers: {
        // eslint-disable-next-line no-eval
        "Authorization": `Bearer ` + token, 
      }
    }).then(response => {
      return response.json();
    }).then(data  => {
      setCategories(data.data);
    })
   }
  
   useEffect(() => {
    getCategories()
   }, [])

  const NewTask = async() => {
    let currDate = date.replace('T', ' ') 
    const data = {name, task_list_id: category, due_date: currDate }
    let token = localStorage.getItem('token');
    let result = await fetch('/tasks', {
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
    <>
      <h1>New Task</h1>
      <div>
        <form>
          <input placeholder='name' onChange={(event) => setName(event.target.value)} />
          <div>
           Category: <select onChange={(event) => setCategory(event.target.value)} placeholder='category'>
              <option>Select Category</option>
              {categories && categories.map(cat => (
                <option value={cat.id} key={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <input placeholder='date' type="datetime-local" step="2" onChange={(event) => setDate(event.target.value)} />
          </div>
          <div>
            <Button onClick={NewTask}>Add New Task</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewTask
