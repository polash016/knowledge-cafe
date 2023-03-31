import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Blogs></Blogs>
    </div>
  )
}

export default App
