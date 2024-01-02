import React, { useEffect } from 'react'
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';

const Blogs = () => {

  const {loading,posts,fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[])

  return (
    <div>
      {
        loading ? (<h2>Loading</h2>): (
          posts.length===0 ? (<h2>No posts</h2>):(
            <div>
              {
                posts.map((post)=>{
                  return(
                    <div key={post.id}>
                      <p className='title text-xl'>{post.title}</p>
                      <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                      <p>Posted on {post.date}</p>
                      <p>{post.content}</p>
                      <div>{post.tags.map((tag,index)=>{return(<span key={index}>{`#${tag}`}</span>)})}</div>
                    </div>
                  )           
                })
              }
            </div>
          )
        )
      }
    </div>
  )
}

export default Blogs
