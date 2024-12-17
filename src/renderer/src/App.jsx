// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
   const [route, setRoute] = useState('home')

  return (
    <>
      <Navbar />
      <div style={{marginTop: '80px'}}>
         <Outlet></Outlet>
      </div>
      <Footer />
    </>
  )
}

export default App

