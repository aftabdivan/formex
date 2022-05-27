/*import React, { useState } from 'react';

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
        value={fullName.fName}
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

export default App;*/

import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    qua: "",
  });

  const onSubmits = (event) => {
    event.preventDefault();
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    //const name=event.target.name;
    //const value=event.target.value;
    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };

      /*if(name === 'fName'){
      return{
        fName:value,
        lName:preValue.lName,
        email:preValue.email,
        phone:preValue.phone,
    }
    }else if(name === 'lName'){
        return{
          lName:value,
          fName:preValue.fName,
          email:preValue.email,
          phone:preValue.phone,
        }
      }
      else if(name === 'email'){
        return{
          lName:preValue.lName,
          fName:preValue.fName,
          email:value,
          phone:preValue.phone,
        }
      }
      else if(name === 'phone'){
        return{
          lName:preValue.lName,
          fName:preValue.fName,
          email:preValue.email,
          phone:value,
        }
      }*/
    });
  };

  const change = () => {
    alert("Form Submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fName} {fullName.lName}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <p>{fullName.qua}</p>
            <input
              placeholder="Enter Your First Name"
              name="fName"
              type="text"
              onChange={inputEvent}
              value={fullName.fName}
            />
            <input
              placeholder="Enter Your Last Name"
              name="lName"
              type="text"
              onChange={inputEvent}
              value={fullName.lName}
            />
            <input
              placeholder="Enter Your Email"
              name="email"
              type="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off"
            />
            <input
              placeholder="Enter Your Phone Number"
              name="phone"
              type="number"
              onChange={inputEvent}
              value={fullName.number}
            />
            <input
              placeholder="Enter Your Qualification"
              name="qua"
              type="text"
              onChange={inputEvent}
              value={fullName.qua}
            />

            <button type="submit" onClick={change}>
              Click Me
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
