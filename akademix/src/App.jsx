import { useState } from 'react'
import Login from './components/login'
import './App.css'
import ResetPassword from './components/reset-password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ResetPassword/> */}
    <Login/>
    </>
  )
}

export default App
