

import React, { useState } from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { Progress } from "@/components/ui/progress";

import virtual_assistant from "/virtual_assistant.webp";
const stages=[
    {
        id:1,
        progress:60,
        level:10
    },
    {
        id:2,
        progress:40,
        level:10
    },{
        id:3,
        progress:89,
        level:10
    },{
        id:4,
        progress:90,
        level:10
    },{
        id:5,
        progress:12,
        level:10
    },{
        id:6,
        progress:45,
        level:10
    },{
        id:7,
        progress:67,
        level:10
    },{
        id:8,
        progress:45,
        level:10
    },
    {
      id:9,
      progress:85,
      level:10
  },{
    id:10,
    progress:75,
    level:10
},{
  id:11,
  progress:45,
  level:10
},{
  id:12,
  progress:45,
  level:10
},{
  id:13,
  progress:75,
  level:10
},{
  id:14,
  progress:35,
  level:10
},{
  id:15,
  progress:45,
  level:10
}
]
function Task({submitted,stageName}) {
    
   
    var newDate = new Date();
  let dateTime = new Intl.DateTimeFormat("en-In", {
    dateStyle: "short",
    timeStyle: "short",
  });
  let curDate = dateTime.format(newDate); 
      
  return (
    <div className='h-full m-4 w-full  md:flex  justify-evenly'>
    <div className="w-full md:w-5/6   h-5/6 bg-white border-2 border-back rounded-lg shadow-md">
    <div className='relative '>
    <div className="text-xl  flex justify-between font-semibold text-gray-800">
        <div className='text-text ml-2 mt-2'>Stages</div>
        <span className='bg-four_squares mr-2 mt-2 items-center  rounded-full w-8 h-8'>
           <PiSquaresFour className=' mt-1.5 ml-1.5 '  color='rgba(45, 28, 100, 1)'/>
        </span>
        
    </div>
    <hr className='mt-3'/>
    </div>


  
    <div className=''>
        {stages.map((stage)=>(
            <div key={stage.id}>
                <div className=' flex justify-between m-5 -mb-5 sm:mr-1 font-normal  md:font-semibold '>
                <h1>Stage-{stage.id}</h1>
                <div>
                    <span className=' flex justify-between'>
                    <h1 className='sm:w-32 md:w-52 mb-1 '>Progress bar</h1>
                    <h1 className='text-progress ml-1 '>{stage.progress}%</h1>
                    </span>
                     <Progress value={stage.progress} className="w-[100%]" />
                
                </div>
                <h1 className='text-progress flex ml-2 mr-0'>View Details</h1>
                </div>
                
                
                <h1 className='m-5 mt-0 font-light'>Level-{stage.level}</h1>
            </div>
        ))}
    </div>
    </div>
    <div> 
      {/* side main compo */}
      <div className=" w-246  rounded md:shrink-0 ">
          {/* your last activity */}
          <div className="mt-2 sm:w-[330px] sm:ml-5 sm:pl-2 rounded-xl bg-white ml-2 mr-2">
            <span>
              <p className="pt-2 pl-2 text-primaryLight font-bold text-medium">
                My Tasks
              </p>
              <p className=" pl-2 text-xs text-slate-500 font-medium">
                {curDate}
              </p>
            </span>
            <div className="w-[250px] pt-2 pl-2">
              {submitted && <p className='text-gray-500 font-medium text-md'>  {stageName} </p>}
            </div>
            <button className="w-[270px] m-2 text-white h-[30px] bg-primaryLight">
              Resume
            </button>
          </div>
        </div>  
       <div className="mt-1 rounded-xl text-center sm:w-[330px] w-[380px] md:h-60 sm:ml-5 sm:pl-2 bg-white ml-2 mb-2 mr-2">
            <img
              src={virtual_assistant}
              className="h-[100px] w-[100px] ml-[90px]"
              alt="virtual assistant is not available"
            />
            <span>
              <p className="pt-2 pl-2 text-primaryLight text-center font-bold text-medium">
                Ask me anything
              </p>
              <p className=" pl-2 text-xs text-slate-500 font-medium">
                I am here to resolve your queries and doubts
              </p>
            </span>

            <button className="w-[250px] m-2 text-white h-[30px] bg-primaryLight">
              Start Converse
            </button>
          </div>
      </div>

    </div>
  
 
  )
  
}

export default Task
