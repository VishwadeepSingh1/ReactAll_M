
import AppName from "./components/AppItem"
import AddTodo from "./components/AddTodo"
// import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import "./App.css"
import { useState } from "react"
function App() {
  const [addVal,setAddVal]=useState([{
  name:"Buy-Milk",
  dueDate:"04/10/2023",
},
{
  name:"Go-To-College",
  dueDate:"04/10/2026",
},
]);

const addVal1=(event)=>{
   console.log("add")
}


  return <> 
  <center><AppName></AppName></center>
  <center className="todo">
 
  
  <AddTodo addVal1={addVal1} change={()=>console.log(event)}></AddTodo>
  <TodoItems addVal={addVal}></TodoItems>
  

</center>
</>
}
export default App
