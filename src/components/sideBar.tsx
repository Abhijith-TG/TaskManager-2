
export default function SideBar() {
  return (
    <div className="p-8 rounded-lg bg-white h-full" >
      <div>
        <p className="text-3xl font-semibold" >Private</p>
      </div>
      <div className="mt-5 flex justify-between items-center bg-gray-100 px-3 py-2 rounded" >
        <div className=" flex gap-2 items-center">
        <div className="border-red-400 w-5 h-5 border rounded bg-white" >
        </div>
        <p>Home</p>
        </div>
        <div>
          10
        </div>
      </div>
    </div>
  )
}
