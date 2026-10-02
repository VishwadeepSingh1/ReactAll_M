import Fooditems from './components/Fooditem';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMsg from './components/ErrorMsg';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';
import "./App.css"
function App() {

let [foodItems,setFoodItems]=useState([]);
// let [textToShow,setTextState]=useState();


const onKeyDown=(event)=>{

    if(event.key==="Enter"){
      let newFoodItem=event.target.value; 
      event.target.value="";
      let newItems=[...foodItems,newFoodItem];
      setFoodItems(newItems);
   

    }

// setTextState(event.target.value);

}
 return <>
 <Container>
  <h1>Healthy Food</h1>
   

<FoodInput handelKeyDown={onKeyDown}></FoodInput>
<ErrorMsg items={foodItems}></ErrorMsg>
 <Fooditems items={foodItems}></Fooditems>
</Container>
<Container>
    <p>These above are the List of food That are Good for your health and personal well-being...Enjoy.</p>
</Container>
</>
  
}

export default App;
