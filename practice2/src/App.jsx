//making calculator

import { useState } from "react"

function Calculator(){
  const [cal, setCal]=useState('');
 
 // function for handle values
  const handleClick=(val)=>{
    setCal((prev)=> prev+ val)
  }
//function for calculation
  const calculate=()=>{
    try{
      setCal(eval(cal).toString())
    }catch{
      setCal('Erro')
    }
  }

  //function for clear screen
  const clear=()=>{
    setCal('')
  }
  return(
     <div>
      <input type="text" readOnly  value={cal} />

      <div>
        {['1','2','3','4','+','-'].map((item)=>(
          <button key={item} onClick={()=> handleClick(item)}>{item}</button>
        ))}
      </div>

      <div>
        {['5','6','7','8','*','/'].map((item)=>(
          <button key={item} onClick={()=> handleClick(item)}>{item}</button>
        ))}
      </div>

      <div>
      {['9','0','=','C','%'].map((item)=>(
          <button key={item}  onClick={
            ()=> item === '=' ? calculate()  : item === 'C' ? clear() : handleClick(item)}>
              {item}
          </button>
        ))}
      </div>

     </div>
  )
}

export default Calculator