import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <ToastContainer />
      <Blogs></Blogs>
    </div>
  )
}

export default App
