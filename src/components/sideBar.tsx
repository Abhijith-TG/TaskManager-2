import { FiPlus } from "react-icons/fi";
import { useState } from "react";



export default function SideBar() {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className=" p-8 rounded-lg bg-white h-full" >
      <div>
        <div>
          <p className="text-3xl font-semibold" >Private</p>
        </div>
        <div className="mt-5 flex justify-between items-center bg-gray-200 px-3 py-2 rounded" >
          <div className=" flex gap-2 items-center">
            <div className="border-red-400 w-5 h-5 border rounded bg-white" >
            </div>
            <p>Home</p>
          </div>
          <div>
            10
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center bg-gray- px-3 py-2 rounded" >
          <div className=" flex gap-2 items-center">
            <div className="border-yellow-400 w-5 h-5 border rounded bg-white" >
            </div>
            <p>Test</p>
          </div>
          <div>
            10
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center bg-gray- px-3 py-2 rounded" >
          <div className=" flex gap-2 items-center">
            <div className="border-blue-400 w-5 h-5 border rounded bg-white" >
            </div>
            <p>fun</p>
          </div>
          <div>
            10
          </div>
        </div>
      </div>
      <div className=" mt-5 bg-gray-200 rounded-full px-4 py-2 flex justify-between items-center  hover:scale-105 transition hover:cursor-pointer">
        <div className="t flex gap-2 items-center" onClick={() => setShowPopUp(!showPopUp)} >
          <p className={`text-2xl transition-transform duration-300 ${showPopUp ? 'rotate-135' : 'rotate-0'}`} >
            {<FiPlus />}
          </p>
          <p>Create new List</p>
        </div>
        <div className="text-white flex gap-2 items-center">
          <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >M</p>
          <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >N</p>
        </div>
      </div>
      <div className="my-5 " >
        <p className="text-3xl font-semibold" >Groups</p>

      </div>
      <div className="grid-cols-2" >
        <div className="grid grid-cols-3 " >
          <div className="">
            <div className="w-30 rounded bg-red-200 h-30">

            </div>
            <div>
              <h1 className=" font-semibold text-lg">Project desc</h1>
              <p className="text-gray-500">5 people</p>
            </div>
          </div>
          <div className="">
            <div className="w-30 rounded bg-blue-200 h-30">

            </div>
            <div>
              <h1 className="font-semibold text-lg">Test</h1>
              <p className="text-gray-500">4 people</p>
            </div>
          </div>
        </div>

      </div>
      <div className=" mt-5 bg-gray-200 rounded-full px-4 py-2 flex justify-between items-center  hover:scale-105 transition hover:cursor-pointer">
        <div className="t flex gap-2 items-center" onClick={() => setShowPopUp(!showPopUp)} >
          <p className={`text-2xl transition-transform duration-300 ${showPopUp ? 'rotate-135' : 'rotate-0'}`} >
            {<FiPlus />}
          </p>
          <p>Create new Group</p>
        </div>
        <div className="text-white flex gap-2 items-center">
          <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >M</p>
          <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >N</p>
        </div>
      </div>
    </div>
  )
}
