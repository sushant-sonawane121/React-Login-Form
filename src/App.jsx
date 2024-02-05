import { useState } from 'react'
import Loginform from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Loginform/>
    </>
  )
}

export default App
