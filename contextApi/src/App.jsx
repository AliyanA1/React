import { ThemeProvider } from "./context/Contex";
import Card from './Components/Card';
import ThemeBtn from './Components/Theme';
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
    
  };

  const darkTheme = () => {
    setThemeMode('dark');
    
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
    
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Card />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <ThemeBtn />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;