//logout component
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/auth'

const Logout = () => {
    const dispatch=useDispatch();

    const logoutHandler=()=>{
       try {
        authService.logOut().then(
          ()=>   dispatch(logout)
         )
       } catch (error) {
         console.log('eror in logout btn: ',error)
       }
    }
  return (
    <button className='bg-blue-500 text-white'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default Logout