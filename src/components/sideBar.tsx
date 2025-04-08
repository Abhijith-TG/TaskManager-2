
export default function SideBar() {
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
        <div className="t flex gap-2 items-center">
          <p className="text-2xl" >+</p>
          <p>Create new List</p>
        </div>
        <div className="text-white flex gap-2 items-center">
          <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >M</p>
          <p className="w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center" >N</p>
        </div>
      </div>
      <div className="mt-5" >
        <p className="text-3xl font-semibold" >Groups</p>
      </div>
      <div className=" mt-5 bg-gray-200 rounded-full px-4 py-2 flex justify-between items-center  hover:scale-105 transition hover:cursor-pointer">
        <div className="t flex gap-2 items-center">
          <p className="text-2xl" >+</p>
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
