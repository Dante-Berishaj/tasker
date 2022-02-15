import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Today = () => {
  const [allTasks, setAllTasks] = useState(null)

  const getAllTasks = async() => {
    let token = localStorage.getItem('token')
    //console.log(token)
    await fetch('/tasks', {
      method: "get",
      headers: {
        // eslint-disable-next-line no-eval
        "Authorization": `Bearer ` + token, 
      }
    }).then(response => {
      return response.json();
    }).then(data  => {
      console.log(data.data)
      setAllTasks(data.data)
    })
    
   }

  useEffect(() => {
    getAllTasks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <h1>Today Tasks</h1>
    <div>
      <h1>All tasks</h1>
      {allTasks && allTasks.map((task) => (
        <Card key={task.id}>
          <h2>{task.name}</h2>
          <h3>{task.due_date}</h3>
          <h5>status: {task.completed === 1 ? "completed" : "not  completed"}</h5>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Today;
