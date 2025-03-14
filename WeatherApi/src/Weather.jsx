import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [data, setData]=useState(null)
    const [city, setCity]=useState('')
    const Apikey=import.meta.env.VITE_WEATHER_APP
   
   
       const fetchData=async()=>{
        try {
            const response= await fetch(`http://api.weatherapi.com/v1/current.json?key=${Apikey}&q=${city}&aqi=no`)
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            
            const result=await response.json();
            console.log(result)
            setData(result)
               
           
        } catch (error) {
            console.log('Erro in fetching api: ',error)
        }
       }

    

  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>
       <h1 className="text-2xl">Weather App</h1>
       <input 
    type="text" 
    className='w-[300px] h-8 border-2 border-white text-white p-2 bg-transparent outline-none'
    value={city}
    onChange={(e) => setCity(e.target.value)}
/>
   <button onClick={fetchData}>click</button>

       {
        data? (
            <div className="mt-4">
                    <p>Location: {data.location.name}</p>
                    <p>Temperature: {data.current.temp_c}°C</p>
                    <p>Condition: {data.current.condition.text}</p>
                </div>
        ): (<h2>loading...</h2>)
       }
    </div>

  )
}

export default Weather