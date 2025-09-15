import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'

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
