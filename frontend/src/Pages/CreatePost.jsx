import {React,useContext,useState} from 'react'
import Navbar from '../components/Navbar';
import {ImCross} from 'react-icons/im'
import { URL } from '../url';
import { UserContext } from '../../context/UserContext';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import axios from 'axios'
import Footer from '../components/Footer';

function CreatePost() {

    const[title,setTitle]=useState();
    const[desc,setDesc]=useState();
    const [file,setFile]=useState();
    const [category,setCategory]=useState("");
    const [categoryArray,setCategoryArray]=useState([]);
    const navigate=useNavigate();

    const {user}=useContext(UserContext);

    const blogPost=async(e)=>
    {
      console.log(user);
      e.preventDefault();
      const post={
        title,
        desc,
        userName:user.firstName,
        userId:user._id,
        category:categoryArray
      }

      if(file){
        const data=new FormData()
        const filename=Date.now()+file.name
        data.append("img",filename)
        data.append("file",file)
        post.photo=filename
        // console.log(data)
        //img upload
        try{
          const imgUpload=await axios.post(URL+"/upload",data,{
            withCredentials:true
          })
          // console.log(imgUpload.data)
        }
        catch(err){
          console.log(err)
        }
      }
      console.log(post)
      try{
        const res=await axios.post(URL+"/create",post,{withCredentials:true})
        navigate("/")
        // console.log(res.data)

      }
      catch(err){
        console.log(err)
      }
    }

    function addCategory()
    {
       let temp=[...categoryArray];
       temp.push(category);
       setCategory("");
       setCategoryArray(temp)
    }

    function deleteCategory(i)
    {
        let temp=[];
        for(let j=0;j<categoryArray.length;j++)
        {
            if(j!=i)
            {
                temp.push(categoryArray[j]);
            }
        }
        setCategoryArray(temp);
    }
  return (
    <div>
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl ' style={{textAlign:'center'}}>Create you own Blog</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4' method='POST' onSubmit={blogPost}>
          <input value={title} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none' style={{border:'2px solid black'}} onChange={(e)=>setTitle(e.target.value)}/>
          <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4'/>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
                <input value={category} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text" style={{border:'2px solid black'}} onChange={(e)=>setCategory(e.target.value)}/>
                <div onClick={addCategory}className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
            </div>

            {/* categories */}
            <div className='flex px-4 mt-3'>
             {categoryArray.map((cat,i)=>(
               <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
             <p>{cat}</p>
             <p onClick={()=>deleteCategory(i)}className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
           </div>))}
               
            </div>
            
            
            
            </div>
         
            <div class="relative">
  <textarea value={desc} id="id-b02" type="text" name="id-b02" rows="3" placeholder="Write your message" class="relative w-full px-4 py-2 text-sm placeholder-transparent transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-neutral-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" style={{border:'2px solid black'}} onChange={(e)=>setDesc(e.target.value)}></textarea>
  <label for="id-b02" class="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-neutral-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
    Write your content
  </label>
</div>
          <button className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
        </form>
     </div>
        <Footer></Footer>
    </div>
  )
}

export default CreatePost
