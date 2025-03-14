//logout component
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/auth'

const Logout = () => {
    const dispatch=useDispatch();

    const logoutHandler=()=>{
        authService.logOut().then(
            dispatch(logout)
        )
    }
  return (
    <button className='bg-blue-500 text-white'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default Logout