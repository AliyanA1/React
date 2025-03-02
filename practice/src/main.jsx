import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from  'react-router-dom';
import Layout from './Layout';
import About from './components/About/About';
import  Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github from './components/github/Github';
import { githubInfoLoader } from './components/github/Github';
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:'/About',
//         element:<About />
//       },
      
     
//       {
//         path: '/Home',
//         element:<Home />

//       },
//       {
//         path:'/Contact',
//         element:<Contact />
//       },
//       {
        
//         path:'Home/:Name',
//         element:<User />
//       },
//       {
        
//         path:'/github',
//         element:<Github/>
//       }

//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/About'  element={<About/>} />
      <Route path='/Home'  element={<Home/>} />
      <Route path='/Contact'  element={<Contact/>} />
      <Route path='/Home/:Name' element={<User/>} />
      <Route
       loader={githubInfoLoader}
       path='/Github'  element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
