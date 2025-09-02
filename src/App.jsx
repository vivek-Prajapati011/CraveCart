import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import data from './data'
import ResCard from './component/ResCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Body />
      
      </div>
      
    </>
  )
}

export default App
