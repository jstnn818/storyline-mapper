//import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  /*const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const fetchCurrentTime = async () => {
        const response = await fetch('/time')
        const json = await response.json()
        if (response.ok) {
            setCurrentTime(json.time)
        }
    }
    fetchCurrentTime()
  }, [])*/

  return (
    <div className="flex">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element= { <Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
