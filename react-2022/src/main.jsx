import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.baseURL = 'https://api-storefake.herokuapp.com/api'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
