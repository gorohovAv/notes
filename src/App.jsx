import { useState } from 'react'
import './App.css'
//import CyberSqueak from './components/CyberSqueak/CyberSqueak'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import PageMain from './pages/PageMain/PageMain';
//import PageSettings from './pages/PageSettings/PageSettings';
import PageNotes from './pages/PageNotes/PageNotes';

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <PageNotes/>, errorElement: <p>Нет такого пути</p>},
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
