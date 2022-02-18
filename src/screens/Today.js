import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Today = () => {
  const [categories, setCategories] = useState(null);
  const [todayTasks, setTodayTasks] = useState(null);

  const getAllCategoriesAndTodayTasks = async() => {
    let token = localStorage.getItem('token')
    await fetch('/dashboard', {
      method: "get",
      headers: {
        // eslint-disable-next-line no-eval
        "Authorization": `Bearer ` + token, 
      }
    }).then(response => {
      return response.json();
    }).then(data  => {
      setCategories(data.data.lists);
      setTodayTasks(data.data.today_tasks);
    })
   }

  useEffect(() => {
    getAllCategoriesAndTodayTasks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h1>Today Tasks</h1>

    {todayTasks && todayTasks.map(today => (
      <div key={'yes'}></div>
    ))}
    </div>
    
     <div>
      <h1>Lists:</h1>

      {categories && categories.map((cat) => (
      <Link to={`/categoryDetails/${cat.id}`} key={cat.id} >
        <div 
        style={{
          backgroundColor: cat.color, 
          width:'50%', 
          justifyContent:'center', 
          alignItems:'center', 
          marginLeft: '25%', 
          borderRadius: '12px', 
          padding:'12px', 
          marginTop:'3rem',
          marginBottom: '3rem'
        }}
        >
          <h2>{cat.name}</h2>
          <h5>Tasks: {cat.task_count}</h5>
        </div>
      </Link>
      ))}
    </div>
    </>
  );
};

export default Today;