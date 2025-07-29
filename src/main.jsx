import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from "./Link.jsx";
// import App from './App.jsx'
import  Example from '../src/Data/Data_Pertumbuhan_Penduduk.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
    {/* { <Example /> } */}
  </StrictMode>,
)
