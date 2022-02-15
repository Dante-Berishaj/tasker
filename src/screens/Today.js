import React, { useEffect, useState } from 'react'

const Today = () => {
  const [allTasks, setAllTasks] = useState([]);


  const getAllTasks = async() => {
    let token = localStorage.getItem('token')
    console.log(token)
    const response = await fetch('/tasks', {
      method: "get",
      headers: {
        // eslint-disable-next-line no-eval
        "Authorization": `Bearer ` + token, 
      }
    }).then(response => {
      return response.json();
      
    })
    console.log(response.data);

  
   }

  useEffect(() => {

  }, []);

  return (
    <>
    <h1>Today Tasks</h1>

    <div>
      <h1>All tasks</h1>
      <button onClick={getAllTasks}>Token</button>
    </div>
    </>
  );
};

export default Today;
