import React, { useState } from 'react'
import Card from './Card';
const Cards = ({ courses,catogery }) => {


  const[likedCourses, setLikedCourses] = useState([]);



  {/* get all the information from api */ }


  function getCourse(){
    if(catogery==="All"){
      let allCourses = [];
      Object.values(courses).forEach((courseCatogery) => {
        courseCatogery.forEach((course) => {
          allCourses.push(course);
        })
  
      })
      return allCourses;
      
    }
    else{
      //main sirf specific catogery ka data pss karunga
      return courses[catogery]
    }
  }
  // const getCourse = () => {
  //   Object.values(courses).forEach((courseCatogery) => {
  //     courseCatogery.forEach((course) => {
  //       allCourses.push(course);
  //     })

  //   })
  //   return allCourses;
  // }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>

      {
        getCourse().map((course) => {
          return <Card course={course}  key={course.id}

          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}

          
        />
           
        })
      }



    </div>
  )
}

export default Cards
