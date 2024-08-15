import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

//html tag object ni ander convert thase..
//react render function use
const username = "jay"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  username
)


createRoot(document.getElementById('root')).render(
  
    <App />
    //reactElement

)
