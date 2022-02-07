import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

import { Routes, Route, Link } from "react-router-dom"
import Home from './Home';


function App() {
  const [blogData,setBlogData] = useState([])
  const getBlogs = async () => {
    try {
        await axios.get("https://y2tbackend.herokuapp.com/api/blogs/")
        .then(resp=>{
            console.log("blog resp",resp)
            setBlogData(resp.data)
        })
        .catch(error=>console.log(error))
        
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {

  getBlogs()
}, [])
  return (
    <div className="App">
      <j4>lkj</j4>
      Hi
      {
       blogData.map(blog=>(
         <>
          <h2 className="blog-post-title">
                                        {blog.title}
                                    </h2>
         </>
       )) 
      }
       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/dashboard' element={Home} />
      </Routes>
     
    </div>
  );
}


export default App;
