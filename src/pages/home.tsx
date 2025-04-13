import { useState } from "react";
import SideBar from "../components/sideBar"
import { FiPlus } from "react-icons/fi";




export default function Home() {

  const [showPopUp, setShowPopUp] = useState(false);


  const task = [
    {
      name: 'Create a social media APP',
      time: '8.00 pm - 9.00 pm'
    },
    {
      name: 'Do jogging',
      time: '10.00 am -11.00 am'
    },
    {
      name: 'Go to work',
      time: '8.00 pm - 9.00 pm'
    },
    {
      name: 'Have a marriage function',
      time: '8.00 pm - 9.00 pm'
    }
  ]


  return (
    <div className="h-screen" >
      <div className="p-4 flex bg-gray-100 gap-5 h-full relative">
        <section className="w-[30%] " >
          <SideBar/>
        </section>
        <section className="flex flex-col w-[70%] px-10 py-8 gap-8">
          <div className="flex justify-between" >
            <div>
              <h1 className="text-3xl font-semibold mb-2">Good morning Abhijith !</h1>
              <p className="text-lg">Today 05 April 2025</p>
            </div>
            <div>
              <p className="text-lg" >Today</p>
            </div>
          </div>
          <div>
            {
              task.map((task, index) => {
                return (
                  <div key={index} className="bg-white px-4 py-2 mb-2 rounded flex justify-between items-center" >
                    <div className="flex gap-2" >
                      <input type="checkbox" className="w-5 h-5 rounded-md" name="" id="" />
                      <p className="text-sm font-semibold">{task.name}</p>
                    </div>
                    <div className="flex gap-2" >
                      <p className="text-sm font-medium px-2 py-1 rounded  bg-gray-100 " >{task.time}</p>
                      <button className="font-medium px-3 py-1 rounded  bg-gray-100 hover:cursor-pointer " >:</button>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </section>
        <div className="absolute bottom-5 bg-black rounded-full px-4 py-3 flex justify-between items-center w-[30%] left-1/2 transform -translate-x-1/2 hover:scale-105 transition hover:cursor-pointer">
          <div onClick={() => setShowPopUp(!showPopUp)} className="text-white flex gap-2 items-center ">
            <p className={`text-2xl transition-transform duration-300 ${showPopUp ? 'rotate-135' : 'rotate-0'}`} > 
              { <FiPlus />} 
            </p>
            <p>Create new Task</p>
          </div>
          <div className="text-white flex gap-2 items-center">
            <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >M</p>
            <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >N</p>
          </div>
        </div>
      </div>
    </div>
  )
}
