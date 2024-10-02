import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Home'
import Navbar from './pages/Navbar'

function App() {
  return(
    <div className='Framework'>
    <Navbar />
    <HomePage />
    </div>
    );
}

export default App
