import React,{useState,useEffect} from 'react'
import indeximage from '../components/index.png';
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import NavBar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';
import Spinner from '../components/Spinner';


function BlogPage() {
  
  const postId=useParams().id;

  const [blog,setBlog]=useState();

  useEffect(()=>
  {
     fetchPosts();
  },[])

  const fetchPosts=async()=>
  {
      try
      {
         const res=await axios.get(URL+`/blogs/${postId}`,
         {
          withCredentials:true
         });

         console.log(res.data[0])
         setBlog(res.data[0]);
      }
      catch(error)
      {
         console.log(error);
      }
  }
  return (
    <>
    <NavBar/>
    {!blog?<Spinner/>:(
    <div>
        <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl">{blog.title}</h1>
         <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer"><BiEdit/></p>
            <p className="cursor-pointer"><MdDelete/></p>
         </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p style={{fontSize:'20px'}}>@{blog.userName}</p>
       <div className="flex space-x-2">
       <p>{new Date(blog.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(blog.updatedAt).toString().slice(16,24)}</p>
       </div>
        </div>
        <img src={indeximage} className="w-full  mx-auto mt-8" alt=""/>
         <p className="mx-auto mt-8">{blog.desc}</p>
         <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
          {blog.categories?.map((c,i)=>(
            <>
            <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
            </>
            
          ))}
          </div>
         </div>
         <div className="flex flex-col mt-4">
         <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
           
         </div>
         {/* write a comment */}
         <div className="w-full flex flex-col mt-4 md:flex-row">
          <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
          <button  className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>
         </div>
        </div>
    )}
       
        </>

  )
}

export default BlogPage
