import CalendarComponent from "./CalendarComponent";

export default function AddTaskPopUp() {
  return (
    <div className="rounded p-3 bg-white shadow " >
        <div className="bg-gray-100 w-full flex items-center  px-2 mb-2">
          <span className="w-5 h-5 rounded  border border-blue-500"></span><input className="px-4 py-2 outline-none w-[300px] md:w-[400px]" type="text" placeholder="Create a new task" />
        </div>
        <div className=" w-full flex items-center gap-1 px-2 border flex-col rounded border-gray-200">
          <div className="flex items-center  " >
          <span className="w-5 h-5 rounded  border border-blue-500"></span><input className="px-4 py-2 outline-none w-[300px] md:w-[400px]" type="text" placeholder="No Lists Selected..." />
          </div>
          <div className="w-full">
          <CalendarComponent/>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}
