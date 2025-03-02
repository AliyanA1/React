import { useContext } from "react"
import ThemeContext from "../context/Contex"


function Header(){
   const {theme,setTheme}= useContext(ThemeContext);
    return(
     <>
     <h1>My name is: {theme}</h1>
     <button onClick={()=> setTheme(theme === 'Ali' ? 'Aliyan' : 'Ali')}>
        Check name
     </button>
     </>
    )
}

export default Header;

