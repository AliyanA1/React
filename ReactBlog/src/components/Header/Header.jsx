import React from 'react'
import {Logo, Container,Logout} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus=useSelector((state)=>
    state.auth.status
)
  const navigate=useNavigate();
  //navigation for rendering different components
  const navItem=[
    {
      name:'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name:'Sigin',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'Logout',
      slug: '/logout',
      active: authStatus
    },
    {
      name: 'All posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add post',
      slug: '/add-post',
      active: authStatus
    }
  ]

  return (
   <header className='py-3 shadow-2xl bg-gray-900 text-white'>
    <Container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
          <Logo width='70px'/>
          </Link>
        </div>

        <ul className='flex ml-auto'>
          {navItem.map((item)=>(
            item.active ? (
             <li key={item.name}>
              <button onClick={()=> navigate(item.slug)} 
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'
                >{item.name}</button>
             </li>
            ):null
          ))}
          {/* {
            authStatus && (
             <li>
              <Logout/>
             </li>
            )
          } */}
        </ul>
      </nav>
    </Container>

   </header>
  )
}

export default Header