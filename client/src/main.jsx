import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import './assets/main.css'

// Routers

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Artigos from './components/artigos'
import Home from './components/home'
import About from './components/about'
import Artigo1 from './components/artigo-1'
import Artigo2 from './components/artigo-2'
import Artigo3 from './components/artigo-3'
import Artigo4 from './components/artigo-4'

const paginas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/artigos",
    element: <Artigos />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "/artigos/artigo-1",
    element: <Artigo1 />
  },
  {
    path: "/artigos/artigo-2",
    element: <Artigo2 />
  },
  {
    path: "/artigos/artigo-3",
    element: <Artigo3 />
  },
  {
    path: "/artigos/artigo-4",
    element: <Artigo4 />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={paginas} />
  </React.StrictMode>
)
