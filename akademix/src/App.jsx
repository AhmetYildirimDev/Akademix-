import { useState } from 'react'
import Login from './components/login'
import './App.css'
import ResetPassword from './components/reset-password'
import SignUp from './components/sing-up'
import Navbar from './components/navbar'
import HomePage from './components/home-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage/>
      {/* <Navbar/> */}
      {/* <ResetPassword/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
    </div>
  )
}

export default App
