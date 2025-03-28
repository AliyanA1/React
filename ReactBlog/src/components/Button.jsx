// button components and passing some props we can use this everywhere

const Button = ({
    children,
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
    >{children}</button>
  )
}

export default Button