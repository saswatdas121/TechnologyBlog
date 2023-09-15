import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { URL } from '../url';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

function PostDetails() {

  useEffect(()=>
  {
     fetchDetails();
  },[])

  const [totalBlogs,setTotalBlogs]=useState();
  const fetchDetails=async()=>
  {
    const res=await axios.get(URL+'/blogs',{
      withCredentials:true
    })

    console.log(res.data)

    setTotalBlogs(res.data)

  }
  return (
    <div>
      <Navbar></Navbar>
      {
        totalBlogs && totalBlogs.map((data,i)=>
        {
          return <Posts key={i} data={data}></Posts>
        })
      }
  
    <Footer></Footer>
       
    </div>
  )
}

export default PostDetails
