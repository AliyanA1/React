import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/auth";
import {Header, Footer} from './components/index'
import {Outlet}  from 'react-router-dom'

function App() {
  const [loading, setLoading]=useState(true);
  const dispatch=useDispatch();

  //useEffect
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
    })
    .catch((error) => console.error("Error fetching user:", error))
    .finally(()=> setLoading(false))
  },[dispatch])
 

 return !loading ? (
  <div className="h-screen flex items-center justify-around bg-gray-900">
       <Header/>
       <main>
        <Outlet/>
       </main>
        <h1 className="text-2xl font-mono text-white">Loading...</h1>
        <Footer/>
      </div>
 ): null

}

export default App
