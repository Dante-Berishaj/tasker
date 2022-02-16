/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const CategoryDetails = (props) => {
  const catId = props.match.params.catId;

  const [currentCategory, setCurrentCategory] = useState([]);
  const [tasks, setTasks] = useState([]);

  const getCurrentCategory = async() => {
    let token = localStorage.getItem('token')
    await fetch(`/lists/${catId}`, {
      method: "get",
      headers: {
        "Authorization": `Bearer ` + token, 
      }
    }).then(response => {
      return response.json();
    }).then(data  => {
      const categoryArr = data.data
      setCurrentCategory(categoryArr)
    })
   };

   const getTasks = async() => {
    let token = localStorage.getItem('token')
    await fetch('/tasks', {
      method: "get",
      headers: {
        "Authorization": `Bearer ` + token, 
      }
    }).then(response => {
      return response.json();
    }).then(data  => {
      const TasksArr = data.data;
      setTasks(TasksArr);
    })
   }


  useEffect(() => {
    getCurrentCategory();
    getTasks()
  }, []);

  let catTasks = tasks;

  console.log(catTasks)

  let currTasks = catTasks.filter(task => {
    // eslint-disable-next-line eqeqeq
    return task.task_list_id == catId
  })

  console.log(currTasks)

  return (
    <>
      <div 
        style={{
          background: currentCategory.color,
          width: '100%',
          height: '100%'
        }}
      >
        <h1>{currentCategory.name}</h1>
        <h5>Tasks: {currentCategory.task_count}</h5>
        {currTasks && currTasks.map(task => (
          <div key={task.id}>
            {task.name}
          </div>
        ))
        }
      </div>
    </>
  );
};

export default CategoryDetails;