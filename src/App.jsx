import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import data from './data.js'
import Thumbnail from './components/Thumbnail.jsx'
import Details from './pages/Details.jsx'
import Home from './pages/Home.jsx'
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path = '/details/:movieId' element={<Details/>}></Route>
      <Route path = '*' element={<Error/>}></Route>
      </Routes>
    </>
  )
}

export default App
