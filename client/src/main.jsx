import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/main.css'

// Routers

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Artigos from './components/Artigos.jsx'
import Home from './components/home.jsx'

const paginas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/artigos",
    element: <Artigos />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paginas} />
  </React.StrictMode>,
)
b 