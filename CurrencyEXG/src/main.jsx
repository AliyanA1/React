import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1> <Link to="/calculator">Calculator</Link> </h1>  
      <Outlet /> {/* ✅ Now only renders the correct component */}
    </div>
  )
}

export default App
