import React, { useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import BlogDetails from '../components/BlogDetails';

export default function BlogPage() {

  const {setLoading,loading}=useContext(AppContext);
  const newBaseUrl="https://codehelp-apis.vercel.app/api/"

  const [blog,setblog]=useState(null);
  const [related,setrelated]=useState([]);
  const navigation=useNavigate();
  const location=useLocation();

  const blogId=location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log(url);
    try {
      const res=await fetch(url);
      const data=await res.json();
      setblog(data.blog);
      setrelated(data.relatedBlogs);
    } catch (error) {
      console.log(error.message);
      setblog(null);
      setrelated([]);
    }
    setLoading(false);
  }

  React.useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])

  return (
    <div>
        <Header/>
        <div>
            <button onClick={()=>navigation(-1)}>Back</button>
        </div>
        {
          loading ? 
          (
            <div>
              <p>loading</p>
            </div>
          ):
          blog?
          (
            <div>
              <BlogDetails posts={blog} />
              <h2>Related Blogs</h2>
              {
                related.map((blog)=>{
                  <div key={blog.id}>
                    <BlogDetails post={blog}/>
                  </div>
                })
              }
            </div>
          ):(
            <div>
              <p>No Blog Found</p>
            </div>
          )
        }
    </div>
  )
}
