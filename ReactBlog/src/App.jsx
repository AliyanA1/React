import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/auth";
import {Header, Footer} from './components/index'
import {Outlet}  from 'react-router-dom'

//Main App
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
  <div >
       <Header/>
       <main>
        <Outlet/>
       </main>
        <Footer/>
      </div>
 ): null

}

export default App
