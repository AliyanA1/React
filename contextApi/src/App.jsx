import { useState } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import ThemeContext from './context/Contex'; 

function App() {
  const [theme, setTheme] = useState(''); 

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;