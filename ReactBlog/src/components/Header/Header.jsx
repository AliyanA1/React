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
      name: 'Logout',
      slug: '/logout',
      active: !authStatus
    },
    {
      name: 'All post',
      slug: '/all-post',
      active: !authStatus
    },
    {
      name: 'Add post',
      slug: '/add-post',
      active: !authStatus
    }
  ]

  return (
    <div className='text-white text-2xl text-mono'>Header</div>
  )
}

export default Header