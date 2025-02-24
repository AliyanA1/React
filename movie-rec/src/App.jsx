import { useState } from 'react'
import  Search  from  './components/Search'

function App() {
  const [searchTerm, setsearchTerm] = useState('')

  return (
    <main>
    

    <div className='wrapper'>
    <header>
      <img src="./hero.png" alt="Hero banner" />
      <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassel</h1>
    </header>
      <Search   Srch={searchTerm} SetSrch={setsearchTerm}/>


    </div>
     
    </main>
  )
}

export default App
