import React from 'react'
import indeximage from './index.png'
import {Link} from 'react-router-dom'
import { IF } from '../url'

function Posts({data}) {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={IF+data.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      {data.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>{data.userId.firstName+" "+data.userId.lastName}</p>
       <div className="flex space-x-2 text-sm">
       <p>{new Date(data.updatedAt).toString().slice(0,16)}</p>
       <p>{new Date(data.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">{data.desc.slice(0,250)}</p>
      
<Link to={`/blogs/${data._id}`}  class="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none" style={{width:'100px',backgroundColor:'white',color:'black',border:'2px solid black',marginTop:'10px'}}>
  <span>Read More</span>
</Link>

    </div>

    </div>
  )
}

export default Posts
