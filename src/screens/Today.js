import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import Card from '../components/Card';

const Today = () => {
  const [categories, setCategories] = useState(null);
  const [todayTasks, setTodayTasks] = useState(null);
  const [showCat, setShowCat] = useState(false);
  const [showToday, setShowToday] = useState(true);

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
      console.log(data.data.lists)
      setCategories(data.data.lists);
      setTodayTasks(data.data.today_tasks);
    })
   }

  useEffect(() => {
    getAllCategoriesAndTodayTasks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const renderCategoriesHandler = () => {
     setShowCat(true);
     setShowToday(false)
   }

   const renderTodayHandler = () => {
     setShowCat(false);
     setShowToday(true)
   }

  return (
    <>
    {showToday && <div><h1>Today Tasks</h1>
    <Button onClick={renderCategoriesHandler}>Show Categories</Button>
    {todayTasks && todayTasks.map(today => (
      <div></div>
    ))}
    </div>
    }
    {showCat && <div>
      <h1>All Categories</h1>
      <Button onClick={renderTodayHandler}>Show Today List</Button>
      <form>
        <input placeholder='name' />
      </form>
      {categories && categories.map((cat) => (
        <div 
        key={cat.id} 
        style={{backgroundColor: cat.color, 
        width:'50%', 
        justifyContent:'center', 
        alignItems:'center', 
        marginLeft: '25%', 
        borderRadius: '12px', 
        padding:'12px', 
        marginTop:'3rem'
        }}
        >
          <h2>{cat.name}</h2>
          <h5>status: {cat.completed ? "completed" : "not  completed"}</h5>
        </div>
      ))}
    </div>}
    </>
  );
};

export default Today;
