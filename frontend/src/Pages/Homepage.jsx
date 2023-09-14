import React,{useEffect,useState} from "react";
import Reviews from "../components/Reviews.jsx";
import indeximage from "../components/index.png";
import Posts from "../components/Posts.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
import { URL } from "../url.js";
import Spinner from "../components/Spinner.jsx";



function Homepage() {

  const [homePosts,setHomePosts]=useState();
  const [loading,setLoading]=useState(false);

  useEffect(()=>
  {
     setLoading(true);

     setTimeout(()=>
     {
        fetchPosts();
     },2000)
     
  },[])

  const fetchPosts=async()=>
  {
      try
      {
           const res=await axios.get(URL+'/allPosts',{
            withCredentials:true
           })

           console.log(res.data);

           setLoading(false);
           setHomePosts(res.data);
      }
      catch(error)
      {
         console.log(error+"ssss");
      }
  }
  return (
    <div>
      <Navbar></Navbar>
      <div
        class="flex heading justify-between items-center"
        style={{ marginLeft: "30px" }}
      >
        <div>
          <div class="heading" style={{ padding: "10px" }}>
            Trending IT Domains<div>which will blow your minds</div>
          </div>
          <div class="content">
            Explore Trending technologies,AI,Machine Learning,
            <br />
            Deep Learning,Blockchain and much more..
          </div>
        </div>
        <div class="image-container">
          <img
            src={indeximage}
            alt=""
            style={{ height: "500px", width: "600px" }}
          />
        </div>
      </div>

      {/* {Latest Section} */}
      <div className="text-2xl" style={{marginTop:'60px'}}>
        <div style={{textAlign:'center',fontWeight:'bolder'}}>Our Latest Blogs-</div>
        <div className="px-8 px-[200px]">
          {
             loading?(<div ><Spinner/></div>):(homePosts?(
              homePosts.map((data)=>
              {
                 return <Posts data={data}></Posts>
              })
             ):<div></div>)
           }
        </div>
      </div>

      {/* {Reviews Section} */}
      <div className="text-2xl" style={{marginTop:'60px'}}>
        <div style={{textAlign:'center',fontWeight:'bolder'}}>Read our Latest Reviews:</div>
        <div>
          <Reviews />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
