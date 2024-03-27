import { useState } from 'react'
import './App.css'
import CyberSqueak from './CyberSqueak'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <CyberSqueak/>},
    {path: "/settings", element: <></>},
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
