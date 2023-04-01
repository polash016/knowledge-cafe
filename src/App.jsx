import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header/Header'
import Answer from './components/Answer/Answer'

function App() {

  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Blogs />
      <Answer />
    </div>
  )
}

export default App
