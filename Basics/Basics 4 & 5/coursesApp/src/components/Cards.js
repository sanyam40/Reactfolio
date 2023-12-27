import React from 'react'
import Card from './Card'

export default function Cards({courses,category}) {
  
  const getCourses=()=>{
    if(category==="All"){
      let allCourses=[];
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        });
        return allCourses;
    }  
    return courses[category];
  }  
  
  return (
    <div>
    {
      getCourses().map((course)=>{
        return <Card key={course.id} course={course}/>
    })
    }
    </div>
  )
}
