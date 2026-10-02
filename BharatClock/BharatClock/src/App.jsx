import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
   let time=new Date();
 return <div> <h1>Bharat Clock</h1>
  <p>This is the clock that show the  Current Indian Time</p>
 <h2>Time is :{time.toDateString()} {time.toLocaleTimeString()}</h2>
  </div>
}

export default App;   
