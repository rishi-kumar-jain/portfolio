import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'
const InfoBox = ({text, link , btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm-text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>

    </div>
)


const renderContent = {
    1:(
        <h1 className='w-[500px] sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hey, I am <span className='font-semibold'>Rishi</span>👨🏻‍💻
            <br />  A fresh face in the coding cosmos, eager to learn, grow, and contribute my zest for innovation to the tech world.
        </h1>
    ),
    2:(
       <InfoBox text="Persistent in my coding odyssey, I'm on a perpetual quest for knowledge and skill enhancement. Every line of code is a step forward in my evolving development narrative." 
       link="/about"
       btnText="Learn More"
       
       />
    ),
    3:(
        <InfoBox text="A versatile learner, I've mastered diverse technologies through hands-on projects, showcasing my adaptability and commitment to impactful solutions. Eager to bring this dynamic skill set to contribute effectively to your team"
       link="/projects"
       btnText="Visit my portfolio"
       
       />
    ),
    4:(
        <InfoBox text="Feel free to reach out—I'm ready to make a meaningful impact." 
       link="/contact"
       btnText="Let's Communicate"
       
       />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
