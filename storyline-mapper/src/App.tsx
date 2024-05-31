import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import MyMaps from './pages/MyMaps'
import MyCharacters from './pages/MyCharacters'
import MapPage from './pages/MapPage'
import CharacterPage from './pages/CharacterPage'

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
            <Route path="/maps/:id" element= { <MapPage />} />
            <Route path="/characters/:id" element= { <CharacterPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
