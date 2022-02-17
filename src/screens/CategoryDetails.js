import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

import classes from './categoryDetails.module.css'

/*
/api/lists/{id}/tasks didnt let me process data even though i gave the 
bearer token in postman so I had to do it by filtering the tasks 
task_list_id property with the current lists id
*/
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Card key={task.id}>
            <h1>{task.name}</h1>
            <h5>{task.completed === 1 ? 'completed' : 'not complete'}</h5>
            {task.completed === 0 && <Button className={classes.btn}> Complete </Button>}
          </Card>
        ))
        }
      </div>
    </>
  );
};

export default CategoryDetails;