
import css from './App.module.css'
import Display from './Components/Display'
import Buttons from './Components/Buttons'
import { useState } from 'react'
function App() {
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
setCalVal('');
    }
else if(buttonText==="="){
const result=eval(calVal);
setCalVal(result);
}
else{
  const newDisplayValue=calVal+buttonText;
  setCalVal(newDisplayValue);
}
  }
  let [calVal,setCalVal]=useState("");
 
  return  <div className={css.calculator}>
  <Display displayValue={calVal}></Display>
   <Buttons onButtonClick={onButtonClick}></Buttons>
  </div>
 
}

export default App
