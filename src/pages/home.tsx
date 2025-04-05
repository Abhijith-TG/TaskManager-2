



export default function Home() {


  const task = [
    {
      name:'Create a social media APP',
      time:'8.00 pm - 9.00 pm'
    },
    {
      name:'Create a social media APP',
      time:'8.00 pm - 9.00 pm'
    },
    {
      name:'Create a social media APP',
      time:'8.00 pm - 9.00 pm'
    },
    {
      name:'Create a social media APP',
      time:'8.00 pm - 9.00 pm'
    }
  ]


  return (
    <div className="" >
      <div className="p-4 flex bg-gray-100 gap-5">
        <section className="w-[30%] bg-white" >

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
            task.map((task,index)=>{
              return (
            <div key={index} className="bg-white px-4 py-2 mb-2 rounded flex justify-between items-center" >
              <p className="text-sm font-semibold">{task.name}</p>
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
      </div>
    </div>
  )
}
