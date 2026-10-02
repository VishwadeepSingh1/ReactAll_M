
import css from './App.module.css'
import Display from './Components/Display'
import Buttons from './Components/Buttons'
function App() {
  
  return  <div className={css.calculator}>
  <Display></Display>
   <Buttons></Buttons>
  </div>
 
}

export default App
