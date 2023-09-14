import React, { useContext, useEffect, useState } from 'react'
import ProfileBlogs from '../components/ProfileBlogs'
import Navbar from '../components/Navbar'
import { UserContext } from '../../context/UserContext'
import axios from 'axios';
import { URL } from '../url';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';


function Profile() {

  const {user}=useContext(UserContext);
  const [blogs,setBlogs]=useState()
  const [loading,setLoading]=useState()

  useEffect(()=>
  {
    getUserBlogs();

  },[user])

  const getUserBlogs=async()=>
  {
    try
    {
     
        const totalBlogs=await axios.get(URL+`/profile/${user._id}`);

        console.log(totalBlogs);
 
        setBlogs(totalBlogs.data)
     
       
    }
    catch(error)
    {
      console.log(error);
    }
  }

  return (
    <>
    <Navbar></Navbar>
    {!user?<Spinner></Spinner>:(
    <div>
   <h1 style={{textAlign:'center',fontWeight:'bolder',fontSize:'30px'}}>Your Profile</h1>
   <div>
    <div>
      <img src="" alt="" />
    </div>
    <div style={{textAlign:'center',fontWeight:'bolder'}}>
      {user?user.firstName+" "+user.lastName:""}
    </div>
    <div style={{textAlign:'center',fontWeight:'bolder'}}>
      {user?user.email:""}
    </div>
   </div>
    <div>
        <div style={{fontSize:'20px',fontWeight:'bolder',textAlign:'center',marginTop:'20px'}}>Your Blogs:-</div>
      <div class="container m-auto grid grid-cols-3">
       {
             loading?(<div ><Spinner/></div>):(blogs?(
              blogs.map((data)=>
              {
                 return <ProfileBlogs data={data}></ProfileBlogs>
              })
             ):<div></div>)
           }
    </div>
    </div>
    </div>)}

    <Footer></Footer>
    </>
  )
}

export default Profile
