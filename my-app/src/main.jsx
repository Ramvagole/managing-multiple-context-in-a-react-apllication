import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {TodoList} from "./Deep.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList>
      <App />
    </TodoList>
  </React.StrictMode>,
)
