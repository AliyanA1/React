import React, { useState } from 'react'
import { quiz } from '../API/QuizApi'

const Quizs = () => {
    const [select, setSelect]=useState({});
    const [score, setScore]=useState(0);

    const handleChange=(index, option,val)=>{
       if (!select.hasOwnProperty(index)) { 
      setSelect((prev) => ({
        ...prev,
        [index]: option,
      }));
    }
        handleOption(option, val)
    }

    const handleOption=(option,val)=>{
      if(option === val.Ans) {
        setScore(prev=> prev +1)
      } else{
       setScore(prev=> (prev > 0 ? prev-1 : 0))
      }
                
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Answers:", select);
      };
  return (
    <div className='h-screen flex justify-center items-center flex-col bg-gray-900 text-white'>
        <h3>your score is: {score}</h3>
       <form onSubmit={handleSubmit}>
       {quiz.map((val, index)=>(
           <div key={index}>
            
             <h3>--{val.q1}</h3>

             {val.options.map((option, optionIndex)=>(
               <div key={optionIndex}>
                <input 
                 name={`question-${index}`} 
                type="radio"
                value={option}
                id={`option-${index}-${optionIndex}`} 
                onChange={()=>handleChange(index, option,val)}
                  disabled={select.hasOwnProperty(index)}
                />
                <label htmlFor={`option-${index}-${optionIndex}`} >{option}</label> <br/>
               </div>
             ))}
           </div>
        ))}
       </form>

    </div>
  )
}

export default Quizs