import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subject from './Views/Subject'
import Home from './Views/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>  
    </>
  )
}

export default App
