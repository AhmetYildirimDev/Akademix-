import { useState } from 'react'
import Login from './components/login'
import './App.css'
import ResetPassword from './components/reset-password'
import SignUp from './components/sing-up'
import Navbar from './components/navbar'
import HomePage from './components/home-page'
import FAQ from './components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <HomePage/> */}
      <Navbar/>
      {/* <ResetPassword/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <FAQ/>
    </div>
  )
}

export default App
