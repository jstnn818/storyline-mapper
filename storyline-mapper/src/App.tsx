import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import MyMaps from './pages/MyMaps'
import MyCharacters from './pages/MyCharacters'

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element= { <Home />} />
            <Route path="/maps" element= { <MyMaps />} />
            <Route path="/characters" element= { <MyCharacters />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
