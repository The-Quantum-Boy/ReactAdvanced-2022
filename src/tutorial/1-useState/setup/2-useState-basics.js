import React, { useState } from 'react';
//to use component must be uppercase
//must be in the function/component body
//cannot call conditionally.

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value =useState(1)[0];
  // const handler =useState(1)[1];
  // console.log(value,handler);
  const [text,setText]=useState("random title")
  const handleClick=() =>{
    if(text ==='random title'){
      setText("hellow world");
    }else{
      setText('random title');
    }

   
  };

  return (<React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick} >
        change title
      </button>
  </React.Fragment>);
};

export default UseStateBasics;
