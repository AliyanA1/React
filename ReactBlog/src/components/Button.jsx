import React from 'react'

const Button = ({
    childern,
    type='button',
    background= 'bg-blue-700',
    text='text-white',
    className='',
    ...props

}) => {
  return (
    <button className={`px-4 py-2 rounded-lg 
        ${background} ${text} ${className}`}
         {...props} type={type}
    >{childern}</button>
  )
}

export default Button