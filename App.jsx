import React, { useState } from 'react'

const App = () => {
  
  const [title,setTitle]=useState('')
  const[detail,setDetail]=useState('')

  const [task,setTask]=useState([])

  const submitHandler =(e)=>{
    e.preventDefault()

    const copyTask=[...task]
    copyTask.push({title,detail})
    
    setTask(copyTask)


    console.log(title)
    console.log(detail);
    

    setTitle('')
    setDetail('')
  }


  const deleteNote=(idx)=>{
    const copyTask = [...task]
     
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form onSubmit={(e)=>{submitHandler(e)}} className=' p-6 flex lg:w-1/2 items-start gap-4 flex-col '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input type="text" placeholder='Enter Task Heading' value={title} onChange={(e)=>{ setTitle(e.target.value);
        }} className=' font-medium  px-5 outline-none w-full py-2 border-2 rounded ' />

        <textarea type="text" placeholder='Enter Details' value={detail} onChange={(e)=>{setDetail(e.target.value)}} className=' font-medium flex items-start flex-row px-5 h-32 w-full outline-none py-2 border-2 rounded '/>

        <button className=' bg-white active:scale-95 font-medium text-black px-5 py-2 rounded outline-none w-full hover:bg-red-400'>Add Notes</button>

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>

      <h1 className='text-3xl font-bold'>Recent Notes</h1>

        <div className='flex gap-5 items-start justify-start  flex-wrap mt-5 overflow-auto h-[90%] '>

          {task.map(function(elem,idx){

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-50 text-black py-6 px-6 w-42 rounded-2xl bg-cover bg-white bg-[url('https://i.pinimg.com/236x/1b/e3/b9/1be3b9250b40f11599f72c35f339bfc7.jpg')]">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-5 leading-tight font-medium text-red-400'>{elem.detail}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className='w-full bg-red-400 cursor-pointer active:scale-95 text-white text-xs py-1 rounded font-bold'> Delete</button>
            </div>  
          })} 

        </div>

      </div>

    </div> 
  )
}

export default App
