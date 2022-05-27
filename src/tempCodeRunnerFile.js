import React, { useState } from 'react';

const App=()=>{

  const [fullName,setFullName]=useState({
    fName:'',
    lName:'',
  });
  
  const onSubmits=(event)=>{
    event.preventDefault();
   }

  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    const value=event.target.value;
    const name=event.target.name;

    setFullName((preValue)=>{
      if(name === 'fName'){
        return{
          fName:value,
          lName:preValue.lName,
        }; 
      }else{
        if(name === 'lName'){
          return{
             lName:value,
             fName:preValue.fName, 
          }
        }
      }
    })
  }


  return(
    <>
    <div className='main_div'>
      <form onSubmit={onSubmits}>
      <div>
        <h1> Hello {fullName.fName} {fullName.lName} </h1>
        <input 
        type='text'
        placeholder='Enter Your Name'
        name='fName' 
        onChange={inputEvent}
        value={fullName.fname}
        />
        <br />
        <input 
        type='text' 
        placeholder='Enter Your Last Name'
        name='lName' 
        onChange={inputEvent}
        value={fullName.lName}
        />
       
        <button type='submit'> Click Me </button>
      </div>
      </form>
      </div>
    </>
  )
}

export default App;