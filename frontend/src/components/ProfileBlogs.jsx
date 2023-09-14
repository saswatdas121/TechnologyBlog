import React from 'react'
import {Link} from 'react-router-dom'
import { URL } from '../url'

function ProfileBlogs({data}) {
  return (
    <>
     <div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200" style={{width:'300px'}}>
  
  <figure>
    <img src="https://picsum.photos/id/1081/800/600" alt="card image" class="aspect-video w-full" />
  </figure>
  
  <div class="p-6">
    <header class="flex gap-4 mb-4">
      <a href="#" class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
        <img src="https://i.pravatar.cc/48?img=25" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
      </a>
      <div>
        <h3 class="text-xl font-medium text-slate-700">{data.title}</h3>
        <p class="text-sm text-slate-400"> {data.userName}</p>
      </div>
    </header>
    <p>
      {data.desc.slice(0,200)+'.....'}
    </p>
  </div>
  
  <div class="flex justify-end gap-2 p-2 pt-0">
    <Link to={`/blogs/${data._id}`} class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-neutral-500 hover:bg-neutral-100 hover:text-neutral-600 focus:bg-neutral-200 focus:text-neutral-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-neutral-300 disabled:shadow-none disabled:hover:bg-transparent">
      <span>Read more</span>
    </Link>
  </div>
  </div>
</>
  )
}

export default ProfileBlogs
