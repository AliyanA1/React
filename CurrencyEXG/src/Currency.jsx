import React, { useEffect, useState } from 'react'

const Currency = () => {
     const [error, setError]=useState()
     const [currency, setCurrencies]=useState([])
     const [exchangeRate, setExchangeRate]=useState()
     const [fromCurrency, setFromCurrency] = useState("USD");
     const [toCurrency, setToCurrency] = useState("PKR");
     const [amount, setAmount]=useState('')
     const [convertedAmount, setConvertedAmount] = useState("");


    const apikey=import.meta.env.VITE_CURRENCY_API_KEY
  
    // useEffect hooks for fetch API
   
   useEffect(()=>{
    const apiFetch=async()=>{
        try {
            const response=await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${apikey}`)
             if(!response.ok){
               throw new error('Error in fetching api')
            }
           
            const data=await response.json();
            console.log(data)
            if (data.rates) {
                setCurrencies(Object.keys(data.rates));
                setExchangeRate(data.rates[toCurrency]/data.rates[fromCurrency]) 
                console.log(exchangeRate)
            }

        } catch (error) {
          setError('error',error)  
        } 
    
    }
    apiFetch()
   },[apikey, toCurrency, fromCurrency])
        
 

    const handleAmountChange=(e)=>{
        const value=e.target.value;
        setAmount(value);
        if(exchangeRate){
            setConvertedAmount((value * exchangeRate).toFixed(1))
        }
    }

  return (
    <div className='h-screen flex justify-center items-center flex-col bg-gray-900 text-white'>
        <h1 className='font-mono text-2xl'>Currency convertor</h1>
     
         {error && <p className='text-red-500'>{error}</p>}
         <h1 className='m-2 text-lg text-cyan-500'>Exchange Rate: {exchangeRate ? exchangeRate.toFixed(2): 'N/A'}</h1>
   
      {currency.length > 0 ? (
        <div className='flex flex-col gap-2'>
            <div>
               <label className='block'>from:</label>
               <select className='p-2 border border-gray-300 rounded text-black bg-white'
               value={fromCurrency}
               onChange={(e)=> setFromCurrency(e.target.value)}
               >
            {currency.map((currency)=>(
                  <option key={currency} value={currency}>
                    {currency}</option>
            ))}
               </select>
            </div>

            {/* to currency DROPDOWN */}
            <div>
                <label className='block' >To:</label>
                <select className='p-2 border border-gray-300 rounded text-black bg-white'
                value={toCurrency}
                onChange={(e)=> setToCurrency(e.target.value)}
                >
                {currency.map((val)=>(
                    <option key={val} value={val}>{val}</option>
                ))}

                </select>
            </div>

           {/* input field */}
           <div>
            <label className='block'>Amount:</label>
            <input
            className='border border-amber-50 text-white p-2'
            type='number'
            value={amount}
            onChange={handleAmountChange}
            />
           </div>

           {/* converted Amount */}
           <p className='mt-2 text-lg'>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
           </p>
        </div>
      ): (
        <p>Loading currencies...</p>
      )}
   
   
    </div>
  )
}

export default Currency