import { useState } from "react";


const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e) =>{
  e.preventDefault();
    // console.log(title);
    // console.log(details);
    const copyTask = [...task];
    copyTask.push({title,details})
    // console.log(copyTask);
    setTask(copyTask);
    console.log(task);
    
    
    
    

    setTitle('');
    setDetails('');

    
  }
  const deleteNote = (idx) =>{
      const copyTask = [...task];
      copyTask.splice(idx,1)
      setTask(copyTask);
    }
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex  gap-4 lg:w-1/2 items-start flex-col p-10 ">
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* First Input For Heading */}
        <input
        type="text" 
        placeholder="Enter Notes Heading" 
        className="py-2 w-full px-5 border-2 rounded outline-none font-medium"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          
        }}
        />
        {/*  For Detailed Input */}
        <textarea 
        type="text"
        className="py-2 px-5 w-full  h-32 flex items-start flex-row border-2 rounded outline-none font-medium" 
        placeholder="Write Details Here" 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />
        <button className="bg-white text-black active:scale-95 w-full  px-5 py-2 rounded outline-none font-medium">Add Notes</button>
      
       </form>
       <div className=" p-10 lg:border-l-2 lg:w-1/2 ">
       <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-6 h-[50%] overflow-auto items-start justify-start">
          {task.map(function(elem,idx){

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/709/small_2x/sticky-note-paper-background-free-png.png')] text-black py-9 px-4 pb-5">
             
            <div>
                <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
                <p className="mt-4 leading-tight text-xs font-semibold text-gray-700">{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx);
            }}  className="w-full cursor-pointer active:scale-95 bg-red-600 text-white py-1 text-xs rounded font-bold ">Delete</button>
          </div>
          })}
        </div>
       </div>
    </div>
  )
}
export default App