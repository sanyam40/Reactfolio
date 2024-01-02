import React, { useEffect,useState } from "react";
import {apiUrl,filterData} from './data'
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from './components/Cards'
import {toast} from 'react-toastify'
import Spinner from './components/Spinner'

const App = () => {
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  useEffect(()=>{
    const fetchdata=async()=>{
      try {
        const res=await fetch(apiUrl);
        const data=await res.json();
        console.log(data.data);
        toast.success("Data loaded successfully");
        setCourses(data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchdata();
  },[])
  return(
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      {
        loading ? <Spinner/> : <Cards courses={courses} category={category}/>
      }
    </div>
  );
};

export { App};
