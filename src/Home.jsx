import React, { useEffect, useState } from 'react'
import { PiDotsThreeVertical} from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { FaRegSmile } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import Task from './Task';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const tasks=[
  {
    id:1,
    taskname:"completed Stage",
    level:25,
    icons:<FaRegCheckCircle color='rgba(75, 251, 114, 1)'/>
    
    
  },
  {
    id:2,
    taskname:"Remaining Stage",
    level:50,
    icons:<FaRegClock color='rgba(251, 120, 82, 1)'/>
  }
  ,
  {
    id:3,
    taskname:"Total Stages",
    icons: <FaRegSmile color='rgba(75, 251, 114, 1)' />,
    level:75,
  },
 
]
function Home() {
  const [stageName,setStageName]=useState("");
  const [submitted,setSubmitted]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(true);
    console.log("hi"+stageName)
  }
  const handleInput=(event)=>{
    setSubmitted(false);
    setStageName(event.target.value)
    console.log(stageName);

  }
  
  return (
    <div className='bg-[#eaf5fe]'>
    <div className='grid ml-6 mr-2 grid-cols-2  md:grid-cols-4 gap-10'>
      {tasks.map((task)=>(
      <div key={task.id} className='bg-white mt-2 border-2 rounded-2xl lg:w-60 details w-50 md:w-48 text-center  '>
        <div className=' ml-1 mr-1'>
         <span className='font-bold  text-text flex justify-between mt-2'>
            <span className='flex '>
            <h1 className=''>{task.taskname} </h1>
            <p className='mt-2 ml-2'>{task.icons}</p>
            </span>
            <PiDotsThreeVertical className='mt-2'/>
          </span>
          <h2 className='mt-2 font-bold  text-text text-2xl'>{task.level}</h2>
          <h2 className='text-s'>See Details {'>'}</h2>
       </div>
        
       </div>
       
      ))}     
      <div className='bg-white border-2  mt-2 lg:w-60 rounded-2xl  details w-40 md:w-48 text-center  '>
        <div className='ml-1 mr-1 mt-2'>
         <span className=' text-text font-bold text-center'>
            <h1 >Add ToDoList</h1>
          </span>
          <h2 className='mt-4 ml-16 sm:ml-20'>
          <Popover>
            <PopoverTrigger>
              <HiOutlinePlusCircle  className='cursor-pointer' size={25}/>
           </PopoverTrigger>
           <PopoverContent>
            <input type="text" onChange={(e)=>handleInput(e)} className='form-input  outline-none focus:border-[1px] focus:rounded focus-shadow rounded' placeholder='Enter the stage level' />
            <button className='pl-2' onClick={(e)=>handleSubmit(e)}>Add</button>
           </PopoverContent>
          </Popover>
            
            </h2>
          
       </div>
        
       </div>
       
  </div>
  <div className="flex justify-center items-center h-full">
           <Task submitted={submitted} stageName={stageName} />
       </div>

      
  </div>
  )
}

export default Home