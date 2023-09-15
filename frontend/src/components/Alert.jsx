import axios from 'axios';
import React from 'react'
import { URL } from '../url';
import {useNavigate} from 'react-router-dom';

function Alert({data,setDeleteBlog}) {

    const navigate=useNavigate();

    const handleDelete=async()=>
    {
        const res=await axios.delete(URL+'/delete/'+data,
        {
            withCredentials:true
        })

        navigate("/");
    }
  return (
   
    <div class="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm" aria-labelledby="header-1a content-1a" aria-modal="true" tabindex="-1" role="dialog">
      
      <div class="flex max-h-[90vh] w-11/12 max-w-2xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10" id="modal" role="document">
      
        <header id="header-1a" class="flex items-center gap-4">
          <h3 class="flex-1 text-xl font-medium text-slate-700">Do you want to delete the Blog?</h3>
          <button class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full focus-visible:outline-none justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent" aria-label="close dialog">
            <span class="relative only:-mx-5">
            <button onClick={()=>setDeleteBlog(false)}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-79 desc-79">
                <title id="title-79">Icon title</title>
                <desc id="desc-79">A more detailed description of the icon</desc>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg></button>
            </span>
          </button>
        </header>
        
        <div id="content-1a" class="flex-1 overflow-auto">
          <p>This Blog will be permanently deleted</p>
        </div>
        
        <div class="flex justify-start gap-2">
          <button class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <button onClick={handleDelete}>I Accept</button>
          </button>
          <button class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <button onClick={()=>setDeleteBlog(false)}>I Decline</button>
          </button>
        </div>
      </div>
    </div>
   
    
  )
}

export default Alert
