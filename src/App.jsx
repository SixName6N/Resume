import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import ProfileImage from './components/Profile/ProfileImage'

function App() {
  const [count, setCount] = useState(0)
  const [name, SetName] = useState("Phromamorn Phongprasroed")

  const user = {
    fname: "Phromamorn",
    lname: "Phongprasroed",
    imgPic: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
  }

  return (
      <div>
        <Navbar/>
      <div className="bg-hero ">
        <div className="container ">
          <Hero/>
          <ProfileImage/>
        </div>
      </div>

      <div className="bg-about">
        <div className="container">
          <About/>
        </div>
      </div>

      <div className="bg-skills">
        <div className="container">
          <Skills/>
        </div>
      </div>
      
      <div className="bg-project">
        <div className="container">
          {/* <Project/> */}
        </div>
      </div>

        
      
        {/* <Skills/> */}
        {/* <h1 style={{border:'solid 1px black', textAlign:'center', width:'400px'}}>Test React JS</h1>
        <p>{name}</p>
        <img src={user.imgPic} width="500px" alt="" />
        <MyButton/> */}
      </div>
  )
    
}
export default App