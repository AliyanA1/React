import { useContext } from "react";
import ThemeContext from "../context/Contex";


function Content() {
    const { theme } = useContext(ThemeContext);
  
    return <p>Current Name: {theme}</p>;
  }
  
  export default Content;