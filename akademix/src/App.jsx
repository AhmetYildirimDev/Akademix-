import { useState } from 'react'
import Login from './components/login'
import './App.css'
import ResetPassword from './components/reset-password'
import SignUp from './components/sing-up'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <ResetPassword/> */}
    {/* <Login/> */}
    <SignUp/>
    </>
  )
}

export default App
