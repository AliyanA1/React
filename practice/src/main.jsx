import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  {RouterProvider, createBrowserRouter} from  'react-router-dom';
import Layout from './Layout';
import About from './components/About/About';
import  Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:'/About',
        element:<About />
      },
      
     
      {
        path: '/Home',
        element:<Home />

      },
      {
        path:'/Contact',
        element:<Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
