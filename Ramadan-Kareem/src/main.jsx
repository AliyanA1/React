import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements}  from 'react-router-dom';
import Home from './components/Home.jsx';
import Sunnah from './components/Sunnah.jsx';
import Dua from './components/Duas.jsx';
import Contact from './components/Contact.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/Sunnah' element={<Sunnah/>}/>
      <Route path='/Duas' element={<Dua/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
