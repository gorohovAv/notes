import { useState } from 'react'
import './App.css'
import CyberSqueak from './components/CyberSqueak/CyberSqueak'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageMain from './pages/PageMain/PageMain';
import PageSettings from './pages/PageSettings/PageSettings';

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <PageMain/>, errorElement: <p>Нет такого пути</p>},
    {path: "/settings", element: <PageSettings />},
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
