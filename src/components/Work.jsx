import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptate architecto inventore numquam est similique ducimus' 
    },
    {
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptate architecto inventore numquam est similique ducimus' 
    },
    {
        year: 2016,
        title: 'Facebook',
        duration: '1 Years',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptate architecto inventore numquam est similique ducimus' 
    },
    {
        year: 2014,
        title: 'Freelance',
        duration: '2 Years',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptate architecto inventore numquam est similique ducimus' 
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
         <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
         {data.map((item,idx) => (
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
         ))}
    </div>
  )
}

export default Work