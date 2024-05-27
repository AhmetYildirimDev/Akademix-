// import { useState } from 'react'
// import Login from './components/login'
// import './App.css'
// import ResetPassword from './components/reset-password'
// import SignUp from './components/sing-up'
// import Navbar from './components/navbar'
// import HomePage from './components/home-page'
// import FAQ from './components/FAQ'
// import RequestForm from './components/Sem-course request'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       {/* <HomePage/> */}
//       {/* <Navbar/> */}
//       {/* <ResetPassword/> */}
//       {/* <Login/> */}
//       <SignUp/>
//       {/* <FAQ/> */}
//       {/* <RequestForm/> */}
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar'
// import HomePage from './components/home-page'
// import FAQ from './components/FAQ'

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/request-form" element={<RequestForm />} />
//         {/* Diğer rotalarınızı buraya ekleyebilirsiniz */}
//       </Routes>
//     </Router>
//   );
// }


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/home-page';
import ResetPassword from './components/reset-password'
import SignUp from './components/sing-up'
import FAQ from './components/FAQ';
import RequestForm from './components/Sem-course-request';
import ProfilePage from './components/profile-page';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Diğer rotalarınızı buraya ekleyebilirsiniz */}
      </Routes>
    </Router>
  );
}
