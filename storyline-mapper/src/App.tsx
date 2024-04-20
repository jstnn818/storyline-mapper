//import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

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
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path="/" element= { <Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
