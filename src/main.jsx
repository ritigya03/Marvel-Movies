import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Test from './components/Test.jsx'
import data from './data.js'
import Thumbnail from './components/Thumbnail.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='bg-black'>
  <BrowserRouter>
  <App></App>
  </BrowserRouter>
 
 </div>
)
