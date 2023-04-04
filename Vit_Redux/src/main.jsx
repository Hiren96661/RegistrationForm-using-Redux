import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import  store  from './store'
import Page from './Page'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    <Page/>
    </Provider>
  </React.StrictMode>,
)
