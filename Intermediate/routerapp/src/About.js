import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate=useNavigate();
    function clickHandler(){
        navigate('/')
    }
  return (
    <div>
      <h2>about page</h2>
      <button onClick={clickHandler}>Home Page</button>
    </div>
  )
}
