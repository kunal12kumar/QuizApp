
import './App.css';
import { Box1 } from './Box1';
// import { Box1 } from './Box1';
import { Header } from './Header';
import './header.css'

import { data } from './questions'
import { useState } from 'react';
import './loginpage.css'


function App() {

  let [log, setLog] = useState(false)

  return (
    <div className="App ">
      {/* this is for the body */}
      <div className='h-full bg-next bg-cover'>
        <Header />

       
        <div className='mt-10'>
          {/* this is loginbutton */}
          <button className={`w-[100px] h-[60px] bg-[red] rounded-2xl btn ${log? 'btn1':''}`} onClick={()=>setLog(!log)} >LOGIN</button>
          {/* this is for the login page  */}
          <div className={`login ${log ? 'activelogin':''}`} >
            <span className={`text-5xl text-white `} onClick={()=>setLog(false)} >&times;</span>
            <div className='dis'>
            <input type="text" className='logininput' placeholder='email'></input>
            <button className='loginsubmit'>SUBMIT</button>
            </div>
          </div>
          

          {/* this is for the question box */}
        </div>
        <div className='max-w-[1000px] mx-auto m-[50px] shadow-lg rounded-md bg-gradient-to-tl from-[#0339A6] to-[#04ADBF] grid grid-cols-1  gap-3 '>
          {data.map((obj, i) => {
            return (
              <Box que={obj} key={i}></Box>
            )
          })}

        </div>
        {/* this is for the fotter part */}
        <Box1></Box1>
      </div>

    </div>
  );
}

export default App;

// function Box(){
//   return (

//   )
// }


function Box({ que }) {

  const tit = que.title

  return (

    <div className='w-90 m-4 md:h-[500px] h-96 text-4xl bg-[white] rounded-lg border-[2px] shadow-lg border-[pink]'>
      <h1 className='w-[88%] h-[20%]  border-[red]  border-2 mt-4 rounded-lg shadow-xl mx-auto'>
        {tit}
      </h1>

      <div className='grid md:grid-cols-2 grid-cols-1 w-[88%] h-[65%] rounded-2xl border-2 border-[#2441d3] mx-auto mt-6 my-auto'>
        <button className='md:w-[65%] w-[90%]  h-[60%]  border-[red]  border-2  rounded-lg shadow-xl mx-auto my-auto'>{que.id}</button>
        <button className='md:w-[65%] w-[90%]  h-[60%]  border-[red]  border-2  rounded-lg shadow-xl mx-auto my-auto'></button>
        <button className='md:w-[65%] w-[90%]  h-[60%]  border-[red]  border-2  rounded-lg shadow-xl mx-auto my-auto'></button>
        <button className='md:w-[65%] w-[90%]  h-[60%]  border-[red]  border-2  rounded-lg shadow-xl mx-auto my-auto'></button>
      </div>

    </div>
  )
}


