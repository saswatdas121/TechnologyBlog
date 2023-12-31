import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import {Routes,Route} from 'react-router-dom';
import './App.css'
import Register from './Pages/Register'
import BlogPage from './Pages/BlogPage'
import CreatePost from './Pages/CreatePost'
import Profile from './Pages/Profile'
import { UserContextProvider } from '../context/UserContext'
import UpdatePost from './Pages/UpdatePost'
import Alert from './components/Alert'
import TotalBlogs from './Pages/TotalBlogs'
import About from './Pages/About'

function App() {
  return (
    <div>
      <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/blogs/blog" element={<BlogPage/>}></Route>
        <Route exact path="/write" element={<CreatePost/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/blogs/:id" element={<BlogPage/>}/>
        <Route exact path="/blogs/update/:id" element={<UpdatePost/>}/>
        <Route exact path="/blogs" element={<TotalBlogs/>}/>
        <Route exact path="/about" element={<About/>}/>
        

      </Routes>
      </UserContextProvider>
      
    </div>
  )
}

export default App
