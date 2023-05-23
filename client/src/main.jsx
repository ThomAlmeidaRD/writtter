import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import './assets/main.css'

// Routers

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'

const paginas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sobre",
    element: <About />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={paginas} />
  </React.StrictMode>
)
