/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const CategoryDetails = (props) => {

  const catId = props.match.params.catId;

  const [currentCategory, setCurrentCategory] = useState([]);

  const getCurrentCategory = async() => {
    let token = localStorage.getItem('token')
    await fetch(`/lists/${catId}`, {
      method: "get",
      headers: {
        // eslint-disable-next-line no-eval
        "Authorization": `Bearer ` + token, 
      }
    }).then(response => {
      return response.json();
    }).then(data  => {
      let categoryArr = data.data
      setCurrentCategory(categoryArr)
    })
   };


  useEffect(() => {
    getCurrentCategory();
  }, []);

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
      </div>
    </>
  );
};

export default CategoryDetails;