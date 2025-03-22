import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cal from './Components/Call';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<Cal />} />
    </Routes>
  );
}

export default App;
