import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import './components/index/index.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  <BrowserRouter basename='/caps-store'>
    <App></App>
  </BrowserRouter>
)
