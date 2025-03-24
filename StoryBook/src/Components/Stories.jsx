import { story } from '../Story/Story';
import React, { useState } from 'react'

const Stories = ({val}) => {
    const [currentScene, setCurrentScene]=useState('welcome');
    const scene=story[val].story1

    const restart=()=>{
        setCurrentScene('welcome');
    }
  
    switch(currentScene){
        case 'welcome':
            return (
                <div className='text-center'>
                    <h3 className='text-xl font-mono'>{scene.welcome}</h3>
                    <button onClick={()=> setCurrentScene('scene2')}
                     className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                        Start Adventure</button>
                </div>
            );
        case 'scene2' :
            return (
                <div className='text-center'>
                    <h3 className='text-xl font-mono'>{scene.text}</h3>
                    <button onClick={()=> setCurrentScene('Left')}
                     className='py-2 px-2 m-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                      Left 
                    </button>

                    <button onClick={()=> setCurrentScene('Right')}
                     className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                       Right 
                    </button>
                </div>
            );
        case 'Left' :
            return (
                <div className='text-center'>
                    <h3 className='text-xl font-mono'>{scene.choices[0].goleft}</h3>
                    <button onClick={()=> setCurrentScene('Left-fleeBack')}
                     className='py-2 px-2 m-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                      Left 
                    </button>

                    <button onClick={()=> setCurrentScene('Right-StepForward')}
                     className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                       Right 
                    </button>
                </div>
            );
        case 'Left-fleeBack':
            return(
                <div className='text-center'>
                    <h3 className='text-xl font-mono'>{scene.choices[0].left}</h3>
                    <button onClick={ restart}
                     className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                      Restart
                    </button>

                   
                </div>
            );
            case 'Right-StepForward':
                return(
                    <div className='text-center'>
                        <h3 className='text-xl font-mono'>{scene.choices[0].right}</h3>
                        <button onClick={ restart}
                         className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                          Restart
                        </button>
    
                       
                    </div>
                );
            case 'Right' :
            return (
                <div className='text-center'>
                    <h3 className='text-xl font-mono'>{scene.choices[1].goright}</h3>
                    <button onClick={()=> setCurrentScene('Left-Bulding')}
                     className='py-2 px-2 m-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                      Left 
                    </button>

                    <button onClick={()=> setCurrentScene('Right-Enter')}
                     className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                       Right 
                    </button>
                </div>
            )
            case 'Left-Bulding':
                return(
                    <div className='text-center'>
                        <h3 className='text-xl font-mono'>{scene.choices[1].left}</h3>
                        <button onClick={ restart}
                         className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                          Restart
                        </button>
    
                       
                    </div>
                );
                case 'Right-Enter':
                    return(
                        <div className='text-center'>
                            <h3 className='text-xl font-mono'>{scene.choices[1].right}</h3>
                            <button onClick={ restart}
                             className='py-2 px-2 hover:bg-blue-500 bg-blue-400 shadow-2xl rounded-md '>
                              Restart
                            </button>
        
                           
                        </div>
                    );

        
        
            default:
                return null
        
    }
        
  
}

export default Stories