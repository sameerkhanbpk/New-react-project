import { useState,useCallback ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [useNumber,setNumner]=useState(false)
  const [chacter,setCharchter]=useState(false)
  const [password,setPassword]=useState()
  
const passwordGenerator = useState(()=>{
let pass ='';
let str = 'ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz'
if (useNumber){
  str += '0123456789'
}
if(chacter){
  str += '!@#$%^&*()'
}
for (let i=1;i<=length;i++){
  let char = Math.floor(Math.random()*str.length + 1)
  pass = str.charAt(char)
}
setPassword(pass)
},[length,chacter,useNumber.setPassword])

 useEffect(()=>{
  passwordGenerator
 },[length,useNumber,chacter,setPassword])

 return(

  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <input type="text" id="search" value={password} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" readOnly />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">copy</button>

 <div>
 <div className='flex text-sm gap-x-2'>
   <div className='flex items-center gap-x-1'>
     <input 
     type="range"
     min={6}
     max={100}

      className='cursor-pointer'
     value={length}   
      onChange={(e)=>{setLength(e.target.value)}}
       />
       <label>Length:{length}</label>
   </div>
   <div className="flex items-center gap-x-1">
   <input
defaultChecked ={useNumber}
       type="checkbox"
       id="numberInput"
       onChange={(e)=>{setNumner((prev) => !prev);}}
      
   />
   <label htmlFor="numberInput">Numbers</label>
   </div>
   <div className="flex items-center gap-x-1">
       <input
           type="checkbox"
           defaultChecked={chacter}
           id="characterInput"
    onChange={()=>{setCharchter((prev)=>!prev)}}
       />
       <label htmlFor="characterInput">Characters</label>
   </div>
 </div>
 </div>
 </div>
 )
}

export default App
