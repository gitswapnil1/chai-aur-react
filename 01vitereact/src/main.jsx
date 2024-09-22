import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children:'click me to visit google'
// }

const anotherElement= (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


const anotherEle = "chai banao"

const ReactElement = React.createElement(
  'a',
  {href:'http://google.com', taget:'_blank'},
  'click here to visit google',
  anotherEle
)

createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp/>
    ReactElement
)
