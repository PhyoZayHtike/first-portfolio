import React from 'react'
import agriculture from '../assets/img1.png'
import snake from '../assets/img2.png'
import food from '../assets/img3.png'
import dream from '../assets/img4.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-2' id='projects'>
       <h1 className=' text-center font-bold text-4xl text-[#001b5e]'>Projects</h1>
       <p className='text-center py-8'>Welcome to my portfolio! Below are some of the projects I've worked on:</p>
       <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={agriculture} title='Burmese Agriculture App' info="https://burmese-agriculture.vercel.app"/>
        <ProjectItem img={snake} title='Snake App' info="https://snake-website.vercel.app/"/>
        <ProjectItem img={food} title='Food App' info="https://burmese-food.vercel.app"/>
        <ProjectItem img={dream} title='Dream App' info="https://dream-dictionary-lyart.vercel.app/"/>
       </div>
    </div>
  )
}

export default Projects